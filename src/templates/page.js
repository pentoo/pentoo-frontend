import * as R from 'ramda'
import React from 'react'
import { graphql } from 'gatsby'
import { format } from 'date-fns'

import BlockContent from '../components/BlockContent'
import Hero from '../components/Hero'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import FAQs from '../components/FAQs'

import { mapIndexed, notNilOrEmpty } from '../lib/helpers'

export default props => {
  const [commitsData, setCommitsData] = React.useState()
  const [releasesData, setReleasesData] = React.useState()
  // let id, url
  const { data } = props
  const page = data && data.page
  const faqs = data && data.faqs

  React.useEffect(() => {
    fetch('https://api.github.com/repos/pentoo/pentoo-overlay/commits')
      .then(res => res.json())
      .then(data => setCommitsData(data))

    fetch('https://pentoo.ch/isos/latest-iso-symlinks/versions.json')
      .then(res => res.json())
      .then(data => setReleasesData(data))
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
          <div
            className={`components ${page.slug.current === 'downloads' &&
              'components-grid'}`}
          >
            {page.slug.current !== 'downloads' ? (
              <BlockContent
                blocks={page._rawBody}
                className="main page-single__body-content"
              />
            ) : (
              <>
                <div>
                  <BlockContent
                    blocks={page._rawBody}
                    className="main page-single__body-content"
                  />
                  <header>
                    <h2 id="releases" className="terminal-prompt">
                      Releases
                    </h2>
                  </header>
                  <div className="terminal-timeline">
                    {notNilOrEmpty(releasesData) &&
                      mapIndexed((release, index) => {
                        return (
                          <div className="terminal-card" key={index}>
                            <header>
                              <strong>
                                {release.name} / version: {release.version}
                              </strong>
                            </header>
                            <div>
                              <h5>Type: {release.type}</h5>
                              <a
                                href={`https://pentoo.ch/${release.path}`}
                                className="btn btn-primary"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                Download
                              </a>
                            </div>
                          </div>
                        )
                      })(releasesData)}
                  </div>
                </div>
                <aside id="menu" className="sidebar">
                  <h3>Changelog</h3>
                  {notNilOrEmpty(commitsData) &&
                    mapIndexed((commit, index) => {
                      return (
                        <>
                          <p key={index}>
                            <p>{commit.commit.message}</p>
                            <footer>
                              <cite>
                                {commit.author.login} /{' '}
                                <a
                                  href={commit.commit.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  {format(
                                    new Date(commit.commit.author.date),
                                    'MM.dd.yyyy - kk:mm'
                                  )}
                                </a>
                              </cite>
                            </footer>
                          </p>
                          <hr />
                        </>
                      )
                    })(R.slice(0, 10, commitsData))}
                </aside>
              </>
            )}
            {page.slug.current === 'faqs' &&
              notNilOrEmpty(faqs) &&
              faqs.faqs.map((f, index) => {
                return <FAQs key={index} faq={f} />
              })}
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
    faqs: sanityFaqs {
      faqs {
        question
        _rawAnswer
      }
    }
  }
`
