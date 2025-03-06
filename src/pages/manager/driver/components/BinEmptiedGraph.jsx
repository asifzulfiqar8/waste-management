import React from 'react';
import { ComposedChart, Bar, Line, ResponsiveContainer, XAxis, YAxis } from 'recharts';

const dailyData = [
    { name: "M", value: 8 },
    { name: "T", value: 6 },
    { name: "W", value: 4 },
    { name: "T", value: 7 },
    { name: "F", value: 1 },
    { name: "S", value: 4 },
    { name: "S", value: 2 }
];

// Transform the data to include active and remaining counts
const transformedData = dailyData.map(item => ({
    name: item.name,
    active: item.value,
    remaining: 8 - item.value
}));

function BinEmptiedGraph() {
    return (
        <div className="flex flex-col bg-white rounded-lg shadow-lg p-1 w-full md:p-2 border">
            <h6 className="text-base font-semibold mb-4 text-[#242731]">Bin Emptied per Hour</h6>
            <ResponsiveContainer width="100%" height={200}>
                <ComposedChart
                    data={transformedData}
                    margin={{ top: 0, right: 10, left: -30, bottom: 0 }}
                >
                    <XAxis
                        dataKey="name"
                        tick={{ fontSize: 14, fill: "#808191" }}
                        axisLine={false}
                        tickLine={false}
                    />
                    <YAxis

                        domain={[1, 8]}
                        ticks={[1, 2, 3, 4, 5, 6, 7, 8]}
                        tick={{ fontSize: 12, fill: "#808191" }}
                        axisLine={false}
                        tickLine={false}
                        interval={0}  // Force all tick values to be shown
                        padding={{ top: 10, bottom: 10 }}
                    />
                    {/* Active (green) portion */}
                    <Bar
                        radius={[10, 10, 0, 0]}
                        dataKey="active"
                        stackId="a"
                        fill="#01B67A"
                        barSize={50}
                    />
                    {/* Remaining (gray) portion */}
                    <Bar
                        dataKey="remaining"
                        stackId="a"
                        fill="#F4F5F9"
                        barSize={50}
                    />
                    
                </ComposedChart>
            </ResponsiveContainer>
        </div>
    );
}

export default BinEmptiedGraph;


