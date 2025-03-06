import TotalSensor from "./components/TotalSensor";
import { AddIcon } from "../../../assets/svgs/icon";
import { CiSearch } from "react-icons/ci";
import { useState } from "react";
import Modal from "../../../components/shared/small/Modal";

const Sensors = () => {
  const [modelOpen, setModelOpen] = useState(false);
  const closeModalHandler = () => setModelOpen(false);
  return (
    <div>
      <TotalSensor />
      <div className="bg-white rounded-lg shadow-lg p-2 md:p-4 border-[1px] mt-5">
        <ListingHeaeder setModalOpen={setModelOpen} />
        <div className="w-full h-[0.6px] bg-[#00000033] my-[18px]"></div>
      </div>
      {modelOpen && (
        <Modal title="Add Sensor" onClose={closeModalHandler}>
          Add Sensor
        </Modal>
      )}
    </div>
  );
};

export default Sensors;

const ListingHeaeder = ({ setModalOpen }) => {
  return (
    <div className="flex flex-wrap justify-between gap-4">
      <h6 className="text-base font-semibold text-[#060606CC]">
        Sensors Listing
      </h6>
      <div className="flex items-center gap-2 bg-transparent border border-[#e7e7e7] rounded-[10px] py-2 px-4 h-[38px] w-full max-w-[322px]">
        <CiSearch fontSize={20} color="#7E7E7E" />
        <input
          type="text"
          placeholder="Search by sensor ID"
          className="w-full text-xs md:text-sm font-medium bg-transparent border-none focus:outline-none text-[#939699]"
        />
      </div>
      <div className="flex flex-wrap items-center gap-3">
        {["Active", "Offline"].map((item, i) => (
          <button
            className="border border-[#54545433] rounded-md py-2 px-4 text-xs text-[#484848] font-semibold capitalize hover:bg-primary hover:text-white"
            key={i}
          >
            {item}
          </button>
        ))}
        <button
          className="flex items-center gap-3 text-[#060606CC] text-base font-semibold"
          onClick={() => setModalOpen(true)}
        >
          Add Sensor
          <AddIcon />
        </button>
      </div>
    </div>
  );
};
