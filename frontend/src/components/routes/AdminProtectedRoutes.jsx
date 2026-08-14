import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'


const AdminProtectedRoutes = ({user}) => {

    if(!user) {
        return <Navigate to="/admin" replace/>
    }
    
    if(user.role !== "admin") {
        return <Navigate to="" />
    }

  return (
    <div>AdminProtectedRoutes</div>
  )
}

export default AdminProtectedRoutes