import React from 'react';
import DataTable from 'react-data-table-component';
import { DriverDetailsTableStyle } from '../utils/DriverDetailsTableStyle';

function DriverDetails({ heading, data, columns }) {
    return (
        <section className="h-full ">
            <section className="flex items-center justify-between  p-2">
                <h3 className="text-sm md:text-base font-bold text-[#414141]">
                    {heading}
                </h3>
                <section className="flex items-center justify-between ">
                    <button className="text-xs md:text-base text-[#7E7E7E] border p-1 px-3 rounded-md">
                        See all
                    </button>
                </section>
            </section>
            <section className="  h-[640px] custom-scroll overflow-auto">
                <DataTable
                    columns={columns}
                    data={data}
                    customStyles={DriverDetailsTableStyle}
                    pagination
                />
            </section>
        </section>
    );
}

export default DriverDetails