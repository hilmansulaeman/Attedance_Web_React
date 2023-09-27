import React from 'react'
import { FaEnvelope, FaRegBell, FaSearch, FaUser } from 'react-icons/fa'

export const Dashboard = () => {
  return (
    <div className='flex items-center justify-between h-[70px] shadow-lg px-[25px]'>
        <div className='flex items-center rounded-[5px]'>
            <input  type='text'  className='bg-[#F8F9FC] h-[40px] outline-none pl-[13px] w-[350px] rounded-[5px] placeholder-[14px] leading-[20px] font-normal'
                    placeholder='Search for...'/>
            <div className='bg-[#219EBC] h-[40px] px-[14px] flex items-center justify-center cursor-pointer rounded-tr-[5px] 
            rounded-br-[5px]'>
                <FaSearch color='white'/>
            </div>
        </div>
        <div className='flex items-center gap-[15x] relative'>
           <div className='flex items-center gap-[25px] border-r-[1px] pr-[25px]'>
                <FaRegBell />
                <FaEnvelope />
            </div>
            <div className='flex items-center gap-[15px] relative'>
                <p>Example</p>
                <div className='h-[45px] w-[45px] rounded-full  bg-[#338CB6] cursor-pointer flex items-center justify-center
                relative'>
                    <FaUser className='h-[35px] w-[35px] bg-[#219EBC] rounded-full flex items-center justify-center cursor-pointer' style={{ fontSize: '20px', color: 'white' }} />
                </div>
            </div>
        </div>       
    </div> 
  )
}
