import DataTable from "react-data-table-component";
import { DriverDetailsTableStyle } from "../utils/DriverDetailsTableStyle";
import { DriverDataColumns, DriverWasteData } from "../utils/WasteDetail";

const AdminWasteDetailTable = () => {
  return (
    <div className="bg-white rounded-lg border-[1px] shadow-lg h-full p-3">
      <section className="h-full ">
        <section className="flex items-center justify-between  p-2">
          <h3 className="text-sm md:text-base font-bold text-[#414141]">
            Waste Detail
          </h3>
          <section className="flex items-center justify-between ">
            <button className="text-xs md:text-base text-[#7E7E7E] border p-1 px-4 rounded-md">
              See all
            </button>
          </section>
        </section>
        <section className="   custom-scroll overflow-auto">
          <DataTable
            columns={DriverDataColumns}
            data={DriverWasteData}
            customStyles={DriverDetailsTableStyle}
            pagination
          />
        </section>
      </section>
    </div>
  );
};

export default AdminWasteDetailTable;
