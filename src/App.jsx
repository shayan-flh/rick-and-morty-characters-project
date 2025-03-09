import { Route, Routes } from 'react-router'
import AppLayout from './AppLayout/'
import InfoBar from './components/infoBar/InfoBar'
import DataProvider from './contexts/DataContext'
import './index.css'
import SinglePage from './components/singlepage/SinglePage'


function App() {


  return (
    <>
      <DataProvider>
        <Routes >
          <Route path='/' element={<AppLayout />}>
            <Route path=':name' element={<InfoBar />} />
          </Route>
          <Route path='/singlechar'>
            <Route path=':single' element={<SinglePage />} />
          </Route>
        </Routes>
      </DataProvider>
    </>
  )
}

export default App
