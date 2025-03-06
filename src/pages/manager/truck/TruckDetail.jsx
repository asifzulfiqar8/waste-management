import React from 'react'
// import PickUp from '../components/PickUp'
import PickUp from './components/PickUp'
import TravelOverView from './components/TravelOverView'
import TruckDriverInfo from './components/TruckDriverInfo'
import TruckInfo from './components/TruckInfo'
import TruckRouteMap from './components/TruckRouteMap'
import TruckRoutes from './components/TruckRoutes'
import TruckWasteDetails from './components/TruckWasteDetails'
import Violations from './components/Violations'
import { driverData, truckData, violationsData } from './utils/truck'
import { TruckWasteData, TruckWasteDataColumns } from './utils/TruckWastDetailsData'

console.log("truck", truckData)
function TruckDetail() {
    return (
        <div className='grid grid-cols-1 gap-4 lg:gap-0'>
            <section className='grid grid-cols-1 lg:grid-cols-3 gap-4  h-full lg:h-[290px] w-full'>
                <TruckInfo truckData={truckData} />
                <TruckDriverInfo driverData={driverData} />
                <Violations violationsData={violationsData} />
            </section>
            <section className="grid grid-cols-1 lg:grid-cols-12 h-full lg:h-[370px] bg-white rounded-lg shadow-lg p-1 md:p-2 border mt-4">
                <section className="lg:col-span-8">
                    <TruckRouteMap />
                </section>
                <section className="lg:col-span-4 ">
                    <TruckRoutes />
                </section>
            </section>
            <section className="grid grid-cols-1  lg:grid-cols-12 h-full lg:h-[370px] gap-4 mt-4">
                <section className="lg:col-span-4 h-full bg-white rounded-lg shadow-lg p-1 md:p-2 border ">
                    <PickUp />

                </section>
                <section className="lg:col-span-8  bg-white rounded-lg shadow-lg p-1 md:p-2 border">
                    <TravelOverView />
                </section>
            </section>
            <section className="grid overflow-auto h-full lg:h-[700px]  bg-white rounded-lg shadow-lg p-1 md:p-2 border mt-4">
                <TruckWasteDetails
                    columns={TruckWasteDataColumns}
                    data={TruckWasteData}
                    heading="Waste Detail"
                />
            </section>
        </div>
    )
}

export default TruckDetail