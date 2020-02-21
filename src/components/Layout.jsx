import React from 'react'
import Headroom from 'react-headroom'

// custom components
import Header from './Header'
import Footer from './Footer'
import '../styles/main.scss'
import 'terminal.css'

const Layout = ({ children }) => {
  return (
    <>
      <Headroom>
        <Header />
      </Headroom>
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
