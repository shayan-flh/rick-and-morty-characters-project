import React, { useContext } from 'react'
import { Outlet, useParams } from 'react-router'
import Header from './components/header/Header'
import { DataContextDispatchProvider } from './contexts/DataContext'
import SideBar from './components/sidebar/SideBar'
import Footer from './footer/Footer'

function AppLayout() {


    return (
        <>
            <Header />
            <div className='flex overflow-hidden' style={{ height: '1100px' }}>
                <SideBar />
                <Outlet />
            </div>
            <Footer />
        </>
    )
}

export default AppLayout