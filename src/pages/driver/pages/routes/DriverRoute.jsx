import { useState } from "react";
import DataTable from "react-data-table-component";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { routeData, routeDataColumns } from "./utils/RouteData";
import routeTableStyle from "./utils/routeTableStyle";
import { FaCalendarAlt } from "react-icons/fa";

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
  );
}

export default DriverRoute;
