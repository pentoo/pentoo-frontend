import React from 'react'
import { graphql } from 'gatsby'
import BlockContent from '@sanity/block-content-to-react'
import getYoutubeID from 'get-youtube-id'

import Hero from '../components/Hero'
import Layout from '../components/Layout'
import SEO from '../components/SEO'

export default props => {
  // let id, url
  const { data } = props
  const page = data && data.page

  const _getYTId = value => {
    const id = getYoutubeID(value)
    const url = `https://www.youtube.com/embed/${id}`

    return url
  }

  // custom component in the body content from the CMS
  const serializers = {
    types: {
      image: props => {
        console.log(props)
      },
      code: props => (
        <pre data-language={props.node.language}>
          <code>{props.node.code}</code>
        </pre>
      ),
      youtube: props => (
        <iframe
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          frameBorder="0"
          height="315"
          src={_getYTId(props.node.url)}
          title="YouTube Video"
          width="560"
        />
      ),
    },
  }

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
              serializers={serializers}
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
