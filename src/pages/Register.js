import React from 'react'


export default function Register() {
    return (
        <div className='bg-[#219EBC] grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
            <div className='bg-gray-100 flex flex-col justify-center'>
                <form className='max-w-[400px] w-full mx-auto p-4'>
                    <h2 className='text-4xl font-bold text-center py-6'>Masuk</h2>
                    <div className='flex flex-col py-2'>
                        <label>Username</label>
                        <input className='border p-2' type="text" />
                    </div>
                    <div className='flex flex-col py-2'>
                        <label>Password</label>
                        <input className='border p-2' type="password" />
                    </div>
                    <button className='border w-full my-5 py-2 bg-[#8ECAE6] hover:bg-[#219EBC] text-white'>Sign In</button>
                    <div className='flex justify-between'>
                        <p className='flex items-center'><input className='mr-2' type="checkbox" /> Remember Me</p>
                        <p>Create an account</p>
                    </div>
                </form>
            </div>
            <div className='hidden sm:flex lg:grid h-[100vh] rounded-sw justify-center items-center'>
                <img className='w-[600px] rounded-md' src={process.env.PUBLIC_URL + '/login.png'} alt="show info"/> 
            </div>
                        
        </div>
      )
    };