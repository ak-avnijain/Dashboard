import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Sidebar from './Sidebar'
export default function Layout() {
    return (
        <div className="flex flex-col md:flex-row bg-neutral-100 h-screen w-screen overflow-hidden">
            <Sidebar className="w-full md:w-1/4" />
            <div className="flex flex-col flex-grow">
                <Header />
                <div className="flex-grow p-4 overflow-y-auto">{<Outlet />}</div>
            </div>
        </div>
    )
}
