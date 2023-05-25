import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home';
import AddUser from './AddUser';
import EditUser from './EditUser';
import StudentDetail from './StudentDetail';



const Routing = () => {
  return (
    <>
    <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/adduser' element={<AddUser />} />
    <Route path='/studentdetails' element={<StudentDetail />} />
    <Route path='/edituser' element={<EditUser/>} />

    </Routes>

      
    </>
  )
}

export default Routing
