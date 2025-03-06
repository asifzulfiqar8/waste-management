import React from 'react';
import { CiHeart } from "react-icons/ci";

function DriverCard({ driver }) {
    const handleViewDetails = (id) => {
        console.log(id);
    };

    console.log("driver", driver);

    return (
        
            <div
                className="rounded-2xl cursor-pointer h-[320px] hover:bg-gray-100 shadow-lg border" >
                {/* Top Section */}
                <section
                    className="h-[247px] rounded-tl-2xl rounded-tr-2xl bg-cover bg-center p-3"
                    style={{ backgroundImage: `url(${driver.img})` }}>
                    <div className="flex justify-between text-white items-center">
                        <div>
                            <div className="text-lg font-bold">{driver.id}</div>
                            <div className="text-base font-normal">{driver.name}</div>
                        </div>
                        <CiHeart />
                    </div>
                </section>

                {/* Bottom Section */}
                <section className="flex items-center justify-between p-4">
                    <section className="flex gap-5 items-center">
                        <img
                            src={driver.DustBin}
                            alt="Dust Bin"
                            className="rounded-t-lg mx-auto"
                        />
                        <section>
                            <div className="text-lg font-bold">{driver.title}</div>
                            <div className="text-base font-normal">Pickups: {driver.pickups}</div>
                        </section>
                    </section>
                    <section>
                        <button
                            onClick={() => handleViewDetails(driver.id)}
                            className="bg-primary rounded-lg p-2 text-[8px] font-semibold text-white"
                        >
                            View Details
                        </button>
                    </section>
                </section>
            </div>
        
    );
}

export default DriverCard;
