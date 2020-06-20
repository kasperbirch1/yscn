require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `YSCN`,
    description: `YSCN® Officielt Site | Yours Sincerely Cecilie Nilsson`,
    author: `@YSCN`,
    slogan: 'Yours Sincerely Cecilie Nilsson',

    menuLinks: [
      {
        name: 'home',
        link: '/'
      },
      {
        name: 'Models',
        link: '/models'
      },
      {
        name: 'about',
        link: '/about'
      },
      {
        name: 'shop',
        link: '/shop'
      },
      {
        name: 'contact',
        link: '/contact'
      }
    ]
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `lei6qf2bos8o`,
        accessToken: `fQRhrN89E4r-Mb1bzdFQSp_X82KauazYdot9WTk0fwo`,
      },
    },
    // {
    //   resolve: `gatsby-source-stripe`,
    //   options: {
    //     objects: ['Balance', 'BalanceTransaction', 'Product', 'ApplicationFee', 'Sku', 'Subscription'],
    //     secretKey: process.env.STRIPE_SECRET_KEY,
    //     downloadFiles: true,
    //   }
    // },
    {
      resolve: `gatsby-source-instagram`,
      options: {
        username: `264210305`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `fullscreen`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`cambay\:400,700`, `arvo\:400,700`, `ubuntu mono\:400,700`],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
