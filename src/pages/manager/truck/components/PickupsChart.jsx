import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

// Sample data reflecting your screenshot (7 AM → 1 PM, picks 5 → 40)
const data = [
  { time: '7 AM', picks: 5 },
  { time: '8 AM', picks: 10 },
  { time: '9 AM', picks: 15 },
  { time: '10 AM', picks: 32 },
  { time: '11 AM', picks: 28 },
  { time: '12 PM', picks: 35 },
  { time: '1 PM', picks: 40 },
];

const PickupsChart = () => {
  return (
    <div style={{ width: '100%',margin: '0 0px 0 -40px', padding: '0px', height: '100%' }}>
      <ResponsiveContainer>
        <LineChart data={data}>
          {/* Remove axis lines & ticks if you want a cleaner look */}
          <XAxis 
            dataKey="time"
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            domain={[5, 40]}
            ticks={[5, 10, 15, 20, 25, 30, 35, 40]}
            axisLine={false}
            tickLine={false}
          />
          <Tooltip />

          {/* The green line; adjust stroke, strokeWidth, and dot to match your style */}
          <Line
            type="monotone"
            dataKey="picks"
            stroke="#2ecc71"
            strokeWidth={3}
            dot={false}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PickupsChart;
