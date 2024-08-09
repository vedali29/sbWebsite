import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Contact from './components/Contact'
import Initiatives from './components/Initiatives'
import AboutUs from './components/AboutUs'


const App = () => {
  return (
    <>
      <Routes>
        <Route exact path ='/' element = {<Home/>}/>
        <Route path='AboutUs' element={<AboutUs/>}/>
        <Route path='Contact' element={<Contact/>}/>
        <Route path='Initiatives' element={<Initiatives/>}/>
      </Routes>
    </>
  )
}

export default App