import React from 'react'
import { AiFillHome } from "react-icons/ai";
import { FaChevronCircleLeft, FaUserFriends  } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className='bg-[#219EBC] h-screen px-[25px]'>
        <div className='px-[15px] py-[30px] flex items-center justify-center border-b-[1px] border-[#EDEDED]/[0.3]'>
            <h1 className='text-white text=[20px] leading-[24px] font-extrabold cursor-pointer'>Example</h1>
        </div>
        <div className='flex items-center gap-[15px] py-[20px]'>
            <AiFillHome color='white' />
            <p className='text-white textw=[20px] font-bold '>Dashboard</p>
        </div>
        <div className='flex items-center gap-[10px] py-[20px]'>
            <FaUserFriends color='white'/>
            <p className='text-white text=[16px] font-bold '>User Managament</p>
        </div>
        <div className='flex items-center gap-[10px] py-[20px]'>
            <FaUserFriends color='white'/>
            <p className='text-white text=[16px] font-bold '>Kelola Karyawan</p>
        </div>
        <div className='flex items-center gap-[10px] py-[20px]'>
            <FaUserFriends color='white'/>
            <p className='text-white text=[16px] font-bold '>Kelola Karyawan</p>
        </div>

        <div className='flex items-center justify-center pt-[20px]'>
            <div className='h-[40px] w-[40px] bg-[#338CB6] rounded-full flex items-center justify-center cursor-pointer'>
                <FaChevronCircleLeft color='white' />
            </div>
        </div>
    </div>
  )
}

export default Sidebar