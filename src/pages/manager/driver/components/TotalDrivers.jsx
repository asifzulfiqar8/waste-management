import availableImg from "../../../../assets/images/drivers/available.png";
import enRouteImg from "../../../../assets/images/drivers/enroute.png";
import leaveImg from "../../../../assets/images/drivers/leave.png";
import { driverData } from "../utils/driver";

const TotalDrivers = () => {
  return (
    <section className="bg-white rounded-lg shadow-lg p-2 md:p-4 border-[1px] flex flex-wrap items-center gap-5 justify-between">
      <div>
        <h6 className="text-base md:text-xl font-semibold text-[#060606CC]">
          Total Drivers
        </h6>
        <p className="text-xl md:text-3xl font-bold text-primary">129</p>
      </div>
      <div className="flex items-center gap-5 flex-wrap">
        {driverData.map((list, i) => (
          <List key={i} list={list} />
        ))}
      </div>
    </section>
  );
};

export default TotalDrivers;

// eslint-disable-next-line react/prop-types
const List = ({ list }) => {
  return (
    <div className="flex items-center">
      <img
        src={
          list.title === "En Route"
            ? enRouteImg
            : list.title === "Available"
            ? availableImg
            : leaveImg
        }
        alt="image"
        className="w-[82px]"
      />
      <div>
        <h6 className="text-base lg:text-xl font-medium text-[#06060699]">
          {list?.title}
        </h6>
        <p
          className={`text-xl lg:text-[26px] font-semibold ${
            list.title === "En Route"
              ? "text-[#636363]"
              : list.title === "Available"
              ? "text-[#F49324]"
              : "text-[#F63939]"
          }`}
        >
          {list?.value}
        </p>
      </div>
    </div>
  );
};
