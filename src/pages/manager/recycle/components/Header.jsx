import React from 'react';
import { recycleRatesData, wasteCardsData } from '../utils/recycle';

// Reusable component for the waste cards
const WasteCard = ({ title, subtitles, value }) => (
    <div className="flex items-center justify-between p-5 bg-transparent border border-[#e7e7e7] rounded-[10px] h-[122px] w-full ">
        <section className="text-sm font-semibold">
            <div className="text-lg font-semibold">{title}</div>
            {subtitles.map((line, index) => (
                <div key={index}>{line}</div>
            ))}
        </section>
        <section className="text-2xl font-semibold">
            {value}
        </section>
    </div>
);

// Reusable component for the recycle rate card
const RecycleRateCard = ({ rates }) => (
    <div className="flex flex-col items-center justify-between p-2 bg-transparent border border-[#e7e7e7] rounded-[10px] h-[122px] w-full ">
        {rates.map((item, index) => (
            <section key={index} className="flex justify-between text-[#737A87] w-full">
                <div className="text-xs font-normal">{item.label}</div>
                <div className="text-xs font-normal">{item.value}</div>
            </section>
        ))}
    </div>
);

function Header() {
    return (
        <section className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {wasteCardsData.map((card, index) => (
                <WasteCard
                    key={index}
                    title={card.title}
                    subtitles={card.subtitles}
                    value={card.value}
                />
            ))}
            <RecycleRateCard rates={recycleRatesData} />
        </section>
    );
}

export default Header;
