import React from 'react'
import { graphql } from 'gatsby'

import BlockContent from '../components/BlockContent'
import Hero from '../components/Hero'
import Layout from '../components/Layout'
import SEO from '../components/SEO'

export default props => {
  // let id, url
  const { data } = props
  const page = data && data.page

  return (
    <Layout>
      <SEO title={page.pageTitle} />
      <Hero
        title={page.pageTitle}
        type="internal-page"
        background={page.hero_image.asset.fluid.srcWebp}
      />
      <div id="main" className="page-single content-container">
        <section className="main">
          <div className="inner">
            <BlockContent
              blocks={page._rawBody}
              className="page-single__body-content"
            />
          </div>
        </section>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query PageTemplateQuery($slug: String!) {
    page: sanityPage(slug: { current: { eq: $slug } }) {
      pageTitle
      _rawBody
      hero_image {
        asset {
          fluid {
            srcWebp
          }
        }
      }
      slug {
        current
      }
    }
  }
`
