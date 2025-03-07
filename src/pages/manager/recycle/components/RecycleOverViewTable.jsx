import React from 'react'
import DataTable from "react-data-table-component";
import { recycleData, recycleDataColumns } from '../utils/recycle';
import { RecycleOverViewTableStyle } from '../utils/RecycleOverViewTableStyle';

function RecycleOverViewTable() {
  return (
    <div>
        <section className='flex justify-between'>
            <section>Recycling Overview</section>
            <section>
                /// in this section i wan tto set start or end date in one input how 
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
  )
}

export default RecycleOverViewTable