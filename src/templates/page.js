import * as R from 'ramda'
import React from 'react'
import { graphql } from 'gatsby'

import BlockContent from '../components/BlockContent'
import Hero from '../components/Hero'
import Layout from '../components/Layout'
import SEO from '../components/SEO'

import { mapIndexed, notNilOrEmpty } from '../lib/helpers'

export default props => {
  const [commitsData, setCommitsData] = React.useState()
  // let id, url
  const { data } = props
  const page = data && data.page

  React.useEffect(() => {
    fetch('https://api.github.com/repos/pentoo/pentoo-overlay/commits')
      .then(res => res.json())
      .then(data => setCommitsData(data))
  }, [])

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
          <div className="components components-grid">
            <BlockContent
              blocks={page._rawBody}
              className="main page-single__body-content"
            />
            {page.slug.current === 'downloads' && (
              <aside id="menu" className="sidebar">
                <h3>Changelog</h3>
                {notNilOrEmpty(commitsData) &&
                  mapIndexed((commit, index) => {
                    return (
                      <blockquote key={index}>
                        <p>{commit.commit.message}</p>
                        <footer>
                          <cite>
                            {commit.author.login} /{' '}
                            <a
                              href={commit.commit.url}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {commit.commit.author.date}
                            </a>
                          </cite>
                        </footer>
                      </blockquote>
                    )
                  })(R.slice(0, 10, commitsData))}
              </aside>
            )}
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
