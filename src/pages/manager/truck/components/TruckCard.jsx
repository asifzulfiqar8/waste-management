import React from 'react';
import { CiHeart } from "react-icons/ci";
import { useNavigate } from 'react-router-dom';

const TruckCard = ({ card }) => {
    const { driverName, image, fuelData } = card || {};
    const navigate = useNavigate()
    const truckDetailHandle = ((id) => {
        navigate(`/truck-detail/${id}`)
    })
    return (
        <div onClick={() => truckDetailHandle(card?.id)} className="bg-white rounded-2xl cursor-pointer hover:bg-gray-100 shadow-lg border p-3">
            <div className="flex justify-between items-center">
                <div>
                    <div className="text-lg font-bold">{card?.id}</div>
                    <div className="text-[#72767C] text-base font-normal">{driverName}</div>
                </div>
                <CiHeart />
            </div>
            <div className="mb-4">
                <img
                    src={image}
                    alt="Truck"
                    className="rounded-t-lg w-[170px] mx-auto"
                />
            </div>
            {fuelData && <FuelCard fuelData={fuelData} />}
        </div>
    );
};

const FuelCard = ({ fuelData }) => (
    <div className="flex justify-between items-center">
        {fuelData.map((item, index) => (
            <div key={index} className="flex flex-col space-y-2 items-center">
                <img src={item.image} alt={item.text || "Fuel"} />
                <div>{item.text}</div>
                <div className="h-[3px] w-full bg-gray-200 rounded-md overflow-hidden">
                    <div
                        className="h-full"
                        style={{ width: `${item.percentage}%`, backgroundColor: item.lineColor }}
                    />
                </div>
            </div>
        ))}
    </div>
);

export default TruckCard;
