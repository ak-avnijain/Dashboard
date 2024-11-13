import React from 'react'

const ExtraDetails = () => {
    const files = [
        { src: 'image1.jpg', alt: 'Detail 1' },
        { src: 'image2.png', alt: 'Detail 2' },
        { src: 'document.pdf', alt: 'Detail 3' },
        { src: 'image4.jpg', alt: 'Detail 4' },
        { src: 'image5.png', alt: 'Detail 5' }
    ]

    return (
        <div className="w-full mx-auto mt-6 bg-gray-50 p-6 rounded-lg shadow-md">
            {/* Title */}
            <h2 className="text-2xl font-semibold text-gray-700">Extra Details</h2>

            {/* File Section */}
            <div className="flex flex-wrap gap-4 mt-4">
                {files.map((file, index) => (
                    <a
                        key={index}
                        href={file.src}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-24 h-24 rounded shadow"
                    >
                        {/* Show different icons or elements for PDFs */}
                        {file.src.endsWith('.pdf') ? (
                            <div className="w-24 h-24 flex items-center justify-center bg-gray-200 text-gray-700">
                                PDF
                            </div>
                        ) : (
                            <img src={file.src} alt={file.alt} className="w-24 h-24 rounded shadow" />
                        )}
                    </a>
                ))}
            </div>
        </div>
    )
}

export default ExtraDetails
