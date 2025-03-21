import { useParams } from "react-router-dom";
import CardOnDetail from "./components/CardOnDetail";
import FillLevelTrend from "./components/FillLevelTrend";
import MapView from "./components/MapView";
import RecycleRate from "./components/RecycleRate";
import WasteVolume from "./components/WasteVolume";
import { binCardData } from "./utils/bin";

const BinDetail = () => {
  const { id } = useParams();
  const card = binCardData.find((card) => card.id === id);
  console.log("card", card);
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-5">
      <div className="lg:col-span-8 bg-white rounded-lg shadow-lg p-2 md:p-4 border-[1px]">
        <CardOnDetail data={card} />
      </div>
      <div className="lg:col-span-4 bg-white rounded-lg shadow-lg border-[1px]">
        <h6 className="text-sm md:text-base font-semibold text-[#060606CC] bg-white rounded-t-lg py-3 px-5 shadow-2xl">
          Map View
        </h6>
        <MapView />
      </div>
      <div className="lg:col-span-6 bg-white rounded-lg shadow-lg p-2 md:p-4 border-[1px]">
        <WasteVolume />
      </div>
      <div className="lg:col-span-3 bg-white rounded-lg shadow-lg p-2 md:p-4 border-[1px]">
        <RecycleRate />
      </div>
      <div className="lg:col-span-3 bg-white rounded-lg shadow-lg p-2 md:p-4 border-[1px]">
        <FillLevelTrend />
      </div>
    </div>
  );
};

export default BinDetail;
