import React from 'react'
import { Routes, Route } from "react-router-dom"
import Aisoftware from './Aisoftware'
import Blog from './Blog'
import Contact from './Contact'
import Home from './Home'
import Navbar from './Navbar'


const Allroute = () => {
    return (
        <Routes>
            <Route path='/' element={<Navbar></Navbar>}></Route>
            <Route path='/home' element={<Home></Home>}></Route>
            <Route path='/ai' element={<Aisoftware></Aisoftware>}></Route>
            <Route path='/blog' element={<Blog></Blog>}></Route>
            <Route path='/contact' element={<Contact></Contact>}></Route>
        </Routes>
    )
}

export default Allroute