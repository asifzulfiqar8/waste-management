import React from 'react'
import TruckInfo from '../components/TruckInfo'
import TruckDriverInfo from '../components/TruckDriverInfo'
import Violations from '../components/Violations'
import { driverData, truckData, violationsData } from './truck'
// import { truckData } from './truck'
// import { truckDetailsData } from './truck'
console.log("truck",truckData)
function TruckDetail() {
  return (
    <div>
        <section className='flex gap-4 w-full'>

        <TruckInfo truckData={truckData}/>
        <TruckDriverInfo driverData={driverData}/>
        <Violations violationsData={violationsData}/>
        </section>
    </div>
  )
}

export default TruckDetail