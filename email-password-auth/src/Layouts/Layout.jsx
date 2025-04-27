import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import Footer from '../components/Ui/Footer'
import Navbar from '../components/Ui/Navbar'

const Layout = () => {
  return (
    <div className='flex flex-col justify-between min-h-screen'>
        <Navbar />
        <Outlet />
        <Footer />
    </div>
  )
}

export default Layout