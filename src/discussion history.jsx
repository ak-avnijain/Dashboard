import React from 'react'

const DiscussionHistory = () => {
    const records = [
        {
            type: 'F2F',
            date: '2024-10-15',
            content: 'Chat test 343434',
            persons: 'Sachin Mulchand Vora',
            attachments: 'N/A',
            nextFollowUp: '2024-10-08'
        }
        // Add more records as needed
    ]

    return (
        <div className="container mx-auto p-6">
            {/* Discussion History Record Title */}
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Discussion History Record</h2>

            {/* Form Section */}
            <div className="grid grid-cols-5 gap-4 mb-6">
                <input
                    type="text"
                    placeholder="Search or type name and person"
                    className="col-span-2 border border-gray-300 p-2 rounded-lg focus:outline-none focus:border-blue-500"
                />
                <input
                    type="datetime-local"
                    className="border border-gray-300 p-2 rounded-lg focus:outline-none focus:border-blue-500"
                />
                <select className="border border-gray-300 p-2 rounded-lg focus:outline-none focus:border-blue-500">
                    <option>Select Type</option>
                    <option>F2F</option>
                    <option>Email</option>
                    <option>Call</option>
                    {/* Add more options as needed */}
                </select>
                <input
                    type="datetime-local"
                    className="border border-gray-300 p-2 rounded-lg focus:outline-none focus:border-blue-500"
                />
            </div>

            <div className="flex items-center justify-between mb-4">
                <textarea
                    placeholder="Type here..."
                    className="border border-gray-300 p-2 rounded-lg w-full focus:outline-none focus:border-blue-500"
                ></textarea>
                <button className="ml-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg">
                    Create
                </button>
            </div>

            {/* Table Section */}
            <div className="overflow-x-auto shadow-lg rounded-lg">
                <table className="min-w-full bg-white">
                    <thead>
                        <tr className="bg-blue-500 text-white uppercase text-sm leading-normal">
                            <th className="py-3 px-6 text-left">Type</th>
                            <th className="py-3 px-6 text-left">Date</th>
                            <th className="py-3 px-6 text-left">Content</th>
                            <th className="py-3 px-6 text-left">Persons</th>
                            <th className="py-3 px-6 text-left">Attachments</th>
                            <th className="py-3 px-6 text-left">Next Follow-Up</th>
                            <th className="py-3 px-6 text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-700 text-sm font-light">
                        {records.map((record, index) => (
                            <tr key={index} className="border-b border-gray-200 hover:bg-gray-100">
                                <td className="py-3 px-6 text-left">{record.type}</td>
                                <td className="py-3 px-6">{record.date}</td>
                                <td className="py-3 px-6">{record.content}</td>
                                <td className="py-3 px-6">{record.persons}</td>
                                <td className="py-3 px-6">{record.attachments}</td>
                                <td className="py-3 px-6">{record.nextFollowUp}</td>
                                <td className="py-3 px-6 text-center">
                                    <button className="text-yellow-500 hover:text-yellow-600 mr-2">
                                        ✏️ {/* Edit Icon */}
                                    </button>
                                    <button className="text-red-500 hover:text-red-600">🗑️ {/* Delete Icon */}</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default DiscussionHistory
