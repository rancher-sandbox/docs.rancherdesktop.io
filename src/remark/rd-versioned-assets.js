// @ts-check
"use strict";

/**
 * This is a `remark` plugin which examines all image elements, and replaces the
 * URL if it starts with `rd-versioned-asset://` with a versioned URL pointing
 * at the S3 bucket we use.  For files in the `versioned_docs` directory, we use
 * the version as listed in the file path.  For the `latest` version, as well as
 * for the unversioned (i.e. `next`) docs, we use the maximum version listed in
 * `versions.json` that is a valid version.
 */

import fs from 'fs';
import path from 'path';

// urlPrefix is the prefix for image URLs that we will replace.
const urlPrefix = 'rd-versioned-asset://'
// replacementPrefix is the new URL prefix we will use.
const replacementPrefix = 'https://suse-rancher-media.s3.amazonaws.com/desktop/'

/**
 * Walk down one node in the tree and replace image sources as needed.
 * @param {import('mdast').Node} input The node to examine.
 * @param {import('vfile').VFile} vfile Information about the current markdown source file.
 * @param {string} defaultVersion The version to use if we're not in a versioned directory.
 */
async function processNode(input, vfile, defaultVersion) {
    /** @type any */
    const anyInput = input;
    if ('children' in input) {
        // For nodes with children, walk each child recursively.
        /** @type import('mdast').Parent */
        const { children } = anyInput;
        await Promise.all(children.map(n => processNode(n, vfile, defaultVersion)));
    }
    if (input.type == 'image') {
        // For each image, examine its URL and replace it as needed.
        /** @type import('mdast').Image */
        const image = anyInput;
        const versionPart = vfile.path.split(path.sep).find(p => /^version-\d+\.\d+/.test(p));
        const version = versionPart?.replace(/^version-/, 'v') ?? defaultVersion;
        if (version === 'vlatest') {
            throw new Error(`Invalid version! versionPart=${JSON.stringify(versionPart)} version=${JSON.stringify(version)}`);
        }
        if (image.url.startsWith(urlPrefix)) {
            image.url = image.url.replace(urlPrefix, `${ replacementPrefix }${ version }/`);
        }
    }
}

/**
 * @returns {import('unified').Transformer} A function to transform the markdown tree.
 */
export default () => {
    return async(tree, vfile) => {
        /** @type string[] */
        const versions = JSON.parse(await fs.promises.readFile('versions.json', 'utf-8'));
        const maxVersion = versions.filter(v => /^\d+\.\d+$/.test(v)).sort((a, b) => {
            const aParts = a.split('.').map(s => parseInt(s, 10));
            const bParts = b.split('.').map(s => parseInt(s, 10));
            for (let i = 0; i < Math.min(aParts.length, bParts.length); i++) {
                if (aParts[i] != bParts[i]) {
                    return aParts[i] - bParts[i];
                }
            }
            return bParts.length - aParts.length;
        }).pop();
        /** @type any */
        const anyTree = tree;
        await processNode(anyTree, vfile, `v${maxVersion}`);
    };
};
