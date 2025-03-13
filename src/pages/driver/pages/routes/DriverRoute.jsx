import React, { useState } from 'react'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import DataTable from 'react-data-table-component';
import { routeData, routeDataColumns } from './utils/routeData';
import routeTableStyle from './utils/routeTableStyle'

function DriverRoute() {

  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;
  const handleDateChange = (update) => setDateRange(update);


  return (
    <div>
      <section className='flex justify-between items-center'>
        <section className='text-base font-semibold'>
          Report
        </section>
        <DatePicker
          className="border p-2 rounded-lg hover"
          selectsRange
          startDate={startDate}
          endDate={endDate}
          onChange={handleDateChange}
          isClearable
          placeholderText="Select start and end date"
        />
      </section>
      <section>
      <DataTable
          columns={routeDataColumns}
          data={routeData}
          customStyles={routeTableStyle}
          pagination
        />
      </section>
    </div>
  )
}

export default DriverRoute