import React from 'react'

const DetailTable = () => {
    return (
        <div className="w-full mt-6 bg-gray-50 p-6 rounded-lg shadow-md">
            {/* Extra Details Section Title */}
            <h2 className="text-2xl font-semibold p-1 mb-5 text-gray-800">Companies Details</h2>

            {/* Tables Section with Left and Right Gap */}
            <div className="mx-6 bg-white p-6 rounded-lg shadow-lg">
                {/* Previous Companies Details Table */}
                <div className="overflow-x-auto">
                    <h3 className="text-xl font-semibold mb-4 text-gray-700">Previous Companies Details</h3>
                    <table className="w-full border-collapse bg-gray-50 text-gray-800">
                        <thead>
                            <tr className="bg-gray-200 text-left text-gray-600">
                                <th className="py-3 px-4 border-b">Company Logo</th>
                                <th className="py-3 px-4 border-b">Company Name</th>
                                <th className="py-3 px-4 border-b">Duration</th>
                                <th className="py-3 px-4 border-b">Location</th>
                                <th className="py-3 px-4 border-b">Achievements</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* Example Row */}
                            <tr className="hover:bg-gray-100">
                                <td className="py-2 px-4 border-b">ABC Corp</td>
                                <td className="py-2 px-4 border-b">Software Engineer</td>
                                <td className="py-2 px-4 border-b">2 years</td>
                                <td className="py-2 px-4 border-b">New York</td>
                                <td className="py-2 px-4 border-b">Improved efficiency by 30%</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* Current Companies Details Table */}
                <div className="overflow-x-auto mt-8">
                    <h3 className="text-xl font-semibold mb-4 text-gray-700">Current Companies Details</h3>
                    <table className="w-full border-collapse bg-gray-50 text-gray-800">
                        <thead>
                            <tr className="bg-gray-200 text-left text-gray-600">
                                <th className="py-3 px-4 border-b">Company Name</th>
                                <th className="py-3 px-4 border-b">Role</th>
                                <th className="py-3 px-4 border-b">Duration</th>
                                <th className="py-3 px-4 border-b">Location</th>
                                <th className="py-3 px-4 border-b">Responsibilities</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* Example Row */}
                            <tr className="hover:bg-gray-100">
                                <td className="py-2 px-4 border-b">XYZ Ltd</td>
                                <td className="py-2 px-4 border-b">Project Manager</td>
                                <td className="py-2 px-4 border-b">1 year</td>
                                <td className="py-2 px-4 border-b">San Francisco</td>
                                <td className="py-2 px-4 border-b">Leading a team of 5</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default DetailTable
