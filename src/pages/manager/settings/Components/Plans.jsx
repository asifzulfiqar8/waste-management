import React, { useState } from 'react';
import { RxCheck } from 'react-icons/rx';
import { SmallButton } from '../../../../components/shared/small/Button';

const plans = [
    {
        id: 1,
        name: "Intro",
        price: 39,
        period: "/month",
        features: [
            "All features from the Standard Plan",
            "Priority support",
            "Advanced analytics",
            "Unlimited projects",
            "Custom integrations"
        ]
    },
    {
        id: 2,
        name: "Pro",
        price: 129,
        period: "/month",
        features: [
            "Everything in Pro plus extra benefits",
            "Dedicated account manager",
            "Extended analytics",
            "Customizable reports",
            "Access to beta features"
        ]
    },
    {
        id: 3,
        name: "Base",
        price: 79,
        period: "/month",
        features: [
            "All Premium features",
            "Enterprise-level security",
            "24/7 support",
            "Unlimited users",
            "Custom SLAs"
        ]
    }
];

function Plans() {
    const [selectedPlan, setSelectedPlan] = useState(null);

    const handleSelect = (planId) => {
        setSelectedPlan(planId);
    };

    return (
        // <section className="w-full bg-white rounded-lg border shadow-custom p-4 lg:p-8 flex flex-col items-center justify-center h-full lg:h-[560px] lg:px-24">
        <section className="w-full flex flex-col items-center gap-4 shadow-2xl rounded-2xl px-4 py-8 lg:px-6 lg:py-11 m-5">
            <h2 className="text-3xl font-bold text-center mb-2">
                The Right Plan for Your Business
            </h2>
            <p className="text-base text-center lg:w-[560px] mb-4">
                We have several powerful plans to showcase your business and get discovered as a creative entrepreneur. Everything you need.
            </p>
            <section className="w-full grid grid-cols-1 md:grid-cols-3 gap-8">
                {plans.map((plan) => (
                    <section
                        key={plan.id}
                        onClick={() => handleSelect(plan.id)}
                        className={`bg-white  justify-center border rounded-xl p-6 cursor-pointer transition-transform duration-300 transform 
                            ${selectedPlan === plan.id ? 'scale-105 shadow-2xl' : 'hover:scale-105'}
                            `}
                    >
                        <h3 className="font-bold text-2xl mb-4">{plan.name}</h3>
                        <section className="flex flex-col space-y-2 mb-4">
                            {plan.features.map((feature, index) => (
                                <section key={index} className="flex items-center gap-2">
                                    <RxCheck className="text-green-500" />
                                    <span className="truncate">{feature}</span>
                                </section>
                            ))}
                        </section>
                        <section className="flex items-end text-2xl font-bold mb-4">
                            <span className="text-lg">$</span>
                            {plan.price}
                            <span className="text-base font-normal text-[#474445]">{plan.period}</span>
                        </section>
                        <section className=''>

                            <SmallButton className="!text-xl !w-full flex  justify-center font-bold text-white">
                                Subscription
                            </SmallButton>
                        </section>
                    </section>
                ))}
            </section>
        </section>
        // </section>
    );
}

export default Plans;
