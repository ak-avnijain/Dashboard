import React from 'react'

const Navbar1 = () => {
    return (
        <div className="w-full bg-gray-100 p-6 flex justify-center">
            {/* Main Content */}
            <div className="w-full max-w-screen-lg">
                {/* Header Section */}
                <div className="flex justify-between items-center bg-blue-600 text-white p-4 fixed top-0 left-56 right-1 shadow-md z-10">
                    <button className="px-4 py-2 bg-blue-700 hover:bg-blue-800 rounded">&larr; Back</button>
                    <h1 className="text-xl font-semibold">Person Details</h1>
                    <button className="px-4 py-2 bg-blue-700 hover:bg-blue-800 rounded">Options</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar1
