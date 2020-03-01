const queries = require("./src/utils/algolia")

require("dotenv").config()

module.exports = {
  pathPrefix: '/css',
  plugins: [
    {
      resolve: `gatsby-plugin-algolia`,
      options: {
        appId: process.env.GATSBY_ALGOLIA_APP_ID,
        apiKey: process.env.ALGOLIA_ADMIN_KEY,
        queries,
        chunkSize: 10000, // default: 1000
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/content`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-remark-classes`,
      options: {
        classMap: {
          h1: 'title',
          h2: 'subtitle',
          paragraph: 'para'
        }
      }
    },
  ]
}
