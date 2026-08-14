import React, { useState } from 'react'
import { login } from '../services/auth'
import { useNavigate } from 'react-router-dom'


const AdminLoginPage = () => {

  const navigate = useNavigate()

  const [formData, setFormData] = useState({
      email: "",
      password: ""
    })


  const handleChange = (e) => {
    const { name, value } = e.target

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }))

  }

  const handleSubmit = async (e) => {

    e.preventDefault()

    console.log(formData)
    try {
      const data = await login(formData)
      console.log(data)

      if(data.user.role == "admin") {
        navigate("/admin/products")
      } else {
        navigate("/")
      }
    } catch(err) {
      console.log(err.respons?.data?.message)
    }

    setFormData({
      email: "",
      password: ""
    })

    console.log("submitted")
  }

  return (
    <div className='w-full h-screen'>
      <div className=''>
        <h1 className='text-center mt-18 text-3xl font-semibold'>Admin Panel</h1>
        <form action="" onSubmit={handleSubmit} className='mt-10 px-5 w-full'>
          <div className='flex flex-col gap-1.5'>
            <p>Email:</p>
          <input type="email" value={formData.email} className='outline-none border rounded-md px-4 py-2 w-full'
          name='email'
          onChange={handleChange}
          />

          </div>

          <div className='mt-4 flex flex-col gap-1.5'>
            <p>Password:</p>
            <input type="password" value={formData.password} className='outline-none border rounded-md px-4 py-2 w-full'
            name='password'
            onChange={handleChange}/>
          </div>

          <button className='bg-black text-white rounded-md w-full text-lg mt-10 font-semibold py-2'
          type='submit'>Login</button>
        </form>
      </div>

    </div>
  )
}

export default AdminLoginPage