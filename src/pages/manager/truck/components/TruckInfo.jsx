import React from 'react';
import { IoLocation } from "react-icons/io5";

const TruckInfo = ({ truckData }) => {
    const { image, details } = truckData;

    return (
        <section className="flex flex-col bg-white rounded-lg shadow-lg p-1 md:p-3 w-full border-[1px] ">
            {/* Truck Image */}
            <section>
                <img
                    src={image}
                    alt="Truck"
                    className="rounded-t-lg  object-cover h-full md:mx-auto"
                />
            </section>
            {/* Truck Details */}
            <section className="flex mt-3 items-center justify-between">
                {details.map((detail, index) => (
                    <React.Fragment key={index}>
                        <section className="flex flex-col items-center">
                            <span className="text-sm font-bold">{detail.label}</span>
                            <span className="text-[#69776D] text-sm font-medium">
                                {detail.value}
                            </span>
                        </section>
                        {index !== details.length - 1 && (
                            <section className="border-[1px] h-8"></section>
                        )}
                    </React.Fragment>
                ))}
            </section>
            <section className='w-full border-[1px] mt-2 mb-2'></section>
            <section className='flex'>
                <IoLocation className='text-[#01B67A]'/>
                <span className="text-[#69776D] text-sm font-medium ">
                Hillside ave, London
                </span>
            </section>
        </section>
    );
};

export default TruckInfo;
