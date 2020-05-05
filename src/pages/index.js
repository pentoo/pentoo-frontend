import * as R from 'ramda'
import React from 'react'
import { graphql } from 'gatsby'
import { format } from 'date-fns'

import BlockContent from '../components/BlockContent'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import { mapIndexed, notNilOrEmpty } from '../lib/helpers'

import Hero from '../components/Hero'

export default props => {
  const { data } = props
  const { sanityHomePage: page } = data && data

  const [commitsData, setCommitsData] = React.useState()

  React.useEffect(() => {
    fetch('https://api.github.com/repos/pentoo/pentoo-overlay/commits')
      .then(res => res.json())
      .then(data => setCommitsData(data))
  }, [])

  return (
    <Layout>
      <SEO title="Home Page" />
      <Hero
        title={page.pageTitle}
        type="home-page"
        background={page.hero_image.asset.fluid.srcWebp}
      />
      <section className="content-container">
        <section className="main">
          <div className={`components components-grid`}>
            <BlockContent
              blocks={page._rawBody}
              className="main page-single__body-content"
            />
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
          </div>
        </section>
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
