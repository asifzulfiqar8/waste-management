import { useState } from "react";
import SingleAreaChart from "../../../../components/charts/SingleAreaChart";

const dailyData = [
  { name: "Mon", value: 235 },
  { name: "Tue", value: 456 },
  { name: "Wed", value: 678 },
  { name: "Thu", value: 890 },
  { name: "Fri", value: 999 },
  { name: "Sat", value: 1233 },
  { name: "Sun", value: 1455 },
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

const FillLevelTrend = () => {
  const [activeTab, setActiveTab] = useState("Day");
  const chartData =
    activeTab === "Day"
      ? dailyData
      : activeTab === "Week"
      ? weeklyData
      : monthlyData;
  return (
    <div>
      <h6 className="text-base font-semibold text-[#242731]">
        Fill Level Trend
      </h6>
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
      <SingleAreaChart data={chartData} height={400} />
    </div>
  );
};

export default FillLevelTrend;
