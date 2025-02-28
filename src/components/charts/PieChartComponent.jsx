import { Cell, Pie, PieChart } from "recharts";

const renderLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
}) => {
  const RADIAN = Math.PI / 180;
  const radius = innerRadius + (outerRadius - innerRadius) / 2; // Center of the slice
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor="middle"
      dominantBaseline="central"
      fontSize={8}
      fontWeight="bold"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const PieChartComponent = ({
  data,
  COLORS,
  icon,
  width = 100,
  height = 100,
  ...rest
}) => {
  return (
    <div className="relative">
      <PieChart width={width} height={height}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={30}
          outerRadius={50}
          cornerRadius={4}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
          label={renderLabel}
          labelLine={false}
          {...rest}
        >
          {data?.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS?.length]} />
          ))}
        </Pie>
      </PieChart>
      {icon && (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <img src={icon} alt="bin image" className="w-[30px]" />
        </div>
      )}
    </div>
  );
};

export default PieChartComponent;
