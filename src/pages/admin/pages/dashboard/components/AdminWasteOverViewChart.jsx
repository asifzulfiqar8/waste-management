/* eslint-disable react/prop-types */
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  { day: "Mon", value: 2 },
  { day: "Tue", value: 4 },
  { day: "Wed", value: 5 },
  { day: "Thu", value: 6 },
  { day: "Fri", value: 4 },
  { day: "Sat", value: 5 },
  { day: "Sun", value: 3 },
];

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-primary" style={{ padding: "5px", color: "#fff" }}>
        <p style={{ fontSize: "12px" }}>{`${payload[0].value} Ton`}</p>
      </div>
    );
  }
  return null;
};

const AdminWasteOverViewChart = () => {
  return (
    <div className="bg-white rounded-lg border-[1px] shadow-lg h-full p-3">
      <h3 className="text-sm md:text-base font-[600]">Waste Overview</h3>

      <ResponsiveContainer width="100%" height={150}>
        <LineChart
          data={data}
          margin={{ top: 10, right: 10, left: -30, bottom: 0 }}
        >
          {/* Customize grid to only show X-axis line */}
          <CartesianGrid horizontal={false} vertical={false} />
          <XAxis
            dataKey="day"
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 9 }} // Decrease font size for X-axis ticks
          />
          <YAxis
            domain={[2, 6]}
            ticks={[2, 3, 4, 5, 6]}
            unit="-Ton"
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 9 }} // Decrease font size for Y-axis ticks
          />
          <Tooltip content={<CustomTooltip />} />
          <Line
            type="linear" // Set the line type to "linear" for a straight line
            dataKey="value"
            stroke="#34c38f"
            dot={{ stroke: "#cc99ff", strokeWidth: 2 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AdminWasteOverViewChart;
