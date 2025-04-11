// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Meilisearch Docs',
  tagline: 'Everything you need to use Meilisearch',
  url: 'https://your-site.com', // Your website URL
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'your-org', // GitHub org/user name.
  projectName: 'meilisearch-docs', // Usually the repo name.

  themes: [],  // Remove docusaurus-theme-search-typesense

  themeConfig: {
    navbar: {
      title: 'Meilisearch Docs',
      items: [
        { to: '/docs/intro', label: 'Docs', position: 'left' },
        {
          href: 'https://github.com/your-org/meilisearch-docs',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },

    // ✅ Add the footer section here
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Getting Started',
              to: '/docs/intro',
            },
            {
              label: 'API Reference',
              to: '/docs/api',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/your-org/meilisearch-docs',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/your-company',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'Contact Us',
              href: 'mailto:contact@yourcompany.com',
            },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} Your Company Name`,
    },
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/your-org/meilisearch-docs/edit/main/', // optional edit link
        },
        blog: false, // disable blog
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};

module.exports = config;
