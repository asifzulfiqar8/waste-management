// import React from 'react'
// import Driver from '../../../../assets/images/truck/Driver.png'
// function TruckDriverInfo({ driverData }) {
//     const { image, details } = driverData;

//     return (
//         <section className="flex flex-col bg-white rounded-lg shadow-lg p-2 md:p-4 border-[1px] mt-5">

//             Driver Details
//             <section className='flex gap-2'>

//                 <section>
//                     <img
//                         src={image}
//                         alt="Truck"
//                         className="rounded-t-lg w-[170px] mx-auto"
//                     />
//                 </section>
//                 <section className="flex flex-col justify-between mt-4">
//                     {details.map((detail, index) => (
//                         <React.Fragment key={index}>
//                             <section className='flex flex-col items-center'>

//                                 <section className="flex flex-col items-start justify-start ">
//                                     <span className="text-sm font-bold">{detail.label}</span>
//                                     <span className="text-[#69776D] text-sm font-medium">
//                                         {detail.value}
//                                     </span>
//                                 </section>
//                                 {index !== details.length - 1 && (
//                                     <section className="border-[1px]  w-[80%]"></section>
//                                 )}
//                             </section>
//                         </React.Fragment>
//                     ))}
//                 </section>
//             </section>

//         </section>
//     )
// }

// export default TruckDriverInfo
import React from 'react';
import DriverFallback from '../../../../assets/images/truck/Driver.png';

const TruckDriverInfo = ({ driverData }) => {
    const { image, details } = driverData;

    return (
        <section className="flex flex-col bg-white rounded-lg shadow-lg p-1 w-full md:p-2 border ">
            <header className="text-lg font-bold ">Driver Details</header>
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
