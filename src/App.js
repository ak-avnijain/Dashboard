import React from 'react'
import PersonDetails from './PersonDetails'
import DetailTable from './twotables'
import ExtraDetails from './images_part'
import DiscussionHistory from './discussion history'
import Sidebar from './sidebar'
import Navbar1 from './nav bar'
function App() {
    return (
        <div className="w-full min-h-screen bg-gray-100 p-6 flex justify-center">
            {/* Main Container with consistent background and spacing */}
            <div className="pl-60 w-full space-y-6">
                <PersonDetails />
                <ExtraDetails />
                <DetailTable />
                <DiscussionHistory />
                <Sidebar />
                <Navbar1 />
            </div>
        </div>
    )
}

export default App
