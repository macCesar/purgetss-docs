import path from 'path';

// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

import { themes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Purge TSS',
  tagline: 'It’s fun making great design with ease',
  url: 'https://purgetss.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'Código Móvil', // Usually your GitHub org/user name.
  projectName: 'Purge TSS Documentation', // Usually your repo name.
  staticDirectories: ['public', 'static'],

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'glossary',
        path: 'glossary',
        routeBasePath: 'glossary',
        // sidebarPath: false, // Deshabilitar el sidebar completamente
      },
    ],
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: false, // Deshabilita la funcionalidad del blog
        sitemap: {
          changefreq: 'weekly',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themes: [
    // ... Your other themes.
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        // ... Your options.
        // `hashed` is recommended as long-term-cache of index file is possible.
        hashed: true,
        // For Docs using Chinese, The `language` is recommended to set to:
        // ```
        // language: ["en", "zh"],
        // ```
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 4,
      },
      navbar: {
        title: 'Purge TSS',
        logo: {
          alt: 'Purge TSS Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            position: 'left',
            docId: 'Installation',
            label: 'Documentation',
          },
          {
            to: 'tikit',
            position: 'left',
            label: 'TiKit UI',
          }, // or position: 'right'
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
              {
                label: 'TiKit UI on GitHub',
                href: 'https://github.com/macCesar/tikit/',
              },
            ],
          },
          {
            title: 'Additional Resources',
            items: [
              {
                label: 'Glossary of Terms',
                to: '/glossary',
              },
            ],
          },
        ],
        copyright: `Copyright ${new Date().getFullYear()} Código Móvil. Built with Docusaurus.`,
      },
      prism: {
        theme: themes.github
      },
      // algolia: {
      //   appId: '4U672EC5Z0',
      //   apiKey: 'a514f779640de4726dab86a97fbeead9',
      //   indexName: 'Purge TSS',
      //   placeholder: 'Search in Purge TSS',
      //   contextualSearch: true,
      //   externalUrlRegex: 'external\\.com|domain\\.com',
      //   searchParameters: {},
      //   searchPagePath: 'search',
      // },
    }),
};

export default config;
