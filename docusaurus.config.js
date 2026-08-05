import path from 'path';

// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

import { themes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'PurgeTSS',
  tagline: 'It’s fun making great design with ease',
  url: 'https://purgetss.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenAnchors: 'throw',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },
  favicon: 'img/favicon.ico',
  organizationName: 'Código Móvil', // Usually your GitHub org/user name.
  projectName: 'PurgeTSS Documentation', // Usually your repo name.
  staticDirectories: ['public', 'static'],

  scripts: [
    {
      async: true,
      src: 'https://context7.com/widget.js',
      'data-library': '/maccesar/purgetss-docs-for-context7',
    },
  ],

  headTags: [
    {
      tagName: 'script',
      attributes: { type: 'application/ld+json' },
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: 'PurgeTSS',
        applicationCategory: 'DeveloperApplication',
        // The CLI runs on the developer's machine, not on the devices the
        // resulting apps are built for.
        operatingSystem: 'macOS, Windows, Linux',
        description:
          'A command-line toolkit for developers building cross-platform mobile apps with Titanium SDK. It provides utility classes for Alloy views and controllers, purges the unused ones so the generated app.tss stays lean, and automates icon fonts, color palettes, animations, grids and app assets.',
        url: 'https://purgetss.com',
        downloadUrl: 'https://www.npmjs.com/package/purgetss',
        codeRepository: 'https://github.com/macCesar/purgetss',
        softwareRequirements: 'Node.js, Titanium SDK',
        license: 'https://opensource.org/licenses/MIT',
        author: { '@type': 'Person', name: 'César Estrada' },
        publisher: { '@type': 'Organization', name: 'Código Móvil' },
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      }),
    },
  ],

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
          // Internal search results page: no content of its own for crawlers.
          ignorePatterns: ['/search'],
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
        indexBlog: false,
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
        title: 'PurgeTSS',
        logo: {
          alt: 'PurgeTSS Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            position: 'left',
            docId: 'installation',
            label: 'Documentation',
          },
          {
            to: 'tikit',
            position: 'left',
            label: 'TiKit UI',
          }, // or position: 'right'
          {
            to: 'changelog',
            position: 'left',
            label: 'Changelog',
          },
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
      //   indexName: 'PurgeTSS',
      //   placeholder: 'Search in PurgeTSS',
      //   contextualSearch: true,
      //   externalUrlRegex: 'external\\.com|domain\\.com',
      //   searchParameters: {},
      //   searchPagePath: 'search',
      // },
    }),
};

export default config;
