import BinImg from "../../../../assets/images/bin/bin.png";
import PieChartComponent from "../../../../components/charts/PieChartComponent";
import { binData, binListData } from "../utils/bin";

const COLORS = ["#E30613", "#FBBF00", "#393B3E"];

const TotalBins = () => {
  return (
    <section className="bg-white rounded-lg shadow-lg p-2 md:p-4 border-[1px] flex flex-wrap gap-5 lg:gap-10">
      <div>
        <h6 className="text-base md:text-xl font-semibold text-[#060606CC]">
          Total Bins
        </h6>
        <p className="text-xl md:text-3xl font-bold text-primary">230</p>
      </div>
      <div>
        <div className="size-[100px]">
          <PieChartComponent COLORS={COLORS} icon={BinImg} data={binData} />
        </div>
      </div>
      {binListData.map((list, i) => (
        <BinList key={i} list={list} />
      ))}
    </section>
  );
};

export default TotalBins;

const BinList = ({ list }) => {
  return (
    <div className="flex items-center gap-3">
      <img src={list.img} alt="bin image" className="w-[65px]" />
      <h6
        className={`text-xl md:text-[26px] font-semibold ${
          list.color ? list.color : "text-[#47484A]"
        }`}
      >
        {list.count}
      </h6>
    </div>
  );
};
