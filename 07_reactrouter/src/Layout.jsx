import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router'

function Layout() {
  return (
    <>
      <Header />
      {/* Renders the matching child route of a parent route or nothing if no child route matches. */}
      <Outlet />
      <Footer />
    </>
  )
}

export default Layout
