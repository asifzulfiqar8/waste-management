import React, { useState } from 'react';
import { IoSearch } from "react-icons/io5";
import { CiFilter } from "react-icons/ci";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
// import Button from '../../../components/shared/small/Button';
import DataTable from 'react-data-table-component';
// import { truckData, truckDataColumns } from './utils/truckReport';
// import { TruckReportTableStyle } from './utils/TruckReportTableStyle';
import Button from '../../../components/shared/small/Button';
import { recycleData, recycleDataColumns } from './utils/recycleReport';
import { recycleReportTableStyle } from './utils/recycleReportTableStyle';
// import { binDataColumns, binData } from './utils/binReport';
// import { BinReportTableStyle } from './utils/BinReportTableStyle';
import { FaCalendarAlt } from "react-icons/fa";

const RecycleReport = () => {
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;

  const handleDateChange = (update) => setDateRange(update);

  return (
    <div className="p-5">
      <header className="flex w-full items-center justify-between">
        <h1 className="font-semibold text-base">Report</h1>
        <div className="flex items-center gap-4">
          <div className="flex w-full items-center relative shadow-lg h-12 border rounded-xl  text-[#686677] px-2">
            <IoSearch />
            <input
              type="search"
              className="w-full outline-none px-2"
              placeholder="Search..."
            />
          </div>
          <button className=" w-12 h-11 border-[0.6px] flex items-center justify-center bg-white rounded-lg shadow-lg">
            <CiFilter />
          </button>
          <div className="px-4 py-2 border-[0.6px]  flex items-center justify-center bg-white rounded-lg shadow-lg">
            Status
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className='border p-2 rounded-lg flex  gap-2 items-center'>
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
          <Button width="w-[70px]" text="Export" />
        </div>
      </header>
      <section className="mt-4 shadow-custom p-3 w-full bg-white rounded-lg border">
        <DataTable
          columns={recycleDataColumns}
          data={recycleData}
          customStyles={recycleReportTableStyle}
          pagination
        />
      </section>
    </div>
  );
};

export default RecycleReport;

// export default RecycleReport

// export default RecycleReport