import React from 'react'
import Header from "./Components/Header"
import Footer from './Components/Footer'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <main style={{
      margin:"0",
      padding:"0",
      boxSizing:"border-box"
    }} className='container-fluid'>
    <Header/>
     <Outlet/>
     <Footer/>
    </main>
  )
}

export default Layout