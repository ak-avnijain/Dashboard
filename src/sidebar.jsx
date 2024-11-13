import React, { useState } from 'react'
import { FaBars, FaUserAlt, FaUsers, FaBriefcase, FaTruck, FaBoxes, FaFile, FaSignOutAlt } from 'react-icons/fa'

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(true)

    const toggleSidebar = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div className="flex h-screen">
            {/* Sidebar */}
            <div
                className={`fixed top-0 left-0 h-full bg-blue-600 text-white p-4 ${isOpen ? 'w-50' : 'w-0'} transition-width duration-300 overflow-hidden md:w-54`}
            >
                <div className="text-xl font-semibold mb-6">Shri Ji Stamping</div>
                <ul className="space-y-4">
                    <li className="flex items-center space-x-2">
                        <FaUserAlt /> <span>Delete Data</span>
                    </li>
                    <li className="flex items-center space-x-2">
                        <FaUserAlt /> <span>Add Customer</span>
                    </li>
                    <li className="flex items-center space-x-2">
                        <FaUsers /> <span>Dashboard</span>
                    </li>
                    <li className="flex items-center space-x-2">
                        <FaUserAlt /> <span>All Customers</span>
                    </li>
                    <li className="flex items-center space-x-2">
                        <FaBriefcase /> <span>All Companies</span>
                    </li>
                    <li className="flex items-center space-x-2">
                        <FaUserAlt /> <span>All Employees</span>
                    </li>
                    <li className="flex items-center space-x-2">
                        <FaTruck /> <span>All Transporters</span>
                    </li>
                    <li className="flex items-center space-x-2">
                        <FaBoxes /> <span>Orders</span>
                    </li>
                    <li className="flex items-center space-x-2">
                        <FaFile /> <span>Roles</span>
                    </li>
                    <li className="flex items-center space-x-2">
                        <FaUserAlt /> <span>Users</span>
                    </li>
                    <li className="flex items-center space-x-2">
                        <FaUserAlt /> <span>Items</span>
                    </li>
                    <li className="flex items-center space-x-2">
                        <FaUserAlt /> <span>Share a File</span>
                    </li>
                    <li className="flex items-center space-x-2">
                        <FaUserAlt /> <span>Shared File</span>
                    </li>
                    <li className="flex items-center space-x-2">
                        <FaUserAlt /> <span>New Idea Suggestion</span>
                    </li>
                    <li className="flex items-center space-x-2">
                        <FaSignOutAlt /> <span>Logout</span>
                    </li>
                </ul>
            </div>

            {/* Main Content */}
            <div className="flex-1 ml-0 md:ml-64 transition-margin duration-300">
                <div className="p-5">
                    {/* Hamburger Icon for Mobile */}
                    <div className="md:hidden">
                        <button onClick={toggleSidebar} className="text-blue-900 p-2 focus:outline-none">
                            <FaBars size={24} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
