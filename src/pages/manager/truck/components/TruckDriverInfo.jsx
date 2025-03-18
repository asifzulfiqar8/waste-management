import React from 'react';
import DriverFallback from '../../../../assets/images/truck/Driver.png';

const TruckDriverInfo = ({ driverData }) => {
    const { image, details } = driverData;

    return (
        <section className="flex flex-col bg-white rounded-lg shadow-lg p-1 w-full md:p-3 border ">
            <header className="text-lg font-bold p-3 ">Driver Details</header>
            <section className="flex gap-2 w-full">
                <section className='w-ful '>
                    <img
                        src={image || DriverFallback}
                        alt="Driver"
                        className="rounded-t-lg object-cover h-full  mx-auto"
                    />
                </section>
                <section className="flex flex-col w-full md:w-[60%] justify-between">
                    {details.map((detail, index) => (
                        <React.Fragment key={index}>
                            <section className="flex flex-col items-start">
                                <span className="text-sm font-bold">{detail.label}</span>
                                <span className="text-[#69776D] text-sm font-medium">
                                    {detail.value}
                                </span>
                            </section>
                            {index !== details.length - 1 && (
                                <section className="border-[1px] w-[80%] "></section>
                            )}
                        </React.Fragment>
                    ))}
                </section>
            </section>
        </section>
    );
};

export default TruckDriverInfo;
