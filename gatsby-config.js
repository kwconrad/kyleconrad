module.exports = {
  siteMetadata: {
    title: `Kyle Conrad`,
    description: `Designer, developer, storyteller. I'm Kyle. I solve problems and design solutions to help businesses grow.`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Kyle Conrad Personal Website`,
        short_name: `kyle-conrad-personal`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#272729`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Gothic+A1\:400,700`,
          `open sans\:400,400i,700`, // you can also specify font weights and styles
        ],
        display: "swap",
      },
    },
  ],
};
