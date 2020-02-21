import React from 'react'

import Layout from '../components/Layout'
import SEO from '../components/SEO'

import Hero from '../components/Hero'

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
          <div className="terminal-card">
            <header>Pentoo 2015.0 RC4.6 Release</header>
            <div>
              The Pentoo Team is ready to announce the next Release Candidate of
              Pentoo 2015.0 Now that things have quieted down from the height of
              con season, we are proud to release a well tested RC with an all
              new (also tested) installer! As usual our commit logs speak for
              themselves, enjoy all the updates.
            </div>
            <a href="#" className="btn btn-primary">
              Download
            </a>
          </div>
          <div className="terminal-card">
            <header>Pentoo 2015.0 RC4.6 Release</header>
            <div>
              The Pentoo Team is ready to announce the next Release Candidate of
              Pentoo 2015.0 Now that things have quieted down from the height of
              con season, we are proud to release a well tested RC with an all
              new (also tested) installer! As usual our commit logs speak for
              themselves, enjoy all the updates.
            </div>
            <a href="#" className="btn btn-primary">
              Download
            </a>
          </div>
          <div className="terminal-card">
            <header>Pentoo 2015.0 RC4.6 Release</header>
            <div>
              The Pentoo Team is ready to announce the next Release Candidate of
              Pentoo 2015.0 Now that things have quieted down from the height of
              con season, we are proud to release a well tested RC with an all
              new (also tested) installer! As usual our commit logs speak for
              themselves, enjoy all the updates.
            </div>
            <a href="#" className="btn btn-primary">
              Download
            </a>
          </div>
          <div className="terminal-card">
            <header>Pentoo 2015.0 RC4.6 Release</header>
            <div>
              The Pentoo Team is ready to announce the next Release Candidate of
              Pentoo 2015.0 Now that things have quieted down from the height of
              con season, we are proud to release a well tested RC with an all
              new (also tested) installer! As usual our commit logs speak for
              themselves, enjoy all the updates.
            </div>
            <a href="#" className="btn btn-primary">
              Download
            </a>
          </div>
          <div className="terminal-card">
            <header>Pentoo 2015.0 RC4.6 Release</header>
            <div>
              The Pentoo Team is ready to announce the next Release Candidate of
              Pentoo 2015.0 Now that things have quieted down from the height of
              con season, we are proud to release a well tested RC with an all
              new (also tested) installer! As usual our commit logs speak for
              themselves, enjoy all the updates.
            </div>
            <a href="#" className="btn btn-primary">
              Download
            </a>
          </div>
          <div className="terminal-card">
            <header>Pentoo 2015.0 RC4.6 Release</header>
            <div>
              The Pentoo Team is ready to announce the next Release Candidate of
              Pentoo 2015.0 Now that things have quieted down from the height of
              con season, we are proud to release a well tested RC with an all
              new (also tested) installer! As usual our commit logs speak for
              themselves, enjoy all the updates.
            </div>
            <a href="#" className="btn btn-primary">
              Download
            </a>
          </div>
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
    }
  }
`
