/**
 * @type {import('gatsby').GatsbyConfig}
 */

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV || "development"}`,
});


module.exports = {
  siteMetadata: {
    title: `Ateitis`,
    description: `Ateitis website`,
    author: `@ajboni @emilanoglucero`,
  },
  plugins: [{
    resolve: 'gatsby-source-wordpress',
    options: {
      "url": `${process.env.GATSBY_WORDPRESS_SITE_URL}/graphql`
    }
  },
  {
    resolve: `gatsby-plugin-i18n`,
    options: {
      langKeyDefault: "es",
      langKeyForNull: "es",
      prefixDefault: false,
      useLangKeyLayout: false,
    },
  },
    `gatsby-plugin-react-helmet`,
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `images`,
      path: `${__dirname}/src/images`,
    },
  },
  {
    resolve: `gatsby-plugin-manifest`,
    options: {
      name: `gatsby-starter-default`,
      short_name: `starter`,
      start_url: `/`,
      background_color: `#663399`,
      theme_color: `#663399`,
      display: `minimal-ui`,
      icon: `src/images/favicon.png`, // This path is relative to the root of the site.
    },
  },
  {
    resolve: `gatsby-plugin-sass`,
    options: {
      sassOptions: {
        precision: 6,
      },
    },
  },
    "gatsby-plugin-image", "gatsby-plugin-sharp", "gatsby-transformer-sharp", "gatsby-plugin-styled-components", "gatsby-plugin-use-query-params", "gatsby-plugin-smoothscroll",
  ]
};