import React from 'react'
import { format } from 'date-fns'
import { Link } from 'react-router-dom'
import { getOrderStatus } from '../lib/constants/helpers'

const ProductsData = [
	{
		id: '1',
		product_id: '4324',
		customer_id: '23143',
		customer_name: 'Shirley A. Lape',
		jam_masuk: '2022-05-17T03:24:00',
		jam_keluar: '2022-05-14T05:24:00',
		current_order_status: 'REJECT',
		shipment_address: 'Cottage Grove, OR 97424'
	},
	{
		id: '7',
		product_id: '7453',
		customer_id: '96453',
		customer_name: 'Ryan Carroll',
		jam_masuk: '2022-05-14T05:24:00',
		jam_keluar: '2022-05-14T05:24:00',
		current_order_status: 'CONFIRMED',
		shipment_address: 'Los Angeles, CA 90017'
	},
	{
		id: '2',
		product_id: '5434',
		customer_id: '65345',
		customer_name: 'Mason Nash',
		jam_masuk: '2022-05-17T07:14:00',
		jam_keluar: '2022-05-14T05:24:00',
		current_order_status: 'CONFIRMED',
		shipment_address: 'Westminster, CA 92683'
	},
	{
		id: '3',
		product_id: '9854',
		customer_id: '87832',
		customer_name: 'Luke Parkin',
		jam_masuk: '2022-05-16T12:40:00',
		jam_keluar: '2022-05-14T05:24:00',
		current_order_status: 'CONFIRMED',
		shipment_address: 'San Mateo, CA 94403'
	},
	{
		id: '4',
		product_id: '8763',
		customer_id: '09832',
		customer_name: 'Anthony Fry',
		jam_masuk: '2022-05-14T03:24:00',
		jam_keluar: '2022-05-14T05:24:00',
		current_order_status: 'CONFIRMED',
		shipment_address: 'San Mateo, CA 94403'
	},
	{
		id: '5',
		product_id: '5627',
		customer_id: '97632',
		customer_name: 'Ryan Carroll',
		jam_masuk: '2022-05-14T05:24:00',
		jam_keluar: '2022-05-14T05:24:00',
		current_order_status:'CONFIRMED',
		shipment_address: 'Los Angeles, CA 90017'
	}
]

export default function Products() {
	return (
		<div className="bg-white p-4 rounded-sm border border-gray-200">
            <h2 className="text-gray-700 font-medium mb-3">Recent Orders</h2>
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
                    <th className="px-4 py-2">Order Status</th>
                    </tr>
                </thead>
                <tbody>
                    {ProductsData.map((order) => (
                    <tr key={order.id} className="border-b hover:bg-gray-50">
                        <td className="px-4 py-2">
                        <Link to={`/order/${order.id}`}>#{order.id}</Link>
                        </td>
                        <td className="px-4 py-2">
                        <Link to={`/product/${order.product_id}`}>#{order.product_id}</Link>
                        </td>
                        <td className="px-4 py-2">
                        <Link to={`/customer/${order.customer_id}`}>{order.customer_name}</Link>
                        </td>
                        <td className="px-4 py-2">{format(new Date(order.jam_masuk), 'HH:mm:ss')}</td>
                        <td className="px-4 py-2">{format(new Date(order.jam_keluar), 'HH:mm:ss')}</td>
                        <td className="px-4 py-2">{order.shipment_address}</td>
                        <td className="px-4 py-2">{getOrderStatus(order.current_order_status)}</td>
                    </tr>
                    ))}
                </tbody>
                </table>
            </div>
        </div>
	)
}