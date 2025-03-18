import React from 'react';
import DataTable from 'react-data-table-component';
import bin from "../../../../assets/images/dashboard/bin-card.png";
import Petrol from "../../../../assets/images/dashboard/Petrol.png";
import truck from "../../../../assets/images/dashboard/truck-card.png";
import Alerts from './components/Alerts';
import { BinsInfoContent, PetrolInfoContent, TrucksInfoContent } from './components/BinsInfoContent';
import InfoCardLayout from './components/InfoCardLayout';
import Map from './components/Map';
import WasteOverViewChart from './components/WasteOverViewChart';
import WeeklyBinGraph from './components/WeeklyBinGraph';
import binTableStyle from './utils/binTableStyle';
import { binData, binDataColumns } from './utils/DriverDashboard';


function DriverDashboard() {
  return (
    <div className="grid  grid-cols-1 xl:grid-cols-8 gap-4">

      <div className="col-span-8 xl:col-span-6 grid grid-cols-1 md:grid-cols-3 gap-2">
        <InfoCardLayout content={<BinsInfoContent />} title={'Total Bins'} count={'133'} url={bin} />

        <InfoCardLayout content={<TrucksInfoContent />} title={'Total Truck'} count={'133'} url={truck} />

        <InfoCardLayout content={<PetrolInfoContent />} title={'Fuel Usage'} count={'65%'} url={Petrol} />
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
      <div className="rounded-lg col-span-8 xl:col-span-6 bg-white  shadow-lg p-2 w-full md:p-4 border">
        <DataTable
          columns={binDataColumns}
          data={binData}
          customStyles={binTableStyle}
          pagination
        />
      </div>
      <div className="col-span-8 xl:col-span-2">
        <WeeklyBinGraph />
      </div>
    </div>
  )
}

export default DriverDashboard