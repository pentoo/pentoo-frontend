import React from 'react'
import { graphql } from 'gatsby'

import BlockContent from '../components/BlockContent'
import Layout from '../components/Layout'
import SEO from '../components/SEO'

import Hero from '../components/Hero'

export default props => {
  const { data } = props
  const { sanityHomePage: page } = data && data

  return (
    <Layout>
      <SEO title="Home Page" />
      <Hero
        title={page.pageTitle}
        type="home-page"
        background={page.hero_image.asset.fluid.srcWebp}
      />
      <section className="content-container">
        <BlockContent
          blocks={page._rawBody}
          className="main page-single__body-content"
        />
      </section>
    </Layout>
  )
}

export const homePageQuery = graphql`
  query {
    sanityHomePage {
      _rawBody
      pageTitle
      hero_image {
        asset {
          fluid {
            srcWebp
          }
        }
      }
    }
  }
`
