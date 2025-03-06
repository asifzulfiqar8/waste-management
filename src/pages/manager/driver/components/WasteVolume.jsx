import { useState } from "react";
import { Bar, BarChart, Cell, ResponsiveContainer, XAxis, YAxis } from "recharts";

// Daily data in minutes (maximum 1440 = 24 hours)
const dailyData = [
  { name: "M", value: 720 },   // 12 hours (half fill)
  { name: "T", value: 1346 },  // ~22h26m (almost full)
  { name: "W", value: 900 },   // 15 hours
  { name: "T", value: 840 },   // 14 hours
  { name: "F", value: 678 },   // ~11h18m
  { name: "S", value: 235 },   // ~3h55m
  { name: "S", value: 899 }    // ~14h59m
];

const WasteVolume = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Render a custom label above the hovered bar that shows hours and minutes.
  const renderCustomizedLabel = (props) => {
    const { x, y, width, value, index } = props;
    if (index !== hoveredIndex) return null;
    const hours = Math.floor(value / 60);
    const minutes = value % 60;
    const formattedTime = `${hours}h${minutes < 10 ? '0' : ''}${minutes}m`;
    return (
      <text
        x={x + width / 2}
        y={y - 10}
        fill="#000"
        textAnchor="middle"
        dominantBaseline="middle"
        fontSize={12}
      >
        {formattedTime}
      </text>
    );
  };

  return (
    <div className="flex flex-col bg-white rounded-lg shadow-lg p-1 w-full md:p-2 border">
      <h6 className="text-base font-semibold text-[#242731]">Progress</h6>
      <section className="flex mb-8">
        <section>
          <h6 className="text-3xl font-semibold text-[#242731]">24h</h6>
        </section>
        <section>
          <div className="text-xs font-normal w-[64px] bg-red-300">
            work time today
          </div>
        </section>
      </section>
      <ResponsiveContainer width="100%" height={150}>
        <BarChart data={dailyData} barGap={10} barCategoryGap={20}>
          <XAxis
            dataKey="name"
            fontSize={14}
            color="#808191"
            axisLine={false}
            tickLine={false}
          />
          {/* Set the vertical axis to be fixed from 0 to 1440 minutes (24 hours) and hide it */}
          <YAxis domain={[0, 1440]} hide />
          <Bar
            dataKey="value"
            fill="#F4F5F9"
            radius={[50, 50, 0, 0]}
            barSize={15}
            label={renderCustomizedLabel}
          >
            {dailyData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                className="transition-all duration-300"
                fill={hoveredIndex === index ? "#01B67A" : "#F4F5F9"}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default WasteVolume;
