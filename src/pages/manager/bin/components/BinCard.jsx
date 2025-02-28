import { Link } from "react-router-dom";
import binImg from "../../../../assets/images/bin/bin-img.png";
import { IoLocation } from "react-icons/io5";
import PieChartComponent from "../../../../components/charts/PieChartComponent";

const COLORS = ["#7FD2CF", "#F49324", "#BA2222"];
const time = [
  { name: "morning", value: 33 },
  { name: "evening", value: 33 },
  { name: "night", value: 33 },
];

const BinCard = ({ data }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg border-[1px]">
      <img
        src={data?.binImg}
        alt="card-img"
        className="rounded-t-lg w-[170px] mx-auto"
      />
      <div className={`p-4 md:p-5 rounded-b-2xl ${getColor(data?.status)}`}>
        <div className="flex justify-between">
          <div className="pr-5">
            <h6 className="text-xs font-semibold text-[#4E4E4E] text-center">
              Serial/Id
            </h6>
            <p className="pt-1 text-[10px] text-center">#000000</p>
          </div>
          <div className="bg-[#69776D] w-[1px]"></div>
          <div className="px-5">
            <h6 className="text-xs font-semibold text-[#4E4E4E] text-center">
              Company
            </h6>
            <p className="pt-1 text-[10px] text-center">abc</p>
          </div>
          <div className="bg-[#69776D] w-[1px]"></div>
          <div className="pl-5">
            <h6 className="text-xs font-semibold text-[#4E4E4E] text-center">
              Status
            </h6>
            <p className="pt-1 text-[10px] font-medium text-center">Full</p>
          </div>
        </div>
        <div className="my-2 bg-[#69776D] w-full h-[1px]"></div>
        <h6 className="flex items-center gap-1 text-xs font-medium text-[#69776D]">
          <IoLocation className="text-primary text-sm" />
          Hillside ave, London
        </h6>
        <div className="flex items-center justify-between">
          <Link
            to={`/bin-detail/${data?.id}`}
            className="bg-primary py-1 px-4 rounded-sm text-white text-xs font-semibold"
          >
            All Details
          </Link>
          <div className="max-w-[140px] max-h-[50px]">
            <PieChartComponent
              COLORS={COLORS}
              data={time}
              startAngle={180}
              endAngle={0}
              cornerRadius={1}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BinCard;

const getColor = (type) => {
  switch (type) {
    case "full":
      return "bg-[#FFF6F6]";
    case "half":
      return "bg-[#FFFAF4]";
    case "empty":
      return "bg-[#F6FFFF]";
    default:
      return "#FFFAF4";
  }
};
