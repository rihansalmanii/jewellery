import React from 'react'

const AdminLoginPage = () => {
  return (
    <div className='w-full h-screen'>
      <div className=''>
        <h1 className='text-center mt-18 text-3xl font-semibold'>Admin Panel</h1>
        <form action="" className='mt-10 px-5 w-full'>
          <div className='flex flex-col gap-1.5'>
            <p>Email:</p>
          <input type="email" className='outline-none border rounded-md px-4 py-2 w-full'/>
          </div>

          <div className='mt-4 flex flex-col gap-1.5'>
            <p>Password:</p>
            <input type="password
            " className='outline-none border rounded-md px-4 py-2 w-full'/>
          </div>
          <button className='bg-black text-white rounded-md w-full text-lg mt-10 font-semibold py-2'>Login</button>
        </form>
      </div>

    </div>
  )
}

export default AdminLoginPage