import React from 'react'
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Login from './pages/Login'
import DashBoard from './DashBoard'
import Signup from './components/Signup'

const App = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>} />
          <Route path='/register'element={<Signup />} />
          <Route path='dash' element={<DashBoard />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App