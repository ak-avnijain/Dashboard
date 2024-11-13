import React from 'react'

const PersonDetails = () => {
    return (
        <div className="w-full bg-gray-100 p-6 flex justify-center">
            {/* Main Content */}
            <div className="w-full">
                {/* Content Section */}
                <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Left Column */}
                    <div className="space-y-4 flex flex-col ">
                        <div className="flex-1 flex flex-col">
                            <h2 className="text-lg font-semibold text-gray-700 p-3 pt-7">Contact Information</h2>
                            <div className="bg-gray-50 p-4 rounded">
                                <p className="mb-2">
                                    <strong>Contact Person:</strong> check
                                </p>
                                <p className="mb-2">
                                    <strong>Type of Customer:</strong> Regular
                                </p>
                                <p className="mb-2">
                                    <strong>Mobile No.:</strong> 1234567890
                                </p>
                                <p className="mb-2">
                                    <strong>Birth Time:</strong> 10:00 AM
                                </p>
                                <p className="mb-2">
                                    <strong>Commission Type and Amount:</strong> 10%
                                </p>
                            </div>
                        </div>

                        <div className="flex-1 flex flex-col">
                            <h2 className="text-lg font-semibold text-gray-700 mt-4 p-3">Professional Details</h2>
                            <div className="bg-gray-50 p-4 rounded">
                                <p className="mb-2">
                                    <strong>Behaviour:</strong> Positive
                                </p>
                                <p className="mb-2">
                                    <strong>Machinery Knowledge:</strong> Positive
                                </p>
                                <p className="mb-2">
                                    <strong>Work Part Time for Other Companies?</strong> No
                                </p>
                                <p className="mb-2">
                                    <strong>Deals in What Machine Parts:</strong> Yes
                                </p>
                                <div className="flex items-center">
                                    <strong>Expertise:</strong>
                                    <span className="ml-2 px-2 py-1 bg-blue-100 text-blue-700 text-sm rounded">OK</span>
                                </div>
                                <p className="mb-2">
                                    <strong>Last visit charges paid:</strong> 10000
                                </p>
                                <p className="mb-2">
                                    <strong>Deals in spare parts:</strong> Yes
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="w-full space-y-4 flex flex-col pl-9">
                        <div className="flex-1 flex flex-col">
                            <h2 className="text-lg font-semibold text-gray-700 p-3 pt-7">Contact Details</h2>
                            <div className="bg-gray-50 p-4 rounded">
                                <p className="mb-2">
                                    <strong>Designation:</strong> HR
                                </p>
                                <div className="flex items-center mb-2">
                                    <input type="checkbox" className="mr-2 p-0" />

                                    <p>
                                        <strong>Email ID:</strong> test123@gmail.com
                                    </p>
                                </div>
                                <div className="flex items-center mb-2">
                                    <input type="checkbox" className="mr-2 p-0" />
                                    <p>
                                        <strong>Phone No.:</strong> 7846531
                                    </p>
                                </div>
                                <p className="mb-2">
                                    <strong>Location:</strong> New York
                                </p>
                                <p className="mb-2">
                                    <strong>Bank Details:</strong> Confidential
                                </p>
                            </div>
                        </div>

                        <div className="flex-1 flex flex-col">
                            <h2 className="text-lg font-semibold text-gray-700 mt-4 p-3">Additional Information</h2>
                            <div className="bg-gray-50 p-4 rounded">
                                <p className="mb-2">
                                    <strong>Contractor:</strong> ABC
                                </p>
                                <p className="mb-2">
                                    <strong>Charges:</strong> Yes
                                </p>

                                <p className="mb-2">
                                    <strong>Previous Experience:</strong> ABC
                                </p>
                                <p className="mb-2">
                                    <strong>Software Knowledge:</strong> Basic
                                </p>
                                <p className="mb-2">
                                    <strong>Problem resolved?</strong> Yes
                                </p>
                                <p className="mb-2">
                                    <strong>Dispatch person:</strong> Available
                                </p>
                                <p className="mb-2">
                                    <strong>Visiting Card:</strong> Available
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PersonDetails
