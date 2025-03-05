import React from 'react'
import PickupsChart from './PickupsChart'

function PickUp() {
    return (
        <div className='h-full w-full '>
            <h3 className='text-lg font-semibold'>Pickups</h3>
            <section className='h-[320px] w-full '>

                <PickupsChart />
            </section>
        </div>
    )
}

export default PickUp