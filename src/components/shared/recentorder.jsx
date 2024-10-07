import React from 'react'
import { getOrderStatus } from '../../lib/consts/utils/get-order-status'

const recentOrderData = [
    {
        id: '1',
        product_id: '4324',
        customer_id: '23143',
        customer_name: 'Shirley A. Lape',
        order_date: '2022-05-17T03:24:00',
        order_total: '$435.50',
        current_order_status: 'PLACED',
        shipment_address: 'Cottage Grove, OR 97424'
    },
    {
        id: '7',
        product_id: '7453',
        customer_id: '96453',
        customer_name: 'Ryan Carroll',
        order_date: '2022-05-14T05:24:00',
        order_total: '$96.35',
        current_order_status: 'CONFIRMED',
        shipment_address: 'Los Angeles, CA 90017'
    },
    {
        id: '2',
        product_id: '5434',
        customer_id: '65345',
        customer_name: 'Mason Nash',
        order_date: '2022-05-17T07:14:00',
        order_total: '$836.44',
        current_order_status: 'SHIPPED',
        shipment_address: 'Westminster, CA 92683'
    },
    {
        id: '3',
        product_id: '9854',
        customer_id: '87832',
        customer_name: 'Luke Parkin',
        order_date: '2022-05-16T12:40:00',
        order_total: '$334.50',
        current_order_status: 'SHIPPED',
        shipment_address: 'San Mateo, CA 94403'
    },
    {
        id: '4',
        product_id: '8763',
        customer_id: '09832',
        customer_name: 'Anthony Fry',
        order_date: '2022-05-14T03:24:00',
        order_total: '$876.00',
        current_order_status: 'OUT_FOR_DELIVERY',
        shipment_address: 'San Mateo, CA 94403'
    },
    {
        id: '5',
        product_id: '5627',
        customer_id: '97632',
        customer_name: 'Ryan Carroll',
        order_date: '2022-05-14T05:24:00',
        order_total: '$96.35',
        current_order_status: 'DELIVERED',
        shipment_address: 'Los Angeles, CA 90017'
    }
]

export default function RecentOrders() {
    return (
        <div className="bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
            <strong className="text-gray-700 font-medium">Recent Orders</strong>
            <div className="mt-3 overflow-x-auto">
                <table className="min-w-full text-gray-700 border border-gray-300">
                    <thead>
                        <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                            <th className="py-3 px-1 border border-gray-300 text-center">ID</th>
                            <th className="py-3 px-1 border border-gray-300 text-center">Product ID</th>
                            <th className="py-3 px-1 border border-gray-300 text-center">Customer Name</th>
                            <th className="py-3 px-1 border border-gray-300 text-center">Order Date</th>
                            <th className="py-3 px-1 border border-gray-300 text-center">Order Total</th>
                            <th className="py-3 px-1 border border-gray-300 text-center">Shipping Address</th>
                            <th className="py-3 px-1 border border-gray-300 text-center">Order Status</th>
                        </tr>
                    </thead>
                    <tbody className="text-sm font-light">
                        {recentOrderData.map((order) => (
                            <tr key={order.id} className="border-b border-gray-300">
                                <td className="py-1 px-1 border border-gray-300 text-center">#{order.id}</td>
                                <td className="py-1 px-1 border border-gray-300 text-center">{order.product_id}</td>
                                <td className="py-1 px-1 border border-gray-300 text-center">{order.customer_name}</td>
                                <td className="py-1 px-1 border border-gray-300 text-center">
                                    {new Date(order.order_date).toLocaleDateString()}
                                </td>
                                <td className="py-1 px-1 border border-gray-300 text-center">{order.order_total}</td>
                                <td className="py-1 px-1 border border-gray-300 text-center">
                                    {order.shipment_address}
                                </td>
                                <td className="py-1 px-1 border border-gray-300 text-center">
                                    {getOrderStatus(order.current_order_status)}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
