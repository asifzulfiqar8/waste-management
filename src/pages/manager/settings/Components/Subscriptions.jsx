import React from 'react'
import SubscriptionImg from '../../../../assets/images/settings/Subscription.png'
import { RxCheck } from "react-icons/rx";
import Button, { SmallButton } from '../../../../components/shared/small/Button';

const features = [
    "All features from the Standard Plan",
    "Priority support",
    "Advanced analytics",
    "Unlimited projects",
    "Custom integrations"
];

function Subscriptions() {
    return (
        <section className="w-full bg-white rounded-lg border shadow-custom p-4 lg:p-8 flex flex-col items-center justify-center h-full lg:h-[560px] lg:px-24">

            <h1 className="font-bold text-3xl mb-6">Active Subscriptions</h1>

            <section className="w-full grid grid-cols-1 lg:grid-cols-12 gap-4 shadow-2xl rounded-2xl px-4 py-8 lg:px-6 lg:py-11 m-5">

                {/* Left Section */}
                <section className="lg:col-span-5 flex flex-col space-y-4">
                    <h2 className="font-bold text-2xl">Pro Package</h2>
                    {features.map((feature, index) => (
                        <section key={index} className="flex items-center gap-2">
                            <RxCheck className="text-green-500" />
                            <span className="truncate">{feature}</span>
                        </section>
                    ))}
                    <section className="flex items-end text-2xl font-bold">
                        <span className="text-lg">$</span>
                        129
                        <span className="text-base font-normal text-[#474445]">/month</span>
                    </section>
                    <SmallButton className="!text-xl font-bold text-white">
                        Subscription
                    </SmallButton>
                </section>

                {/* Right Section */}
                <section className="lg:col-span-7">
                    <section className='flex items-center justify-center'>

                        <img
                            src={SubscriptionImg}
                            alt="Subscription illustration"
                            className="  object-cover rounded-t-lg"
                        />
                    </section>
                </section>
            </section>
        </section>
    );
}

export default Subscriptions;
