import React from 'react'

export default () => (
  <footer className="footer">
    <div className="container">
      <div className="footer__logo" />
      <nav className="footer__menu terminal-menu">
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
      <p className="text--center footer__copyright">
        {new Date().getFullYear()} &copy; All Rights Reserverd.{' '}
      </p>
    </div>
  </footer>
)
