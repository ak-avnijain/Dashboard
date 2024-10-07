import React from 'react'

export default function BuyerChart() {
    return (
        <div className="w-full md:w-[18rem] lg:w-[22rem] h-auto bg-white p-4 rounded-sm border border-gray-200 flex flex-col">
            <strong className="text-gray-700 font-medium"> Buyer Chart</strong>
            <div className="mt-3 flex-1 text-xs">
                <img className="h-auto w-full rounded-lg" src="/shared/pie.svg" alt="Profile Chart Image" />
            </div>
        </div>
    )
}
