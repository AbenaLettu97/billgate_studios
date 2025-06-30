import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
import Menu from '../Routes/Menu'

const RootLayout = () => {
  return (
   <>
      
        < Navbar />
        <Outlet />
        <Footer/>
   </>
  )
}

export default RootLayout