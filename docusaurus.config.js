// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'PurgeTSS',
  tagline: 'It’s fun making great design with ease',
  url: 'https://purgetss.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'Código Móvil', // Usually your GitHub org/user name.
  projectName: 'PurgeTSS Documentation', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        // },
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
        title: 'PurgeTSS',
        logo: {
          alt: 'PurgeTSS Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'Installation',
            position: 'left',
            label: 'Documentation',
          },
          // { to: '/blog', label: 'Blog', position: 'left' },
          {
            href: 'https://github.com/macCesar/purgetss/',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          // {
          //   title: 'Docs',
          //   items: [
          //     {
          //       label: 'Tutorial',
          //       to: '/docs/intro',
          //     },
          //   ],
          // },
          // {
          //   title: 'Social Networks',
          //   items: [
          //     {
          //       label: 'Twitter',
          //       href: 'https://twitter.com/codigomovil',
          //     },
          //     {
          //       label: 'Facebook',
          //       href: 'https://www.facebook.com/codigomovil/',
          //     },
          //     {
          //       label: 'Instagram',
          //       href: 'https://www.instagram.com/codigomovil/',
          //     },
          //     {
          //       label: 'YouTube',
          //       href: 'https://www.youtube.com/user/codigomovil',
          //     },
          //   ],
          // },
          {
            title: 'GitHub',
            items: [
              // {
              //   label: 'Blog',
              //   to: '/blog',
              // },
              {
                label: 'PurgeTTS on GitHub',
                href: 'https://github.com/macCesar/purgetss/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Código Móvil. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      algolia: {
        appId: 'G7HP17Z8UY',
        apiKey: 'b3acf2ac331b0e8f41919417480242e3',
        indexName: 'PurgeTSS',
        placeholder: 'Search in PurgeTSS',
        contextualSearch: true,
        externalUrlRegex: 'external\\.com|domain\\.com',
        searchParameters: {},
        searchPagePath: 'search',
      },
    }),
};

module.exports = config;
