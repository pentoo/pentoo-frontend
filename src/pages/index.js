import * as R from 'ramda'
import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import SEO from '../components/SEO'

import Hero from '../components/Hero'
import { mapIndexed, notNilOrEmpty } from '../lib/helpers'

export default props => {
  const [commitsData, setCommitsData] = React.useState()

  const { data } = props
  const { sanityHomePage: page } = data && data

  React.useEffect(() => {
    fetch('https://api.github.com/repos/pentoo/pentoo-overlay/commits')
      .then(res => res.json())
      .then(data => setCommitsData(data))
  }, [])

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
      <section className="content-container">
        <header>
          <h4 id="releases" className="terminal-prompt">
            Changelog
          </h4>
        </header>
        <div className="terminal-timeline">
          {notNilOrEmpty(commitsData) &&
            mapIndexed((commit, index) => {
              return (
                <div className="terminal-card" key={index}>
                  <header>
                    {commit.author.login} /{' '}
                    <a
                      href={commit.commit.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {commit.commit.author.date}
                    </a>
                  </header>
                  <div>{commit.commit.message}</div>
                </div>
              )
            })(R.slice(0, 10, commitsData))}
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
