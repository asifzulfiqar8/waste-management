import { useState } from "react";
import { Bar, BarChart, Cell, ResponsiveContainer, XAxis } from "recharts";

const dailyData = [
  { name: "Mon", value: 3000 },
  { name: "Tue", value: 1346 },
  { name: "Wed", value: 2345 },
  { name: "Thu", value: 1400 },
  { name: "Fri", value: 678 },
  { name: "Sat", value: 235 },
  { name: "Sun", value: 899 },
];

const weeklyData = [
  { name: "Week 1", value: 7000 },
  { name: "Week 2", value: 8500 },
  { name: "Week 3", value: 9500 },
  { name: "Week 4", value: 6000 },
  { name: "Week 5", value: 9500 },
];

const monthlyData = [
  { name: "Jan", value: 32000 },
  { name: "Feb", value: 28000 },
  { name: "Mar", value: 34000 },
  { name: "Apr", value: 39000 },
  { name: "May", value: 31000 },
  { name: "Jun", value: 35000 },
];

const WasteVolume = () => {
  const [activeTab, setActiveTab] = useState("Day");
  const chartData =
    activeTab === "Day"
      ? dailyData
      : activeTab === "Week"
      ? weeklyData
      : monthlyData;
  return (
    <div>
      <h6 className="text-base font-semibold text-[#242731]">Waste volume</h6>
      <div className="my-5 flex items-center gap-3">
        {["Day", "Week", "Month"].map((item, i) => (
          <button
            key={i}
            className={`py-[10px] px-5 rounded-full text-xs font-bold ${
              activeTab === item
                ? "text-white bg-primary"
                : "text-[#5F6165] bg-transparent"
            }`}
            onClick={() => setActiveTab(item)}
          >
            {item}
          </button>
        ))}
      </div>
      <ResponsiveContainer width="100%" height={350}>
        <BarChart
          width={150}
          height={40}
          data={chartData}
          barGap={10}
          barCategoryGap={20}
        >
          <XAxis
            dataKey="name"
            fontSize={14}
            color="#808191"
            axisLine={false}
            tickLine={false}
          />
          <Bar
            dataKey="value"
            fill="#F4F5F9"
            radius={[50, 50, 0, 0]}
            barSize={50}
          >
            {chartData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                className="transition-all duration-300"
                fill="#F4F5F9"
                onMouseEnter={(e) => (e.target.style.fill = "#01B67A")}
                onMouseLeave={(e) => (e.target.style.fill = "#F4F5F9")}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default WasteVolume;
