import React from 'react'
import PersonDetails from './PersonDetails'
import DetailTable from './twotables'
import ExtraDetails from './images_part'

function App() {
    return (
        <div className="w-full min-h-screen bg-gray-100 p-6 flex justify-center">
            {/* Main Container with consistent background and spacing */}
            <div className="w-full max-w-screen-lg space-y-6">
                <PersonDetails />
                <ExtraDetails />
                <DetailTable />
            </div>
        </div>
    )
}

export default App
