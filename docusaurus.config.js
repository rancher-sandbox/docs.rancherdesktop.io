// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Rancher Desktop Docs',
  tagline: 'Rancher Desktop Docs',
  url: 'https://docs.rancherdesktop.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'rancher-sandbox', // Usually your GitHub org/user name.
  projectName: 'docs.rancherdesktop.io', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/rancher-sandbox/docs.rancherdesktop.io/edit/main',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        logo: {
          alt: 'Rancher Desktop Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            href: 'https://rancherdesktop.io/',
            label: 'Rancher Desktop Home',
            target: '_self',
            position: 'right',
          },
          {
            href: 'https://github.com/rancher-sandbox/rancher-desktop/',
            label: 'GitHub',
            position: 'right',
          },
          {
            href: 'https://github.com/rancher-sandbox/docs.rancherdesktop.io/',
            label: 'Docs GitHub',
            position: 'right',
          },
        ],
      },
      colorMode: {
        defaultMode: 'light',
        disableSwitch: true,
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} SUSE. Rancher Desktop is an open source project of the SUSE Rancher Engineering group. This docs site is built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
    plugins: [
      [require.resolve('docusaurus-lunr-search'),
          {
              indexBaseUrl: true
          }
      ]
    ],
};

module.exports = config;
