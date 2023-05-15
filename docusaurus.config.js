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
            "1.9-tech-preview": {
              label: "1.9-tech-preview",
              path: "1.9-tech-preview",
              banner: "none"
            },
            1.8: {
              label: "1.8",
              path: "1.8",
              banner: "none"
            }
          },
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

  i18n: {
    defaultLocale: "en",
    locales: ["en", "zh"],
    localeConfigs: {
      en: {
        label: "English",
      },
      zh: {
        label: "简体中文",
      },
    },
  },

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      docs: {
        sidebar: {
          autoCollapseCategories: true,
        },
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
                target: '_self',
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
            type: 'docsVersionDropdown',
            position: 'left',
            dropdownActiveClassDisabled: true,
          },
          {
            type: "localeDropdown",
            position: "right",
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
