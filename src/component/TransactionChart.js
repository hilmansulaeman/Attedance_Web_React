import React from 'react'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Senin',
    uv: 8,
    pv: 10,
    amt: 5,
  },
  {
    name: 'Selasa',
    uv: 5,
    pv: 8,
    amt: 1,
  },
  {
    name: 'Rabu',
    uv: 2,
    pv: 4,
    amt: 6,
  },
  {
    name: 'Kamis',
    uv: 9,
    pv: 3,
    amt: 2,
  },
  {
    name: 'Jumat',
    uv: 8,
    pv: 4,
    amt: 5,
  },
  {
    name: 'Sabtu',
    uv: 2,
    pv: 3,
    amt: 7,
  },
  {
    name: 'Minggu',
    uv: 3,
    pv: 4,
    amt: 2,
  },
];

export default function TransactionChart() {
	return (
		<div className="h-[22rem] bg-white p-4 rounded-sm border border-gray-200 flex flex-col flex-1">
			<strong className="text-gray-700 font-medium">Ringkasan Kehadiran</strong>
			<div className="mt-3 w-full flex-1 text-xs">
            <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                width={500}
                height={400}
                data={data}
                margin={{
                    top: 10,
                    right: 30,
                    left: 0,
                    bottom: 0,
                }}
                >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey="uv" stroke="#195F80" fill="#8ECAE6" />
                </AreaChart>
            </ResponsiveContainer>
			</div>
		</div>
	)
}