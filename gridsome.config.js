// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: "Skuld",
  siteUrl: "https://distracted-bassi-765380.netlify.app/",
  transformers: {
    remark: {
      externalLinksTarget: "_blank",
      externalLinksRel: ["nofollow", "noopener", "noreferrer"],
      anchorClassName: "icon icon-link",
      plugins: [],
    },
  },
  plugins: [
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "articles/**/*.md",
        typeName: "Article",
        remark: {
          plugins: [],
        },
      },
    },
    {
      use: `gridsome-plugin-netlify-cms`,
      options: {
        publicPath: `/admin`,
      },
    },
    {
      use: "@gridsome/plugin-sitemap",
      options: {
        exclude: ["/admin"],
        // config: {
        //   '/articles/*': {
        //     changefreq: 'weekly',
        //     priority: 0.5,
        //     lastmod: '2020-02-19',
        //   },
        //   '/about': {
        //     changefreq: 'monthly',
        //     priority: 0.7,
        //     lastmod: '2020-05-12',
        //   }
        // }
      },
    },
  ],
};
