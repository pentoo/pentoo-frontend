import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListSubheader,
} from '@material-ui/core'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import MenuIcon from '@material-ui/icons/Menu'

import { mapIndexed } from '../lib/helpers'

export default () => {
  const [showDrawer, setShowDrawer] = React.useState(false)
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

  const toggleDrawer = () => {
    setShowDrawer(!showDrawer)
  }

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
        <IconButton
          edge="start"
          className="burger-menu terminal-menu main-menu"
          color="inherit"
          aria-label="menu"
          onClick={toggleDrawer}
        >
          <MenuIcon fontSize="large" />
        </IconButton>
        <Drawer open={showDrawer} onClose={toggleDrawer}>
          <List
            component="nav"
            subheader={
              <ListSubheader component="div" id="nested-list-subheader">
                Main Menu
              </ListSubheader>
            }
          >
            {mapIndexed((item, index) => (
              <ListItem
                button
                key={index}
                style={{ width: 250 }}
                onClick={toggleDrawer}
                onKeyDown={toggleDrawer}
              >
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
              </ListItem>
            ))(items)}
          </List>
        </Drawer>
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
