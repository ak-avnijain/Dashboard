import React from 'react'
import Dashboardstarsgrid from './shared/Dashboardstarsgrid'
import Transactionchart from './shared/Transactionchart'
import BuyerChart from './shared/BuyerChart'
import Recentorders from './shared/recentorder'
import PopularProducts from './shared/PopularProducts'

export default function Dashboard() {
    return (
        <div className="flex flex-col gap-4">
            <Dashboardstarsgrid />
            <div className="flex flex-row gap-4 w-full">
                <Transactionchart />
                <BuyerChart />
            </div>
            <div className="flex flex-row gap-4 w-full">
                <Recentorders />
                <PopularProducts />
            </div>
        </div>
    )
}
