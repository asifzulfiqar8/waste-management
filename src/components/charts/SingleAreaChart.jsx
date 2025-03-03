import { Tooltip } from "react-leaflet";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  XAxis,
} from "recharts";

const SingleAreaChart = ({ data, height = 300 }) => {
  return (
    <ResponsiveContainer width="100%" height={height}>
      <AreaChart
        data={data}
        margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
      >
        <defs>
          <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="15%" stopColor="#5bc0de" stopOpacity={1} />
            <stop offset="85%" stopColor="#F49324" stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
        <XAxis
          dataKey="name"
          fontSize={14}
          color="#808191"
          axisLine={false}
          tickLine={false}
        />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="value"
          stroke="#d9534f"
          // strokeWidth={1}
          fill="url(#colorGradient)"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default SingleAreaChart;
