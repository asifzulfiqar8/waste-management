import { sensorData } from "../utils/sensor";
import activeSensor from "../../../../assets/images/sensor/active-sensor.png";
import offlineSensor from "../../../../assets/images/sensor/offline-sensor.png";

const TotalSensor = () => {
  return (
    <section className="bg-white rounded-lg shadow-lg p-2 md:p-4 border-[1px] flex flex-wrap items-center gap-5 justify-between">
      <div>
        <h6 className="text-base md:text-xl font-semibold text-[#060606CC]">
          Total Sensors
        </h6>
        <p className="text-xl md:text-3xl font-bold text-primary">235</p>
      </div>
      <div className="flex items-center gap-5 lg:gap-[55px] flex-wrap">
        {sensorData.map((list, i) => (
          <List key={i} list={list} />
        ))}
      </div>
    </section>
  );
};

export default TotalSensor;

// eslint-disable-next-line react/prop-types
const List = ({ list }) => {
  return (
    <div className="flex items-center gap-3">
      <img
        src={list.title === "Active" ? activeSensor : offlineSensor}
        alt="image"
        className="w-[82px]"
      />
      <div>
        <h6 className="text-base lg:text-xl font-medium text-[#06060699]">
          {list?.title}
        </h6>
        <p
          className={`text-xl lg:text-[26px] font-semibold ${
            list.title === "Active" ? "text-[#636363]" : "text-[#F49324]"
          }`}
        >
          {list?.value}
        </p>
      </div>
    </div>
  );
};
