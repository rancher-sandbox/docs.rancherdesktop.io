import React from 'react';
import Head from '@docusaurus/Head';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Metadata from '@theme-original/DocItem/Metadata';
import {
  useActivePlugin,
  useDoc,
  useDocVersionSuggestions,
} from '@docusaurus/plugin-content-docs/client';

function addTrailingSlash(path) {
  return path.endsWith('/') ? path : `${path}/`;
}

// Point the canonical URL at the latest version of this page, so search
// engines fold every version — and the unreleased "Next" docs — into the
// latest release instead of indexing duplicates.
function CanonicalToLatest() {
  const {siteConfig: {url}} = useDocusaurusContext();
  const {metadata} = useDoc();
  const {pluginId} = useActivePlugin({failfast: true});
  const {latestDocSuggestion} = useDocVersionSuggestions(pluginId);
  // latestDocSuggestion is undefined when this page no longer exists in the
  // latest version; fall back to the page's own URL.
  const canonicalUrl =
    url + addTrailingSlash(latestDocSuggestion?.path ?? metadata.permalink);
  return (
    <Head>
      <link rel="canonical" href={canonicalUrl} />
      <meta property="og:url" content={canonicalUrl} />
    </Head>
  );
}

export default function MetadataWrapper(props) {
  return (
    <>
      <Metadata {...props} />
      <CanonicalToLatest />
    </>
  );
}
