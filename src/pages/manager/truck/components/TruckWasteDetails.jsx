/* eslint-disable react/prop-types */
import DataTable from "react-data-table-component";
import { CiSearch } from "react-icons/ci";
import { tableStyles } from "../../../../components/shared/small/dataTableStyles";
import { TruckWastDeatilStyles } from "../utils/TruckWastDeatilStyles";
// import { tableStyles } from "../small/dataTableStyles";

const TruckWasteDetails = ({ heading, data, columns }) => {
    return (
        <section className="h-full ">
            <section className="flex items-center justify-between  p-2">
                <h3 className="text-sm md:text-base font-bold text-[#414141]">
                    {heading}
                </h3>
                <section className="flex items-center justify-between ">
                    <button className="text-xs md:text-base text-[#7E7E7E] border p-1 rounded-md">
                        See all
                    </button>
                </section>
            </section>
            <section className="  h-[640px] overflow-auto">
                <DataTable
                    columns={columns}
                    data={data}
                    customStyles={TruckWastDeatilStyles}
                    pagination
                />
            </section>
        </section>
    );
};

export default TruckWasteDetails;
