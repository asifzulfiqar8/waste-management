import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const data = [
  { date: "Sept 15", value1: 30000, value2: 40000 },
  { date: "Sept 17", value1: 45000, value2: 50000 },
  { date: "Sept 19", value1: 35000, value2: 45000 },
  { date: "Sept 21", value1: 50000, value2: 55000 },
  { date: "Sept 23", value1: 40000, value2: 45000 },
  { date: "Sept 25", value1: 30000, value2: 40000 },
  { date: "Sept 27", value1: 45000, value2: 50000 },
  { date: "Sept 29", value1: 40000, value2: 45000 },
  { date: "Oct 1", value1: 35000, value2: 40000 },
  { date: "Oct 3", value1: 50000, value2: 60000 },
  { date: "Oct 5", value1: 45000, value2: 55000 },
  { date: "Oct 7", value1: 40000, value2: 50000 },
  { date: "Oct 9", value1: 45000, value2: 55000 },
];

const WasteAreaChart = () => {
  return (
    <div className="bg-white rounded-lg border-[1px] shadow-lg h-full p-3">
      <h3 className="text-sm md:text-base font-[600] ">Waste Chart</h3>
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="date"
            tickLine={false}
            style={{ fontSize: "12px" }} // Adjust font size here
          />
          <YAxis
            tickLine={false}
            tickFormatter={(value) => `${value.toLocaleString()}`}
            style={{ fontSize: "12px" }} // Adjust font size here
          />
          <Tooltip formatter={(value) => `${value.toLocaleString()} Tons`} />
          <defs>
            <linearGradient id="colorValue1" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#a2efc1" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#a2efc1" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorValue2" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#d5f5f6" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#d5f5f6" stopOpacity={0} />
            </linearGradient>
          </defs>
          <Area
            type="monotone"
            dataKey="value1"
            stroke="#34c38f"
            fillOpacity={1}
            fill="url(#colorValue1)"
          />
          <Area
            type="monotone"
            dataKey="value2"
            stroke="#00c3ff"
            fillOpacity={1}
            fill="url(#colorValue2)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default WasteAreaChart;
