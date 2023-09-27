import dayjs from "dayjs";
import React, { useState } from "react";
import { FaEllipsisV, FaRegCalendar, FaRegCalendarCheck, FaRegCalendarMinus } from 'react-icons/fa';
import {TbMoodSick } from 'react-icons/tb';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { BsFillCheckCircleFill } from "react-icons/bs";
import { generateDate, months } from "../util/Calender";
import cn from "../util/cn";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { Button } from "./Button";
  
const days = ["S", "M", "T", "W", "T", "F", "S"];

const data = [
    {
      name: 'Page A',
      Kehadiran: 4000,
      Izin: 2400,
      Sakit: 2400,
      Cuti: 2600,
    },
    {
      name: 'Page B',
      Kehadiran: 3000,
      Izin: 1398,
      Sakit: 2210,
      Cuti: 1398,
    },
    {
      name: 'Page C',
      Kehadiran: 2000,
      Izin: 9800,
      Sakit: 2290,
      Cuti: 2390,
    },
    {
      name: 'Page D',
      Kehadiran: 2780,
      Izin: 3908,
      Sakit: 2000,
      Cuti: 2000,
    },
    {
      name: 'Page E',
      Kehadiran: 1890,
      Izin: 4800,
      Sakit: 2181,
      Cuti: 2131,
    },
    {
      name: 'Page F',
      Kehadiran: 2390,
      Izin: 3800,
      Sakit: 2500,
      Cuti: 1500,
    },
    {
      name: 'Page G',
      Kehadiran: 3490,
      Izin: 4300,
      Sakit: 2100,
      Cuti: 1299,
    },
  ];

	

const Main = () => {
  const currentDate = dayjs();
	const [today, setToday] = useState(currentDate);
	const [selectDate, setSelectDate] = useState(currentDate);
  return (
    <div className='pt-[25px] px-[25px] bg-[#F8F9FC]'>
        <div className='flex items-center justify-between'>
            <h1 className='text-[#5a5c69] text-[32px] leading-[34px] font-normal 
            cursor-pointer'>Dashboard</h1>
        </div>
        <div className='grid grid-cols-4 gap-[30px] mt-[25px] pb-[15px]'>
            <div className='h-[100px] rounded-[8px] bg-white flex items-center justify-between px-[30px] cursor-pointer hover:shadow-lg 
                        transform hover:scale-[103%] transition duration-300 ease-out border-l-4 border-[#4E73DF] pl-4'>
                <div>
                <h2 className='text-[#404040] text-[16px] leading-[17px] font-bold'>Kehadiran</h2>
                <h2 className='text-[20px] leading-[24px] font-bold text-[#5a5c69] mt-[5px]'>0%</h2>
                </div>
                <FaRegCalendarCheck fontSize={28} color='1847ED' />
            </div>

            <div className='h-[100px] rounded-[8px] bg-white flex items-center justify-between px-[30px] cursor-pointer hover:shadow-lg 
                        transform hover:scale-[103%] transition duration-300 ease-out border-l-4 border-[#FFB703] pl-4'>
                <div>
                <h2 className='text-[#404040] text-[16px] leading-[17px] font-bold'>Cuti</h2>
                <h2 className='text-[20px] leading-[24px] font-bold text-[#5a5c69] mt-[5px]'>0%</h2>
                </div>
                <FaRegCalendarMinus fontSize={28} color='#FFB703' />
            </div>

            <div className='h-[100px] rounded-[8px] bg-white flex items-center justify-between px-[30px] cursor-pointer hover:shadow-lg 
                        transform hover:scale-[103%] transition duration-300 ease-out border-l-4 border-[#E63946] pl-4'>
                <div>
                <h2 className='text-[#404040] text-[16px] leading-[17px] font-bold'>Sakit</h2>
                <h2 className='text-[20px] leading-[24px] font-bold text-[#5a5c69] mt-[5px]'>0%</h2>
                </div>
                <TbMoodSick fontSize={28} color='#E63946' />
            </div>

            <div className='h-[100px] rounded-[8px] bg-white flex items-center justify-between px-[30px] cursor-pointer hover:shadow-lg 
                        transform hover:scale-[103%] transition duration-300 ease-out border-l-4 border-[#217D4F] pl-4'>
                <div>
                <h2 className='text-[#404040] text-[16px] leading-[17px] font-bold'>Izin</h2>
                <h2 className='text-[20px] leading-[24px] font-bold text-[#5a5c69] mt-[5px]'>0%</h2>
                </div>
                <BsFillCheckCircleFill fontSize={28} color='#217D4F' />
            </div>
        </div>
        <div className='flex mt-[22px] w-full gap-[30px]'>
            <div className='basis-[70%] border bg-white shadow-md cursor-pointer rounded-[4px]'>
                    <div className='bg-[#f8f9fc] flex items-center justify-between py-[15px] px-[20px] border-b-1 border-[#EDEDED] mb-[20px]'>
                        <h2>Tingkat Absensi</h2>
                        <FaEllipsisV color='gray' className='cursor-pointer'/>
                    </div>
                    <div>
                        <LineChart
                        width={1000}
                        height={500}
                        data={data}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                        >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="Kehadiran" stroke="#8884d8" activeDot={{ r: 8 }} />
                        <Line type="monotone" dataKey="Cuti" stroke="#FFB703" />
                        <Line type="monotone" dataKey="Sakit" stroke="#E63946" />
                        <Line type="monotone" dataKey="Izin" stroke="#82ca9d" />
                        </LineChart>
                    </div>
            </div>
            <div className='basis-[30%] border bg-white shadow-md cursor-pointer rounded-[4px]'>
                <div>
                    <div className="bg-[#f8f9fc] flex items-center justify-between py-[15px] px-[20px] border-b-1 border-[#EDEDED] mb-[20px]">
                    <div className="flex justify-between items-center">
                        <h1 className="select-none font-semibold">
                        {months[today.month()]}, {today.year()}
                         </h1>
                      <div className="flex gap-10 items-center">
                        <GrFormPrevious
                          className="w-5 h-5 cursor-pointer hover:scale-105 transition-all"
                          onClick={() => {
                            setToday(today.month(today.month() - 1));
                          }}
                        />
                        <h1
                          className=" cursor-pointer hover:scale-105 transition-all"
                          onClick={() => {
                            setToday(currentDate);
                          }}
                        >
                          Today
                        </h1>
                        <GrFormNext
                          className="w-5 h-5 cursor-pointer hover:scale-105 transition-all"
                          onClick={() => {
                            setToday(today.month(today.month() + 1));
                          }}
                        />
                      </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-7 text-[#404040] text-[18px] leading-[17px] font-bold">
                      {days.map((day, index) => {
                        return (
                          <h1
                            key={index}
                            className="text-sm text-center h-14 w-14 grid place-content-center text-gray-500 select-none"
                          >
                            {day}
                          </h1>
                        );
                      })}
                    </div>
                  </div>
                  <div className="grid grid-cols-7">
                    {generateDate(today.month(), today.year()).map(
                      ({ date, currentMonth, today }, index) => {
                        return (
                          <div
                            key={index}
                            className="p-2 text-center h-14 grid place-content-center text-sm border-t"
                          >
                            <h1
                              className={cn(
                                currentMonth ? "" : "text-gray-400",
                                today ? "bg-red-600 text-white" : "",
                                selectDate
                                  .toDate()
                                  .toDateString() === date.toDate().toDateString()
                                  ? "bg-black text-white"
                                  : "",
                                "h-10 w-10 rounded-full grid place-content-center hover:bg-black hover:text-white transition-all cursor-pointer select-none"
                              )}
                              onClick={() => {
                                setSelectDate(date);
                              }}
                            >
                              {date.date()}
                            </h1>
                          </div>
                        );
                      }
                    )}
                  </div>
              </div>
        </div>
    </div>
  )
}

export default Main