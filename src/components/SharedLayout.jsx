import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Appfooter from './Appfooter'

const SharedLayout = () => {
    return (
        <>
        <Navbar />
        <Outlet />
        <Appfooter />
        </>
    )
}

export default SharedLayout