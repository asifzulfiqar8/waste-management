import React from 'react'
import { AddIcon } from "../../../assets/svgs/icon";
import AlertTable from './components/AlertTable';

function Alert() {
  return (
    <div>
      <section className='flex justify-end'>
        <button
          className="flex items-center gap-3 text-[#060606CC] text-base font-semibold"
          onClick={() => setModalOpen(true)}
        >
          Add Sensor
          <AddIcon />
        </button>
      </section>
      <section>
        <AlertTable />
      </section>
    </div>
  )
}

export default Alert