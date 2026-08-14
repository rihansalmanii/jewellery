import React, { useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'

import Home from './Pages/Home'
import Navbar from './components/common/Navbar'
import AllProducts from './Pages/AllProducts'
import Footer from './components/common/Footer'
import ProductDetail from './Pages/ProductDetail'
import CartPage from './Pages/CartPage'
import Admin from './Pages/Admin'
import AdminLoginPage from './Pages/AdminLoginPage'

const App = () => {
  const location = useLocation()
  const [user, setUser] = useState(null)

  const isAdminRoute = location.pathname.startsWith("/admin")

  return (
    <>
      {!isAdminRoute && <Navbar />}

      <div className={!isAdminRoute ? "pb-14" : ""}>
        <Routes>
          {/* USER ROUTES */}
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<AllProducts />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/bag" element={<CartPage />} />

          {/* ADMIN ROUTES */}
          <Route path="/admin" element={<AdminLoginPage />} />
          <Route path="/admin/products" element={<Admin />} />
        </Routes>
      </div>

      {!isAdminRoute && location.pathname !== "/bag" && <Footer />}
    </>
  )
}

export default App