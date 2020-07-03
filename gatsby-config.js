module.exports = {
  siteMetadata: {
    title: 'Gatsby + Node.js (TypeScript) API',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-remark',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src`,
        name: `src`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-171507543-1",
      },
    },
      {
          resolve: `gatsby-plugin-manifest`,
          options: {
            name: 'Gatsby + Node.js (TypeScript) API',
            short_name: 'Gatsby + Node.js (TypeScript)',
            start_url: '/',
            icon: 'src/images/favicon.png',
          },
        },
      ],
    };
    