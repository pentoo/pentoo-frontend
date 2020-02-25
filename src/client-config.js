module.exports = {
  sanity: {
    projectId: process.env.SANITY_ID || '<#< sanity.projectId >#>',
    dataset: process.env.SANITY_DATASET || 'production',
    token: process.env.SANITY_TOKEN,
  },
}
