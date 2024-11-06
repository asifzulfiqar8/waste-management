/* eslint-disable react/prop-types */
import { useState } from "react";
import { LuChevronRight } from "react-icons/lu";
import { RiErrorWarningFill } from "react-icons/ri";
import trackingFailure from "../../../../assets/images/dashboard/tracking-failure.png";
import driverOverload from "../../../../assets/images/dashboard/driver-overload.png";
import truckOffline from "../../../../assets/images/dashboard/truck-offline.png";
import SensorMalfunction from "../../../../assets/images/dashboard/sensor-malfunction.png";

const Alerts = () => {
  return (
    <div className="bg-white rounded-lg border-[1px] shadow-lg  p-3 ">
      <h3 className="text-sm md:text-base font-[600]">Alerts</h3>
      <div className="h-[347px] custom-scroll overflow-auto mt-1">
        <SingleAlert type="Tracking Failure" icon={trackingFailure} />
        <SingleAlert type="Driver Overload" icon={driverOverload} />
        <SingleAlert type="Truck Offline" icon={truckOffline} />

        <SingleAlert type="Sensor Malfunction" icon={SensorMalfunction} />
        <SingleAlert type="Tracking Failure" icon={trackingFailure} />
        <SingleAlert type="Driver Overload" icon={driverOverload} />
        <SingleAlert type="Truck Offline" icon={truckOffline} />

        <SingleAlert type="Sensor Malfunction" icon={SensorMalfunction} />
      </div>
    </div>
  );
};

export default Alerts;

const SingleAlert = ({ icon, type }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div
      className="p-2 flex items-start gap-4 hover:bg-gray-100 justify-between cursor-pointer border-b-[1px]"
      onClick={handleOpen}
    >
      <img src={icon} className="w-8" />

      <div className="flex flex-col items-start grow gap-1 ">
        <h3 className=" text-sm ">{type}</h3>
        <h5 className="text-[8px]">30 min ago</h5>

        {isOpen && (
          <div className="flex gap-1 items-center">
            <RiErrorWarningFill className="text-[#EE4444]" />
            <p className="text-[10px]">
              Driver’s real-time location is not updating correctly in the
              system
            </p>
          </div>
        )}
      </div>
      <div
        className={`transition-all duration-300  ${
          isOpen ? "-rotate-90" : "rotate-0"
        } `}
      >
        <LuChevronRight fontSize={20} />
      </div>
    </div>
  );
};
