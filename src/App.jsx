import { useState, createContext, useEffect } from 'react'
import './index.css'
import SideBar from './components/sidebar/SideBar'
import InfoBar from './components/infoBar/InfoBar'
import DataProvider from './contexts/DataContext'
import { Route, Routes, useLocation } from 'react-router'
import AppLayout from './AppLayout'


function App() {


  return (
    <>
      <DataProvider>
        <Routes >
          <Route path='/' element={<AppLayout />}>
            <Route path=':name' element={<InfoBar />} />
          </Route>
        </Routes>
      </DataProvider>
    </>
  )
}

export default App
