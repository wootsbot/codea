/* eslint-disable max-len */
module.exports = {
  siteMetadata: {
    title: `Codea.dev`,
    siteUrl: `https://www.codea.dev`,
    description: `Codea, un proyecto de código abierto. Si te encanta compartir conocimiento y participar en proyectos con otros desarrolladores.`,
    author: `Jorge Luis Calleja Alvarado`,
    twitter: `@wootsbot`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images/`,
        name: 'images',
      },
    },
    'gatsby-plugin-ui-root',
    {
      resolve: 'gatsby-plugin-material-ui',
      options: {},
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Codea`,
        short_name: `Codea`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `standalone`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
