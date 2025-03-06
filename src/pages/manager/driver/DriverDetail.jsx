import React from 'react'
import BinEmptiedGraph from './components/BinEmptiedGraph'
import DriverDetails from './components/DriverDetails'
import TruckDriverInfo from './components/TruckDriverInfo'
import TruckInfo from './components/TruckInfo'
import Violations from './components/Violations'
import WasteVolume from './components/WasteVolume'
import WeeklyBinGraph from './components/WeeklyBinGraph'
import { driversData, truckData, violationsData } from './utils/driver'
import { DriverDataColumns, DriverWasteData } from './utils/DriverDetailsTable'

function DriverDetail() {
    return (
        <div className='grid grid-cols-1 gap-4 lg:gap-0'>
            <section className='grid grid-cols-1 lg:grid-cols-3 gap-4  h-full lg:h-[290px] w-full'>
                <TruckDriverInfo driverData={driversData} />
                <TruckInfo truckData={truckData} />
                <Violations violationsData={violationsData} />
            </section>
            <section className="grid grid-cols-1 lg:grid-cols-3 gap-4  h-full lg:h-[270px]  mt-4">
                <WasteVolume />
                <WeeklyBinGraph />
                <BinEmptiedGraph />

            </section>
            <section className="grid overflow-auto max-h-full lg:h-[710px]  custom-scroll bg-white rounded-lg shadow-lg p-1 md:p-2 border mt-4">
                <DriverDetails
                    columns={DriverDataColumns}
                    data={DriverWasteData}
                    heading="Waste Detail"
                />
            </section>

        </div>
    )
}

export default DriverDetail