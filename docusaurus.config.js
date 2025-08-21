// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

import RDVersionedAssets from './src/remark/rd-versioned-assets.js';

const lightCodeTheme = require('prism-react-renderer').themes.github;
const darkCodeTheme = require('prism-react-renderer').themes.dracula;

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
          sidebarCollapsed: true,
          sidebarCollapsible: true,
          // Please change this to your repo.
          editUrl: 'https://github.com/rancher-sandbox/docs.rancherdesktop.io/edit/main',
          versions: {
            current: {
              label: 'Next 🚧',
            },
            latest: {
              label: "Latest",
              banner: "none",
              path: "/",
            },
            "1.20": {
              label: "1.20",
              path: "1.20",
              banner: "none"
            },
          },
          remarkPlugins: [RDVersionedAssets],
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        googleTagManager: {
          containerId: 'GTM-57KS2MW',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      docs: {
        sidebar: {
          autoCollapseCategories: true,
        },
      },
      algolia: {
        // The application ID provided by Algolia
        appId: 'LLF7X2GYUC',
  
        // Public API key: it is safe to commit it
        apiKey: '4b8823c8f4c55119e9bf4d1828d89be9',
  
        indexName: 'rancherdesktop',
  
        // Optional: see doc section below
        contextualSearch: true,
  
        },
      navbar: {
        logo: {
          alt: 'Rancher Desktop Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: `dropdown`,
            label: `Quick Links`,
            position: `right`,
            items: [
              {
                href: 'https://rancherdesktop.io/',
                label: 'Rancher Desktop Home',
              },
              {
                href: 'https://github.com/rancher-sandbox/rancher-desktop/',
                label: 'GitHub',
              },
              {
                href: 'https://github.com/rancher-sandbox/docs.rancherdesktop.io/',
                label: 'Docs GitHub',
              },
            ]
          },
          {
            type: `dropdown`,
            label: `More from SUSE`,
            position: `right`,
            items: [
              {
                href: 'https://www.rancher.com',
                label: 'Rancher',
                className: 'navbar__icon navbar__rancher',
              },
              {
                type: 'html',
                value: '<hr style="margin: 0.3rem 0;">',
              },
              {
                href: 'https://elemental.docs.rancher.com/',
                label: 'Elemental',
                className: 'navbar__icon navbar__elemental',
              },
              {
                href: 'https://fleet.rancher.io/',
                label: 'Fleet',
                className: 'navbar__icon navbar__fleet',
              },
              {
                href: 'https://harvesterhci.io/',
                label: 'Harvester',
                className: 'navbar__icon navbar__harvester',
              },
              {
                type: 'html',
                value: '<hr style="margin: 0.3rem 0;">',
              },
              {
                href: 'https://opensource.suse.com/',
                label: 'More Projects...',
                className: 'navbar__icon navbar__suse',
              },
            ]
          },
          {
            type: 'docsVersionDropdown',
            position: 'left',
            dropdownActiveClassDisabled: true,
          },
          {
            type: 'search',
            position: 'left',
          },
        ],
      },
      colorMode: {
        defaultMode: 'light',
        disableSwitch: true,
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} SUSE Rancher. All Rights Reserved.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
    plugins: [
    ],
};

module.exports = config;
