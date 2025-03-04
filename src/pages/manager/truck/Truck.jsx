import React from 'react'
import { CiSearch } from "react-icons/ci";
import { AddIcon } from "../../../assets/svgs/icon";

import TotalTrucks from './components/TotalTrucks'
import { Link } from 'react-router-dom';
import TruckCard from './components/TruckCard';
import { trucks } from './utils/truck';

// const trucks = [
//   {
//     id: '000001',
//     driverName: 'John Doe',
//     image: 'path/to/truck-image.png',
//     fuelData: [
//       {
//         image: 'path/to/fuel-icon1.png',
//         text: 'Fuel',
//         percentage: 75,
//         lineColor: '#34D399',
//       },
//       {
//         image: 'path/to/fuel-icon2.png',
//         text: 'Oil',
//         percentage: 50,
//         lineColor: '#FBBF24',
//       },
//       {
//         image: 'path/to/fuel-icon2.png',
//         text: 'Oil',
//         percentage: 50,
//         lineColor: '#FBBF24',
//       },
//     ],
//   },
//   {
//     id: '000001',
//     driverName: 'John Doe',
//     image: 'path/to/truck-image.png',
//     fuelData: [
//       {
//         image: 'path/to/fuel-icon1.png',
//         text: 'Fuel',
//         percentage: 75,
//         lineColor: '#34D399',
//       },
//       {
//         image: 'path/to/fuel-icon2.png',
//         text: 'Oil',
//         percentage: 50,
//         lineColor: '#FBBF24',
//       },
//       {
//         image: 'path/to/fuel-icon2.png',
//         text: 'Oil',
//         percentage: 50,
//         lineColor: '#FBBF24',
//       },
//     ],
//   },
//   // ...other truck objects
// ];


const Truck = () => {
  return (
    <div>
      <TotalTrucks />
      <div className="bg-white rounded-lg shadow-lg p-2 md:p-4 border-[1px] mt-5">
        <ListingHeaeder />
        <div className="w-full h-[0.6px] bg-[#00000033] my-[18px]"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 max-h-[700px] overflow-y-scroll custom-scroll">
          {/* {binCardData.map((card, i) => (
            <BinCard data={card} key={i} />
            ))} */}
          {trucks.map((card, i) => (

            <TruckCard card={card} key={i} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Truck




const ListingHeaeder = () => {
  return (
    <div className="flex flex-wrap justify-between gap-4">
      <h6 className="text-base font-semibold text-[#060606CC]">Trucks Listing</h6>
      <div className="flex items-center gap-2 bg-transparent border border-[#e7e7e7] rounded-[10px] py-2 px-4 h-[38px]">
        <CiSearch fontSize={20} color="#7E7E7E" />
        <input
          type="text"
          placeholder="Search"
          className="w-full text-xs md:text-sm font-medium bg-transparent border-none focus:outline-none text-[#939699]"
        />
      </div>
      <div className="flex flex-wrap items-center gap-3">
        {["Favorite", "Active", "In Repair"].map((item, i) => (
          <button
            className="border border-[#54545433] rounded-md py-2 px-4 text-xs text-[#484848] font-semibold capitalize hover:bg-primary hover:text-white"
            key={i}
          >
            {item.split("-").join(" ")}
          </button>
        ))}
        <Link
          to="/add-bin"
          className="flex items-center gap-3 text-[#060606CC] text-base font-semibold"
        >
          Add Truck
          <AddIcon />
        </Link>
      </div>
    </div>
  );
};
