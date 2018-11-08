module.exports = {
  siteMetadata: {
    title: `Codea`,
    siteUrl: `https://www.codea.com.mx`,
    description: 'Codea un proyecto de código abierto y disponible para todos',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-yaml`,
    `gatsby-plugin-catch-links`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: 'language-',
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: true,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 10px`,
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 786,
              backgroundColor: `#f7f7f7`,
            },
          },
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/docs/`,
        name: 'docs',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/community/`,
        name: 'community',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images/`,
        name: 'images',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/data/`,
        name: 'data',
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        includePaths: ['node_modules', 'src'],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Codea`,
        short_name: `Codea`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#404040`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`,
      },
    },
  ],
  mapping: {
    'MarkdownRemark.frontmatter.author': `AuthorYaml`,
    TagsYaml: `TagsYaml`,
    DevelopersYaml: `DevelopersYaml`,
  },
}
