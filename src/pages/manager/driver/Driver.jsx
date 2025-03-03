import { Link } from "react-router-dom";
import TotalDrivers from "./components/TotalDrivers";
import { CiSearch } from "react-icons/ci";
import { AddIcon } from "../../../assets/svgs/icon";

const Driver = () => {
  return (
    <div>
      <TotalDrivers />
      <div className="bg-white rounded-lg shadow-lg p-2 md:p-4 border-[1px] mt-5">
        <ListingHeaeder />
      </div>
    </div>
  );
};

export default Driver;

const ListingHeaeder = () => {
  return (
    <div className="flex flex-wrap justify-between gap-4">
      <h6 className="text-base font-semibold text-[#060606CC]">Bins Listing</h6>
      <div className="flex items-center gap-2 bg-transparent border border-[#e7e7e7] rounded-[10px] py-2 px-4 h-[38px] w-full max-w-[322px]">
        <CiSearch fontSize={20} color="#7E7E7E" />
        <input
          type="text"
          placeholder="Search by Driver ID, Name, or truck"
          className="w-full text-xs md:text-sm font-medium bg-transparent border-none focus:outline-none text-[#939699]"
        />
      </div>
      <div className="flex flex-wrap items-center gap-3">
        {["Favourite", "Active", "Idle"].map((item, i) => (
          <button
            className="border border-[#54545433] rounded-md py-2 px-4 text-xs text-[#484848] font-semibold capitalize hover:bg-primary hover:text-white"
            key={i}
          >
            {item.split("-").join(" ")}
          </button>
        ))}
        <Link
          to="/add-driver"
          className="flex items-center gap-3 text-[#060606CC] text-base font-semibold"
        >
          Add Driver
          <AddIcon />
        </Link>
      </div>
    </div>
  );
};
