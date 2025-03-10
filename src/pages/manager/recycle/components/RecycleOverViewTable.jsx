import React, { useState } from 'react';
import DataTable from 'react-data-table-component';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import { recycleData, recycleDataColumns } from '../utils/recycle';
import { RecycleOverViewTableStyle } from '../utils/RecycleOverViewTableStyle';

function RecycleOverViewTable() {
  // State to hold the start and end dates as an array
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;

  return (
    <div>
      <section className="flex justify-between">
        <section>Recycling Overview</section>
        <section>
          <DatePicker
          className=' p-2 rounded-lg'
            selectsRange={true}
            startDate={startDate}
            endDate={endDate}
            onChange={(update) => {
              setDateRange(update);
            }}
            isClearable={true}
            placeholderText="Select start and end date"
          />
        </section>
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
