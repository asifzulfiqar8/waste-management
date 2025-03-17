import React, { useState } from 'react'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import DataTable from 'react-data-table-component';
// import { routeData, routeDataColumns } from './utils/routeData';
// import routeTableStyle from './utils/routeTableStyle'
// import { subscriptionData, subscriptionDataColumns } from '../utils/SubscriptionsData';
// import subscriptionTableStyle from '../utils/subscriptionTableStyle';
import transactionTable from '../utils/transactionTable';
import { transactionData, transactionDataColumns } from '../utils/Transaction';
import { CiSearch } from "react-icons/ci";

function TransactionsManagement() {

    const [dateRange, setDateRange] = useState([null, null]);
    const [startDate, endDate] = dateRange;
    const handleDateChange = (update) => setDateRange(update);


    return (
        <section className='flex flex-col gap-4'>
            <section className='flex justify-between items-center'>
                <section className='text-base font-semibold'>
                    Transactions Management
                </section>
                <section className="flex items-center gap-2 bg-[#F9FBFF] border border-[#e7e7e7] rounded-[10px] py-2 px-4">
                    <CiSearch fontSize={20} color="#7E7E7E" />
                    <input
                        type="text"
                        placeholder="Search"
                        className="w-full text-xs md:text-base bg-transparent border-none focus:outline-none text-[#7E7E7E]"
                    />
                </section>
                <section className='flex gap-2'>
                    <section>
                        <button className=' border font-semibold text-[#1B1B1BCC] px-2 py-1 rounded-lg'>
                            Status
                        </button>
                    </section>
                    <DatePicker
                        className="border px-2 py-1 rounded-lg hover"
                        selectsRange
                        startDate={startDate}
                        endDate={endDate}
                        onChange={handleDateChange}
                        isClearable
                        placeholderText="Select start and end date"
                    />
                </section>
            </section>
            <section className='border p-2 rounded-lg shadow-lg'>
                <DataTable
                    columns={transactionDataColumns}
                    data={transactionData}
                    customStyles={transactionTable}
                    pagination
                />
            </section>
        </section>
    )
}

export default TransactionsManagement

