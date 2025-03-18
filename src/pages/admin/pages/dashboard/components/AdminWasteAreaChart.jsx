import { useState } from "react";
import CustomAreaChart from '../../../../../components/charts/AreaChart';
// Monthly data for each chart category
const monthlyData = {
  metal: [
    { date: "January", value1: 2000, value2: 1300 },
    { date: "February", value1: 2400, value2: 1700 },
    { date: "March", value1: 2200, value2: 1800 },
    { date: "April", value1: 2500, value2: 1900 },
    { date: "May", value1: 2600, value2: 2000 },
    { date: "June", value1: 2300, value2: 2100 },
    { date: "July", value1: 2400, value2: 2200 },
    { date: "August", value1: 2700, value2: 2100 },
    { date: "September", value1: 2800, value2: 2200 },
    { date: "October", value1: 2600, value2: 2400 },
    { date: "November", value1: 2500, value2: 2300 },
    { date: "December", value1: 2700, value2: 2400 },
  ],
  plastic: [
    { date: "January", value1: 1500, value2: 1200 },
    { date: "February", value1: 1700, value2: 1300 },
    { date: "March", value1: 1600, value2: 1400 },
    { date: "April", value1: 1800, value2: 1500 },
    { date: "May", value1: 1900, value2: 1600 },
    { date: "June", value1: 1700, value2: 1800 },
    { date: "July", value1: 1800, value2: 1900 },
    { date: "August", value1: 2000, value2: 1800 },
    { date: "September", value1: 2100, value2: 1900 },
    { date: "October", value1: 1900, value2: 2000 },
    { date: "November", value1: 1800, value2: 2100 },
    { date: "December", value1: 2000, value2: 2200 },
  ],
  wood: [
    { date: "January", value1: 1800, value2: 1100 },
    { date: "February", value1: 2000, value2: 1200 },
    { date: "March", value1: 2100, value2: 1300 },
    { date: "April", value1: 2300, value2: 1400 },
    { date: "May", value1: 2400, value2: 1500 },
    { date: "June", value1: 2200, value2: 1600 },
    { date: "July", value1: 2300, value2: 1700 },
    { date: "August", value1: 2500, value2: 1600 },
    { date: "September", value1: 2600, value2: 1700 },
    { date: "October", value1: 2400, value2: 1800 },
    { date: "November", value1: 2300, value2: 1900 },
    { date: "December", value1: 2500, value2: 2000 },
  ],
  paper: [
    { date: "January", value1: 1300, value2: 1000 },
    { date: "February", value1: 1500, value2: 1100 },
    { date: "March", value1: 1600, value2: 1200 },
    { date: "April", value1: 1800, value2: 1300 },
    { date: "May", value1: 1900, value2: 1400 },
    { date: "June", value1: 1700, value2: 1500 },
    { date: "July", value1: 1800, value2: 1600 },
    { date: "August", value1: 2000, value2: 1500 },
    { date: "September", value1: 2100, value2: 1600 },
    { date: "October", value1: 1900, value2: 1700 },
    { date: "November", value1: 1800, value2: 1800 },
    { date: "December", value1: 2000, value2: 1900 },
  ],
  liquid: [
    { date: "January", value1: 1400, value2: 900 },
    { date: "February", value1: 1600, value2: 1000 },
    { date: "March", value1: 1700, value2: 1100 },
    { date: "April", value1: 1900, value2: 1200 },
    { date: "May", value1: 2000, value2: 1300 },
    { date: "June", value1: 1800, value2: 1400 },
    { date: "July", value1: 1900, value2: 1500 },
    { date: "August", value1: 2100, value2: 1400 },
    { date: "September", value1: 2200, value2: 1500 },
    { date: "October", value1: 2000, value2: 1600 },
    { date: "November", value1: 1900, value2: 1700 },
    { date: "December", value1: 2100, value2: 1800 },
  ],
};

// Area configurations for different tabs
const areaConfigurations = {
  metal: [
    { dataKey: "value1", stroke: "#ff8c00", fill: "#ffd700" },
    { dataKey: "value2", stroke: "#ff4500", fill: "#ffdead" },
  ],
  plastic: [
    { dataKey: "value1", stroke: "#007acc", fill: "#add8e6" },
    { dataKey: "value2", stroke: "#005cbf", fill: "#87cefa" },
  ],
  wood: [
    { dataKey: "value1", stroke: "#8b4513", fill: "#deb887" },
    { dataKey: "value2", stroke: "#a0522d", fill: "#f4a460" },
  ],
  paper: [
    { dataKey: "value1", stroke: "#34c38f", fill: "#a2efc1" },
    { dataKey: "value2", stroke: "#00c3ff", fill: "#d5f5f6" },
  ],
  liquid: [
    { dataKey: "value1", stroke: "#483d8b", fill: "#b0c4de" },
    { dataKey: "value2", stroke: "#4169e1", fill: "#87ceeb" },
  ],
};

const AdminWasteAreaChart = () => {
  // Default tab is "Paper"
  const [activeTab, setActiveTab] = useState("paper");

  return (
    <div className="bg-white rounded-lg border-[1px] shadow-lg h-full">
      <div className="bg-white shadow-lg p-3 rounded-t-xl mb-3">
        <div className="flex items-center justify-between flex-wrap">
          <h3 className="text-sm font-[600]">Waste Chart</h3>

          <div className="flex flex-wrap">
            {Object.keys(areaConfigurations).map((tab) => (
              <button
                key={tab}
                className={`py-1 px-3 border-[1px] text-sm ${
                  activeTab === tab ? "bg-[#E1F1FD]" : "bg-white"
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Pass the specific data and areas based on the active tab */}
      <CustomAreaChart
        data={monthlyData[activeTab]}
        xAxisKey="date"
        areas={areaConfigurations[activeTab]}
      />
    </div>
  );
};

export default AdminWasteAreaChart;
