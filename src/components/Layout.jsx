import React from 'react'

// custom components
import Header from './Header'
import Footer from './Footer'
import '../styles/main.scss'

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
