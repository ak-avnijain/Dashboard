import React from 'react'
import { IoBagHandle } from 'react-icons/io5'

export default function Dashboardstarsgrid() {
    return (
        <div className="grid gap-4 w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            <BoxWrapper>
                <div className="rounded-full h-12 w-12 flex items-center justify-center bg-sky-500">
                    <IoBagHandle className="text-2xl text-white" />
                </div>
                <div className="pl-4">
                    <span className="text-sm text-gray-500 font-light">Total sales</span>
                    <div className="flex items-center">
                        <strong className="text-xl text-gray-700 font-semibold">1223434</strong>
                        <span className="text-sm text-green-500 pl-2">+123</span>
                    </div>
                </div>
            </BoxWrapper>
            <BoxWrapper>
                <div className="rounded-full h-12 w-12 flex items-center justify-center bg-orange-500">
                    <IoBagHandle className="text-2xl text-white" />
                </div>
                <div className="pl-4">
                    <span className="text-sm text-gray-500 font-light">Total sales</span>
                    <div className="flex items-center">
                        <strong className="text-xl text-gray-700 font-semibold">1223434</strong>
                        <span className="text-sm text-green-500 pl-2">+123</span>
                    </div>
                </div>
            </BoxWrapper>
            <BoxWrapper>
                <div className="rounded-full h-12 w-12 flex items-center justify-center bg-yellow-500">
                    <IoBagHandle className="text-2xl text-white" />
                </div>
                <div className="pl-4">
                    <span className="text-sm text-gray-500 font-light">Total sales</span>
                    <div className="flex items-center">
                        <strong className="text-xl text-gray-700 font-semibold">1223434</strong>
                        <span className="text-sm text-green-500 pl-2">+123</span>
                    </div>
                </div>
            </BoxWrapper>
            <BoxWrapper>
                <div className="rounded-full h-12 w-12 flex items-center justify-center bg-green-500">
                    <IoBagHandle className="text-2xl text-white" />
                </div>
                <div className="pl-4">
                    <span className="text-sm text-gray-500 font-light">Total sales</span>
                    <div className="flex items-center">
                        <strong className="text-xl text-gray-700 font-semibold">1223434</strong>
                        <span className="text-sm text-green-500 pl-2">+123</span>
                    </div>
                </div>
            </BoxWrapper>
        </div>
    )
}

function BoxWrapper({ children }) {
    return <div className="bg-white rounded-sm p-4 flex-1 border border-gray-200 flex items-center">{children}</div>
}