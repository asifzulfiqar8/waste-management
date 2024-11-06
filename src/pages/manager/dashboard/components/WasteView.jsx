import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  Legend,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Paper", value: 40, color: "#00C49F" },
  { name: "Plastic", value: 40, color: "#2dd4bf" },
  { name: "Metal", value: 25, color: "#0088FE" },
  { name: "Recycled", value: 35, color: "#FFBB28" },
];

const WasteView = () => {
  return (
    <ResponsiveContainer width={300} height={300}>
      <PieChart>
        {/* Outer ring */}
        <Pie
          data={data}
          dataKey="value"
          cx="50%"
          cy="50%"
          outerRadius={80}
          innerRadius={60}
          startAngle={90}
          endAngle={450}
          paddingAngle={5}
          label={({ percent }) => `${(percent * 100).toFixed(0)}%`}
          labelLine={false}
          isAnimationActive={false} // Optional: disables animation for faster rendering
        >
          {data.map((entry, index) => (
            <Cell key={`outer-cell-${index}`} fill={entry.color} />
          ))}
        </Pie>

        {/* Inner ring to create layered effect */}
        <Pie
          data={data}
          dataKey="value"
          cx="50%"
          cy="50%"
          outerRadius={60}
          innerRadius={40}
          startAngle={90}
          endAngle={450}
          paddingAngle={5}
        >
          {data.map((entry, index) => (
            <Cell key={`inner-cell-${index}`} fill={entry.color} />
          ))}
        </Pie>

        <Tooltip />
        <Legend
          layout="horizontal"
          verticalAlign="bottom"
          align="center"
          iconType="circle"
          payload={data.map((item) => ({
            id: item.name,
            type: "circle",
            value: item.name,
            color: item.color,
          }))}
        />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default WasteView;
