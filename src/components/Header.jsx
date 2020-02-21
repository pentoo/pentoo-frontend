import React from 'react'
import { Link } from 'gatsby'
import { IconButton } from '@material-ui/core'

import MenuIcon from '@material-ui/icons/Menu'

export default () => (
  <header className="header">
    <div className="terminal-nav">
      <div className="logo">
        <Link to="/" className="no-style">
          <img src={require('../images/pentoo-logo.webp')} alt="pentoo logo" />
        </Link>
      </div>
      <nav className="terminal-menu main-menu">
        <ul>
          <li>
            <a className="menu-item" href="#">
              About
            </a>
          </li>
          <li>
            <a className="menu-item active" href="#">
              Docs
            </a>
          </li>
          <li>
            <a className="menu-item" href="#">
              FAQ's
            </a>
          </li>
          <li>
            <a className="menu-item" href="#">
              Download
            </a>
          </li>
          <li>
            <a className="menu-item" href="#">
              Blog
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
)
