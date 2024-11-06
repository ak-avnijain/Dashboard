import React from 'react'

const ExtraDetails = () => {
    return (
        <div className="w-full max-w-screen-lg mx-auto mt-6 bg-gray-50 p-6 rounded-lg shadow-md">
            {/* Title */}
            <h2 className="text-2xl font-semibold text-gray-700">Extra Details</h2>

            {/* Image Section */}
            <div className="flex flex-wrap gap-4 mt-4">
                <img src="image1.jpg" alt="Detail 1" className="w-24 h-24 rounded shadow" />
                <img src="image2.jpg" alt="Detail 2" className="w-24 h-24 rounded shadow" />
                <img src="image3.jpg" alt="Detail 3" className="w-24 h-24 rounded shadow" />
                <img src="image4.jpg" alt="Detail 4" className="w-24 h-24 rounded shadow" />
                <img src="image5.jpg" alt="Detail 5" className="w-24 h-24 rounded shadow" />
            </div>
        </div>
    )
}

export default ExtraDetails
