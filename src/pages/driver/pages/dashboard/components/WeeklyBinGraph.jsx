
import React, { useState } from 'react';
import { Bar, ComposedChart, Line, ResponsiveContainer, Tooltip, XAxis } from 'recharts';

function WeeklyBinGraph() {
    const [view, setView] = useState("weekly");
    const maxCapacity = 50; // Maximum capacity; values can range from 1 to 50

    // Generate a random number between 1 and maxCapacity (inclusive)
    const getRandomValue = () => Math.floor(Math.random() * maxCapacity) + 1;

    // Generate random data for different views
    const weeklyData = [
        { name: "M", value: getRandomValue() },
        { name: "T", value: getRandomValue() },
        { name: "W", value: getRandomValue() },
        { name: "T", value: getRandomValue() },
        { name: "F", value: getRandomValue() },
        { name: "S", value: getRandomValue() },
        { name: "S", value: getRandomValue() },
    ];

    const monthlyData = Array.from({ length: 12 }, (_, i) => ({
        name: `${i + 1}`,
        value: getRandomValue(),
    }));

    const dailyData = [
        { name: "12 AM", value: getRandomValue() },
        { name: "1 AM", value: getRandomValue() },
        { name: "2 AM", value: getRandomValue() },
        { name: "3 AM", value: getRandomValue() },
        { name: "4 AM", value: getRandomValue() },
        { name: "5 AM", value: getRandomValue() },
        { name: "6 AM", value: getRandomValue() },
        { name: "7 AM", value: getRandomValue() },
        { name: "8 AM", value: getRandomValue() },
        { name: "9 AM", value: getRandomValue() },
        { name: "10 AM", value: getRandomValue() },
        { name: "11 AM", value: getRandomValue() },
        { name: "12 PM", value: getRandomValue() },
        { name: "1 PM", value: getRandomValue() },
        { name: "2 PM", value: getRandomValue() },
        { name: "3 PM", value: getRandomValue() },
        { name: "4 PM", value: getRandomValue() },
        { name: "5 PM", value: getRandomValue() },
        { name: "6 PM", value: getRandomValue() },
        { name: "7 PM", value: getRandomValue() },
        { name: "8 PM", value: getRandomValue() },
        { name: "9 PM", value: getRandomValue() },
        { name: "10 PM", value: getRandomValue() },
        { name: "11 PM", value: getRandomValue() },
    ];

    // Select data based on the view
    let data;
    if (view === "weekly") {
        data = weeklyData;
    } else if (view === "monthly") {
        data = monthlyData;
    } else if (view === "daily") {
        data = dailyData;
    }

    // Transform the data to include active and remaining portions
    const transformedData = data.map(item => ({
        name: item.name,
        active: item.value,
        remaining: maxCapacity - item.value,
    }));

    // Custom Tooltip: displays only the active value and "bin"
    const CustomTooltip = ({ active, payload }) => {
        if (active && payload && payload.length) {
            // Find the active bar payload
            const activePayload = payload.find(p => p.dataKey === "active");
            if (activePayload) {
                return (
                    <div className="custom-tooltip p-2 bg-primary border rounded shadow">
                        <p className="label">{`${activePayload.value} bin`}</p>
                    </div>
                );
            }
        }
        return null;
    };

    return (
        <div className="flex flex-col bg-white rounded-lg shadow-lg p-2 w-full md:p-4 border">
            {/* Dropdown for selecting view */}
            <div className="flex items-center justify-between mb-4">
                <h6 className="text-base font-semibold text-[#242731]">Bin Emptied</h6>
                <select
                    className="border p-1 rounded"
                    value={view}
                    onChange={(e) => setView(e.target.value)}
                >
                    <option value="daily">Daily</option>
                    <option value="weekly">Weekly</option>
                    <option value="monthly">Monthly</option>
                </select>
            </div>
            <ResponsiveContainer width="100%" height={200}>
                <ComposedChart
                    data={transformedData}
                    margin={{ top: 10, right: 10, left: 10, bottom: 10 }}
                >
                    <XAxis
                        dataKey="name"
                        tick={{ fontSize: 14, fill: "#808191" }}
                        axisLine={false}
                        tickLine={false}
                    />
                   
                    {/* Custom Tooltip */}
                    <Tooltip content={<CustomTooltip />} />
                    {/* Active (colored) portion */}
                    <Bar
                        radius={[10, 10, 0, 0]}
                        dataKey="active"
                        stackId="a"
                        fill="#E4FFF6BD"
                        barSize={50}
                    />
                    {/* Remaining (gray) portion */}
                    <Bar
                        dataKey="remaining"
                        stackId="a"
                        fill="#F4F5F9"
                        barSize={50}
                    />
                    {/* Sharp-edged line chart overlay */}
                    <Line
                        type="linear"
                        dataKey="active"
                        stroke="#01B67A"
                        strokeWidth={4}
                        dot={{ r: 4 }}
                    />
                </ComposedChart>
            </ResponsiveContainer>
        </div>
    );
}

export default WeeklyBinGraph;
