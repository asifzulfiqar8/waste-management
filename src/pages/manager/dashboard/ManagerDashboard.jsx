import {
  BinsInfoContent,
  DriversInfoContent,
  TrucksInfoContent,
} from "./components/InfoCardContent";
import InfoCardLayout from "./components/InfoCardLayout";
import bin from "../../../assets/images/dashboard/bin-card.png";
import truck from "../../../assets/images/dashboard/truck-card.png";
import driver from "../../../assets/images/dashboard/driver-card.png";
import WasteDetailTable from "./components/WasteDetailTable";
import Alerts from "./components/Alerts";
import Map from "./components/Map";
import WasteView from "./components/WasteView";
import WasteOverViewChart from "./components/WasteOverViewChart";
import WasteAreaChart from "./components/WasteAreaChart";

const ManagerDashboard = () => {
  return (
    <div className="grid  grid-cols-1 xl:grid-cols-6 gap-4">
      <div className="col-span-6 xl:col-span-4 grid grid-cols-1 md:grid-cols-3 gap-2">
        <InfoCardLayout content={<BinsInfoContent />} url={bin} />

        <InfoCardLayout content={<TrucksInfoContent />} url={truck} />

        <InfoCardLayout content={<DriversInfoContent />} url={driver} />
      </div>
      <div className=" col-span-6 xl:col-span-2">
        <WasteOverViewChart />
      </div>
      <div className="rounded-lg col-span-6 xl:col-span-4">
        <Map />
      </div>
      <div className="col-span-6 xl:col-span-2">
        <Alerts />
      </div>
      <div className="col-span-6 xl:col-span-4">
        <WasteAreaChart />
      </div>
      <div className="col-span-6 xl:col-span-2">
        <WasteView />
      </div>
      <div className="col-span-6">
        <WasteDetailTable />
      </div>
    </div>
  );
};

export default ManagerDashboard;
