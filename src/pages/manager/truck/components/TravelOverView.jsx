

import React, { useState } from 'react';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer
} from 'recharts';
import Dropdown from '../../../../components/shared/small/Dropdown'
// Example data for "Route"
const routeData = [
    { day: 'Mon', km: 80, comparison: 60 },
    { day: 'Tue', km: 70, comparison: 65 },
    { day: 'Wed', km: 50, comparison: 75 },
    { day: 'Thu', km: 85, comparison: 70 },
    { day: 'Fri', km: 80, comparison: 65 },
    { day: 'Sat', km: 90, comparison: 60 },
    { day: 'Sun', km: 75, comparison: 50 },
];

// Example data for "Waste"
const wasteData = [
    { day: 'Mon', km: 15, comparison: 10 },
    { day: 'Tue', km: 20, comparison: 12 },
    { day: 'Wed', km: 25, comparison: 18 },
    { day: 'Thu', km: 30, comparison: 28 },
    { day: 'Fri', km: 40, comparison: 35 },
    { day: 'Sat', km: 35, comparison: 25 },
    { day: 'Sun', km: 28, comparison: 22 },
];
const dropdownOptions = [
    { option: "Option 1", value: "option1" },
    { option: "Option 2", value: "option2" },
    { option: "Option 3", value: "option3" },
];

const handleDropdownChange = (value) => {
    setFormData((prevData) => ({
        ...prevData,
        sensorType: value,
    }));
};


const TravelOverView = () => {
    // Track which dataset is selected
    // const [chartType, setChartType] = useState('route');
    const [viewType, setViewType] = useState('normal'); // 'normal' or 'comparison'
    const [chartType, setChartType] = useState('route');
    // Switch between datasets based on current selection
    const currentData = chartType === 'route' ? routeData : wasteData;

    // Helper function to determine button classes
    const buttonClasses = (active) =>
        `p-2 h-7 rounded-md  cursor-pointer text-xs font-medium transition-colors duration-200 ${active
            ? 'bg-primary text-white'
            : 'bg-white text-gray-700  '
        }`;


    return (
        <section>

            {/* <section className='flex w-full justify-between' >
                <h2>Travel OverView</h2>
                <section>
                    <button>
                        Normal
                    </button>
                    <button>
                        Comparison
                    </button>
                </section>
                <section>

                    <button
                        onClick={() => setChartType('route')}
                        style={{ marginRight: 10 }}
                    >
                        Route
                    </button>
                    <button onClick={() => setChartType('waste')}>Waste</button>
                </section>
                <section>
                    <Dropdown
                        options={dropdownOptions}
                        defaultText="Select an option"
                        onSelect={handleDropdownChange}
                    />
                </section>
            </section> */}

            <section className="flex flex-wrap justify-between">
                <section className="flex justify-between items-center">
                    <h2 className='text-lg font-semibold'>Travel OverView</h2>
                </section>

                {/* First toggle group for Normal / Comparison */}
                <section className="flex justify-start items-center h-8 border border-gray-300 rounded-md ">
                    <button
                        className={buttonClasses(viewType === 'normal')}
                        onClick={() => setViewType('normal')}
                    >
                        Normal
                    </button>
                    <button
                        className={buttonClasses(viewType === 'comparison')}
                        onClick={() => setViewType('comparison')}
                    >
                        Comparison
                    </button>
                </section>

                {/* Second toggle group for Route / Waste */}
                <section className="flex justify-start border items-center h-8 border-gray-300 rounded-md">
                    <button
                        className={buttonClasses(chartType === 'route')}
                        onClick={() => setChartType('route')}
                    >
                        Route
                    </button>
                    <button
                        className={buttonClasses(chartType === 'waste')}
                        onClick={() => setChartType('waste')}
                    >
                        Waste
                    </button>
                </section>

                {/* Dropdown Section */}
                <section>
                    <Dropdown
                        options={dropdownOptions}
                        defaultText="Select an option"
                        onSelect={handleDropdownChange}
                    />
                </section>
            </section>
            <section style={{ width: '100%', height: 300 }}>
                {/* Top buttons for toggling data */}

                {/* Responsive chart container */}
                <ResponsiveContainer>
                    <LineChart data={currentData}
                        margin={{ top: 10, right: 10, left: -30, bottom: 0 }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="day" />
                        <YAxis domain={[0, 100]} />
                        <Tooltip />

                        {/* The primary (green) line */}
                        <Line
                            type="monotone"
                            dataKey="km"
                            stroke="#2ecc71"
                            strokeWidth={3}
                            dot={false}
                            activeDot={{ r: 6 }}
                        />

                        {/* A comparison or secondary (gray) line */}
                        <Line
                            type="monotone"
                            dataKey="comparison"
                            stroke="#ccc"
                            strokeWidth={3}
                            dot={false}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </section>
        </section>

    );
};

export default TravelOverView;


















