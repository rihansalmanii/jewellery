import React from 'react'
import  { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Navbar from './components/common/Navbar'
import AllProducts from './Pages/AllProducts'
import Footer from './components/common/Footer'

const App = () => {
  return (
    <>
    <Navbar />
    <div className='pb-14'>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<AllProducts />} />

    </Routes>


    <Footer />
    </div>
    </>
  )
}

export default App