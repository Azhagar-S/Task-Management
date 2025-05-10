import React from 'react'
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Login from './pages/Login'
import DashBoard from './DashBoard'

const App = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/'element={<Login />} />
          <Route path='dash' element={<DashBoard />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App