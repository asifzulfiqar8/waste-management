import React, { useState } from 'react';
import DataTable from 'react-data-table-component';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FaCalendarAlt } from "react-icons/fa";
import { subscriptionData, subscriptionDataColumns } from '../utils/SubscriptionsData';
import subscriptionTableStyle from '../utils/subscriptionTableStyle';

function SubscriptionsManagement() {

  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;
  const handleDateChange = (update) => setDateRange(update);


  return (
    <section className='flex flex-col gap-4'>
      <section className='flex justify-between items-center'>
        <section className='text-base font-semibold'>
          Subscriptions Management
        </section>
        <section className='flex gap-2'>
          <section>
            <button className=' border font-semibold text-[#1B1B1BCC] px-2 py-1 rounded-lg'>
              Plan
            </button>
          </section>
          <section>
            <button className=' border font-semibold text-[#1B1B1BCC] px-2 py-1 rounded-lg'>
              Status
            </button>
          </section>
          <div className='border px-2 rounded-lg flex  gap-2 items-center'>
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
      </section>
      <section className='border p-2 rounded-lg shadow-lg'>
        <DataTable
          columns={subscriptionDataColumns}
          data={subscriptionData}
          customStyles={subscriptionTableStyle}
          pagination
        />
      </section>
    </section>
  )
}

export default SubscriptionsManagement
