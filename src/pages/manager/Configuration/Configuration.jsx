import React from 'react'
import Database from './components/Database'
import Header from './components/Header'

function Configuration() {
  return (
    <div className='flex flex-col gap-4'>
      <section className='text-lg font-semibold'>

        Pull Request Interval
      </section>
      <section className="bg-white rounded-lg shadow-lg p-9 md:p-4 border-[1px] flex flex-wrap gap-5 lg:gap-10">
        <Header />
      </section>
      <section className="bg-white rounded-lg shadow-lg p-9 md:p-4 border-[1px] flex flex-wrap gap-5 lg:gap-10">
        <Database />

      </section>
    </div>
  )
}

export default Configuration