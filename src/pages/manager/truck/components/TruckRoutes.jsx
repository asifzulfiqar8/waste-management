import React from 'react'
import Button from '../../../../components/shared/small/Button'
import { routesData } from '../utils/truck';

function TruckRoutes() {
  return (
    <div className='flex flex-col p-3  h-full '>
      <section className='flex items-center justify-between   w-full'>

        <h3 className="text-base  font-semibold"> Routes</h3>
        <h3 className="text-base  font-semibold"> Today</h3>
      </section>
      <section className='h-[8px] w-full border-b-[1px]  border-[#A0A0A0]'></section>
      <section className='h-[300px] scroll-0 overflow-auto'>

        <RoutesList routes={routesData} />
      </section>

    </div>
  )
}

export default TruckRoutes



const RouteItem = ({ item, onClick }) => {
  return (
    <section className="flex pt-2 justify-between">
      <section>
        <h3 className="text-sm font-normal">{item.title}</h3>
        <h3 className="text-[10px] text-[#A0A0A0] font-semibold">{item.time}</h3>
      </section>
      <section className='pr-2'>
        <button
          className="bg-primary rounded-md p-2 text-[8px] font-semibold"
          onClick={() => onClick(item)}
        >
          View on map
        </button>
      </section>
    </section>
  );
};


const RoutesList = ({ routes }) => {
  // Function to handle button click and log the clicked item
  const handleViewMap = (item) => {
    console.log("Clicked item:", item);
  };

  return (
    <section className=''>
      {routes.map((item) => (
        <RouteItem key={item.id} item={item} onClick={handleViewMap} />
      ))}
    </section>
  );
};