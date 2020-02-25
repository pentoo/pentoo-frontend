require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Pentoo`,
    description: `Pentoo is a Live CD and Live USB designed for penetration testing and security assessment.`,
    author: `@luchoster & @pentoo_linux`,
  },
  plugins: [
    `gatsby-plugin-transition-link`,
    {
      resolve: 'gatsby-theme-luchoster-base',
    },
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: process.env.GATSBY_SANITY_ID,
        dataset: 'production',
        useCdn: true,
        // a token with read permissions is required
        // if you have a private dataset
        token: process.env.GATSBY_SANITY_TOKEN,
      },
    },
  ],
}
