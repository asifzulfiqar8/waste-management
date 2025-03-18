import React from 'react';
import TruckImg from '../../../../assets/images/truck/TruckImg.png';
import PieChartComponent from '../../../../components/charts/PieChartComponent';
import { truckListData, tuckData } from "../utils/truck";

const COLORS = ["#E30613", "#FBBF00", "#393B3E"];
function TotalTrucks() {
    return (
        <section className="bg-white rounded-lg shadow-lg p-2 md:p-4 border-[1px] items-center flex flex-wrap justify-between gap-5 lg:gap-10">
            <div>
                <h6 className="text-base md:text-xl font-semibold text-[#060606CC]">
                    Total Truck
                </h6>
                <p className="text-xl md:text-3xl font-bold text-primary">230</p>
            </div>
            <div className='flex gap-14  '>

                {truckListData.map((list, i) => (
                    <TruckList key={i} list={list} />
                ))}
            </div>
            <div>
                <div className="size-[100px]">
                    <PieChartComponent COLORS={COLORS} icon={TruckImg} data={tuckData} />
                </div>
            </div>
        </section>

    )
}

export default TotalTrucks




const TruckList = ({ list }) => {
    return (
        <div className="flex flex-col items-center gap-3">
            <img src={list.img} alt="bin image" className="w-[65px]" />
            <h6 className="text-sm md:text-[20px] font-medium text-[#060606CC]">
                {list.text}
            </h6>
            <h6
                className={`text-xl md:text-[26px] font-semibold ${list.color ? list.color : "text-[#47484A]"
                    }`}
            >
                {list.count}
            </h6>
        </div>
    );
};