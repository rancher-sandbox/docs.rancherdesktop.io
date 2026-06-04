![CC BY 4.0](https://img.shields.io/badge/License-CC%20BY%204.0-lightgrey.svg)

# Website

The documentation is licensed under the [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0/). A copy of the license is in the [LICENSE](LICENSE) file.

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Previewing assets for an upcoming release

Image URLs that start with `rd-versioned-asset://` resolve at build time to the S3 folder for the latest released version in `versions.json`. The unversioned ("Next") docs therefore show the previous release's screenshots until a new version is published.

To preview the docs against an unreleased version's assets, set `RD_ASSET_VERSION`:

```
$ RD_ASSET_VERSION=1.23 yarn start
```

This points the Next and `latest` docs at `desktop/v1.23/` on S3; the assets must already exist there. Leave the variable unset for normal builds.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
