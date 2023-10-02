import React from 'react'
import { format } from 'date-fns'
import { Link } from 'react-router-dom'
import { getOrderStatus } from '../lib/constants/helpers'

const recentOrderData = [
	{
		id: '1',
		nama: '4324',
		karyawan_id: '23143',
		karyawan_name: 'Shirley A. Lape',
		jam_masuk: '2022-05-17T09:00:00',
		jam_keluar: '2022-05-17T09:00:00',
		current_order_status: 'PLACED',
		shipment_address: 'Cottage Grove, OR 97424'
	},
	{
		id: '7',
		nama: '7453',
		karyawan_id: '96453',
		karyawan_name: 'Ryan Carroll',
		jam_masuk: '2022-05-17T09:00:00',
		jam_keluar: '2022-05-17T09:00:00',
		current_order_status: 'CONFIRMED',
		shipment_address: 'Los Angeles, CA 90017'
	},
	{
		id: '2',
		nama: '5434',
		karyawan_id: '65345',
		karyawan_name: 'Mason Nash',
		jam_masuk: '2022-05-17T09:00:00',
		jam_keluar: '2022-05-17T09:00:00',
		current_order_status: 'SHIPPED',
		shipment_address: 'Westminster, CA 92683'
	},
	{
		id: '3',
		nama: '9854',
		karyawan_id: '87832',
		karyawan_name: 'Luke Parkin',
		jam_masuk: '2022-05-17T09:00:00',
		jam_keluar: '2022-05-17T09:00:00',
		current_order_status: 'SHIPPED',
		shipment_address: 'San Mateo, CA 94403'
	},
	{
		id: '4',
		nama: '8763',
		karyawan_id: '09832',
		karyawan_name: 'Anthony Fry',
		jam_masuk: '2022-05-17T09:00:00',
		jam_keluar: '2022-05-17T09:00:00',
		current_order_status: 'OUT_FOR_DELIVERY',
		shipment_address: 'San Mateo, CA 94403'
	},
	{
		id: '5',
		nama: '5627',
		karyawan_id: '97632',
		karyawan_name: 'Ryan Carroll',
		jam_masuk: '2022-05-17T09:00:00',
		jam_keluar: '2022-05-17T09:00:00',
		current_order_status: 'DELIVERED',
		shipment_address: 'Los Angeles, CA 90017'
	}
]

export default function RecentOrders() {
	return (
		<div className="bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
            <h2 className="text-gray-700 font-medium">Recent Orders</h2>
            <div className="overflow-x-auto">
                <table className="w-full text-left table-auto">
                <thead>
                    <tr className="bg-gray-100">
                    <th className="px-4 py-2">ID</th>
                    <th className="px-4 py-2">Product ID</th>
                    <th className="px-4 py-2">Nama Karyawan</th>
                    <th className="px-4 py-2">Jam Masuk</th>
                    <th className="px-4 py-2">Jam Keluar</th>
                    <th className="px-4 py-2">Keterangan</th>
                    </tr>
                </thead>
                <tbody>
                    {recentOrderData.map((order) => (
                    <tr key={order.id} className="border-b hover:bg-gray-50">
                        <td className="px-4 py-2">
                        <Link to={`/order/${order.id}`}>#{order.id}</Link>
                        </td>
                        <td className="px-4 py-2">
                        <Link to={`/product/${order.nama}`}>#{order.nama}</Link>
                        </td>
                        <td className="px-4 py-2">
                        <Link to={`/karyawan/${order.karyawan_id}`}>{order.karyawan_name}</Link>
                        </td>
                        <td className="px-4 py-2">{format(new Date(order.jam_masuk), 'HH:mm:ss')}</td>
                        <td className="px-4 py-2">{format(new Date(order.jam_keluar), 'HH:mm:ss')}</td>
                        <td className="px-4 py-2">{order.shipment_address}</td>
                    </tr>
                    ))}
                </tbody>
                </table>
            </div>
        </div>
	)
}