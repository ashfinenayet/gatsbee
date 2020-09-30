module.exports = {
  siteMetadata: {
    title: 'Ashfin Enayet',
    author: "Ashfin Enayet",
    description: "Just a website about me, THE Ashfin Enayet",
    siteUrl: "https://ashfin.me/",
    social: [
      {
        name: "twitter",
        url: "https://twitter.com/Ashfin_Enayet",
      },
      {
        name: "instagram",
        url: "https://www.instagram.com/a.shfin/",
      },
      {
        name: "github",
        url: "https://github.com/ashfinenayet",
      },
    ],
  },
  plugins: [
    // Shortcut for adding plugins without options.
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp",
    {
      // Standard plugin with options example
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
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
            },
          },
        ],
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
}

