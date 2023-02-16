import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Active from '../components/Active'
import All from '../components/All'
import Completed from '../components/Completed'
import Home from '../container/Home'

const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home />}>
                <Route path='/' element={<All />}/>
                <Route path='/active' element={<Active />}/>
                <Route path='/completed' element={<Completed />}/>
            </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default Router