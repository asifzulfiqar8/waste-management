import React from 'react'
import Header from './components/Header'
import RecycleTable from './components/RecycleTable'
import RecycleOverViewTable from './components/RecycleOverViewTable'

function Recycle() {
  return (
    <div className='grid gap-4'>
        <section className='grid'>
            <Header/>
        </section>
        <section className='p-2 bg-transparent border border-[#e7e7e7] rounded-[10px]  h-[650px]'>
            <RecycleTable/>
        </section>
        <section className=' w-full overflow-auto'>
            <RecycleOverViewTable/>
        </section>

    </div>
  )
}

export default Recycle