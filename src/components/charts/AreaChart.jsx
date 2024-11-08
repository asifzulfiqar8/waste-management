/* eslint-disable react/prop-types */
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const CustomAreaChart = ({ data, xAxisKey, areas }) => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <AreaChart
        data={data}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      >
        <CartesianGrid vertical={true} horizontal={false} />
        <XAxis
          dataKey={xAxisKey}
          tickLine={false}
          style={{ fontSize: "12px" }}
        />
        <YAxis
          tickLine={false}
          tickFormatter={(value) => `${value.toLocaleString()}`}
          style={{ fontSize: "12px" }}
        />
        <Tooltip formatter={(value) => `${value.toLocaleString()} Tons`} />

        <defs>
          {areas.map((area, index) => (
            <linearGradient
              key={index}
              id={`color${area.dataKey}`}
              x1="0"
              y1="0"
              x2="0"
              y2="1"
            >
              <stop offset="5%" stopColor={area.fill} stopOpacity={0.8} />
              <stop offset="95%" stopColor={area.fill} stopOpacity={0} />
            </linearGradient>
          ))}
        </defs>

        {areas.map((area, index) => (
          <Area
            key={index}
            type="monotone"
            dataKey={area.dataKey}
            stroke={area.stroke}
            fillOpacity={1}
            fill={`url(#color${area.dataKey})`}
          />
        ))}
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default CustomAreaChart;
