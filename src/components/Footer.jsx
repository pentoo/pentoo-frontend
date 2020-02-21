import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

import { mapIndexed } from '../lib/helpers'

export default () => {
  const data = useStaticQuery(graphql`
    {
      menuItems: sanityMainMenu {
        id
        items {
          slug
          page_title
        }
      }
      siteSettings: sanitySiteSettings {
        logo {
          asset {
            fluid(maxHeight: 700) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  `)

  const { items } = data.menuItems
  const settings = data.siteSettings

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__logo" />
        <nav className="footer__menu terminal-menu">
          <ul>
            {mapIndexed((item, index) => (
              <li key={index}>
                <AniLink
                  cover
                  className="menu-item"
                  to={item.slug}
                  duration={1.5}
                  direction="left"
                  bg={`
                      url(${settings.logo.asset.fluid.srcWebp})
                      center / auto    /* position / size */
                      no-repeat        /* repeat */
                      fixed            /* attachment */
                      padding-box      /* origin */
                      content-box      /* clip */
                      #a3abba          /* color */
                    `}
                >
                  {item.page_title}
                </AniLink>
              </li>
            ))(items)}
          </ul>
        </nav>
        <p className="text--center footer__copyright">
          {new Date().getFullYear()} &copy; All Rights Reserverd.{' '}
        </p>
      </div>
    </footer>
  )
}
