module.exports = {
  siteMetadata: {
    title: `Codea`,
    siteUrl: `https://www.codea.com.mx`,
    description: `Codea un sitio de blog para JavaScript`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
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
              showLineNumbers: false,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/docs/markdown`,
        name: 'markdown-pages',
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        includePaths: ['node_modules', 'src'],
      },
    },
  ],
}
