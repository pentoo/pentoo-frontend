import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { IconButton } from '@material-ui/core'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
// import MenuIcon from '@material-ui/icons/Menu'

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
    <header className="header">
      <div className="terminal-nav">
        <div className="logo">
          <AniLink
            cover
            className="title"
            to="/"
            duration={1.5}
            direction="right"
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
            <img src={settings.logo.asset.fluid.srcWebp} alt="pentoo logo" />
          </AniLink>
        </div>
        <nav className="terminal-menu main-menu">
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
      </div>
    </header>
  )
}
