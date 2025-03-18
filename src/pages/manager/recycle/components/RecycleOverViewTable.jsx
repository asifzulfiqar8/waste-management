import React, { useState } from 'react';
import DataTable from 'react-data-table-component';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FaCalendarAlt } from "react-icons/fa";
import { recycleData, recycleDataColumns } from '../utils/Recycle';
import { RecycleOverViewTableStyle } from '../utils/RecycleOverViewTableStyle';

function RecycleOverViewTable() {


  // State to hold the start and end dates as an array
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;
  const handleDateChange = (update) => setDateRange(update);

  return (
    <div className='w-full  '>
      <section className="flex justify-between  h-14 items-center p-2">
        <section>Recycling Overview</section>
        <div className='border px-2 rounded-lg h-full flex  gap-2 items-center'>
          <span><FaCalendarAlt /></span>
          <DatePicker
            className=" outline-none "
            selectsRange
            startDate={startDate}
            endDate={endDate}
            onChange={handleDateChange}
            isClearable
            placeholderText="Select start and end date"
          />
        </div>
      </section>
      <section className="bg-white rounded-lg border-[1px] shadow-lg h-full p-3">
        <DataTable
          columns={recycleDataColumns}
          data={recycleData}
          customStyles={RecycleOverViewTableStyle}
          pagination
        />
      </section>
    </div>
  );
}

export default RecycleOverViewTable;
