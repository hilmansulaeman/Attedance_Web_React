import React from 'react'
import { BsCheckCircleFill } from "react-icons/bs";
import { GoSignOut } from "react-icons/go";
import { LuFileClock } from "react-icons/lu";
import { AiOutlineClockCircle } from "react-icons/ai";

export default function DashboardStatsGrid() {
	return (
		<div className="flex gap-4 ">
				<BoxWrapper>
					<div className="rounded-full h-12 w-12 flex items-center justify-center bg-[#217D4F]">
						<BsCheckCircleFill className="text-2xl text-white" />
					</div>
					<div className="pl-4 justify-between px-[30px] cursor-pointer hover:shadow-lg 
                        transform hover:scale-[103%] transition duration-300 ease-out">
						<span className="text-sm text-gray-500 font-light">Waktu Masuk</span>
						<div className="flex items-center">
							<strong className="text-xl text-gray-700 font-semibold">09:00</strong>
							{/* <span className="text-sm text-red-500 pl-2">-43</span> */}
						</div>
					</div>
				</BoxWrapper>
			<BoxWrapper>
                    <div className="rounded-full h-12 w-12 flex items-center justify-center bg-[#E63946]">
					<GoSignOut className="text-2xl text-white" />
				</div>
				<div className="pl-4">
					<span className="text-sm text-gray-500 font-light">Waktu Keluar</span>
					<div className="flex items-center">
						<strong className="text-xl text-gray-700 font-semibold">17:00</strong>
						{/* <span className="text-sm text-green-500 pl-2">-343</span> */}
					</div>
				</div>
			</BoxWrapper>
			<BoxWrapper>
				<div className="rounded-full h-12 w-12 flex items-center justify-center bg-[#6F6CFA]">
					<LuFileClock className="text-2xl text-white" />
				</div>
				<div className="pl-4">
					<span className="text-sm text-gray-500 font-light">Cuti</span>
					<div className="flex items-center">
						<strong className="text-xl text-gray-700 font-semibold">2</strong>
						{/* <span className="text-sm text-red-500 pl-2">-30</span> */}
					</div>
				</div>
			</BoxWrapper>
            <BoxWrapper>
				<div className="rounded-full h-12 w-12 flex items-center justify-center bg-yellow-500">
					<AiOutlineClockCircle className="text-2xl text-white" />
				</div>
				<div className="pl-4">
					<span className="text-sm text-gray-500 font-light">Lembur</span>
					<div className="flex items-center">
						<strong className="text-xl text-gray-700 font-semibold">15 Jam</strong>
						{/* <span className="text-sm text-green-500 pl-2">+343</span> */}
					</div>
				</div>
			</BoxWrapper>
		</div>
	)
}

function BoxWrapper({ children }) {
	return <div className="bg-white rounded-sm p-4 flex-1 border border-gray-200 flex items-center">{children}</div>
}