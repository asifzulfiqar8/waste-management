import bin from "../../../assets/images/dashboard/bin-card.png";
import driver from "../../../assets/images/dashboard/driver-card.png";
import truck from "../../../assets/images/dashboard/truck-card.png";
import Alerts from "./components/Alerts";
import {
  BinsInfoContent,
  DriversInfoContent,
  TrucksInfoContent,
} from "./components/InfoCardContent";
import InfoCardLayout from "./components/InfoCardLayout";
import Map from "./components/Map";
import WasteAreaChart from "./components/WasteAreaChart";
import WasteDetailTable from "./components/WasteDetailTable";
import WasteOverViewChart from "./components/WasteOverViewChart";
import WasteView from "./components/WasteView";

const ManagerDashboard = () => {
  return (
    <div className="grid  grid-cols-1 xl:grid-cols-8 gap-4">
      <div className="col-span-8 xl:col-span-6 grid grid-cols-1 md:grid-cols-3 gap-2">
        <InfoCardLayout content={<BinsInfoContent />} url={bin} />

        <InfoCardLayout content={<TrucksInfoContent />} url={truck} />

        <InfoCardLayout content={<DriversInfoContent />} url={driver} />
      </div>
      <div className=" col-span-8 xl:col-span-2">
        <WasteOverViewChart />
      </div>
      <div className="rounded-lg col-span-8 xl:col-span-6">
        <Map />
      </div>
      <div className="col-span-8 xl:col-span-2">
        <Alerts />
      </div>
      <div className="col-span-8 xl:col-span-6">
        <WasteAreaChart />
      </div>
      <div className="col-span-8 xl:col-span-2">
        <WasteView />
      </div>
      <div className="col-span-8">
        <WasteDetailTable />
      </div>
    </div>
  );
};

export default ManagerDashboard;
