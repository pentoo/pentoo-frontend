module.exports = {
  sanity: {
    projectId: process.env.GATSBY_SANITY_ID || '<#< sanity.projectId >#>',
    dataset: process.env.SANITY_DATASET || 'production',
    token: process.env.GATSBY_SANITY_TOKEN,
  },
}
