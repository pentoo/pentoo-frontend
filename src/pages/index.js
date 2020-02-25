import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import SEO from '../components/SEO'

import Hero from '../components/Hero'
import { mapIndexed, notNilOrEmpty } from '../lib/helpers'

export default props => {
  const { data } = props
  const { sanityHomePage: page } = data && data

  return (
    <Layout>
      <SEO title="Pentoo" />
      <Hero
        title={page.pageTitle}
        type="home-page"
        background={page.hero_image.asset.fluid.srcWebp}
      />
      <section className="content-container">
        <header>
          <h4 id="releases" className="terminal-prompt">
            Releases
          </h4>
        </header>
        <div className="terminal-timeline">
          {notNilOrEmpty(page.releases) &&
            mapIndexed((release, index) => {
              return (
                <div className="terminal-card" key={index}>
                  <header>{release.release_name}</header>
                  <div>{release.description}</div>
                  <a href="#" className="btn btn-primary">
                    Download
                  </a>
                </div>
              )
            })(page.releases)}
        </div>
      </section>
    </Layout>
  )
}

export const homePageQuery = graphql`
  query {
    sanityHomePage {
      pageTitle
      hero_image {
        asset {
          fluid {
            srcWebp
          }
        }
      }
      releases {
        release_name
        release_date
        description
      }
    }
  }
`
