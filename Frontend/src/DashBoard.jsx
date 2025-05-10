import React from 'react'
import Header from './components/Header'
import TaskContainer from './components/TaskContainer'
import Profile from './components/Profile'
const DashBoard = () => {
  return (
    <div className='w-screen max-w-7xl mx-auto  mt-10 '>
        <Header />
        <div>
           <TaskContainer />
           <Profile />
        </div>
    </div>
  )
}

export default DashBoard