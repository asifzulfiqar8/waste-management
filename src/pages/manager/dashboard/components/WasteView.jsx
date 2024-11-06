import {
  PieChart,
  Pie,
  Cell,
  Legend,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// Original data
const data = [
  { name: "Paper", value: 40, color: "#04E59B80" },
  { name: "Plastic", value: 40, color: "#DCD521" },
  { name: "Metal", value: 25, color: "#23B2E7" },
  { name: "Recycled", value: 60, color: "#01B67A" },
];

const WasteView = () => {
  // Inner chart: equal distribution (33.33% each for Paper, Plastic, Metal)
  const innerData = [
    { name: "Paper", value: 33.33, color: "#04E59B80" },
    { name: "Plastic", value: 33.33, color: "#DCD521" },
    { name: "Metal", value: 33.33, color: "#23B2E7" },
  ];

  // Calculate the remaining space dynamically for the outer chart
  const recycledValue = data.find((item) => item.name === "Recycled").value;
  const remainingValue = 100 - recycledValue; // Automatically fill the rest with white

  // Outer chart: 60% filled with "Recycled" data and remaining dynamically calculated
  const outerData = [
    { name: "Recycled", value: recycledValue, color: "#01B67A" },
  ];
  const remainingData = [
    { name: "Remaining", value: remainingValue, color: "#fff" },
  ]; // Fill the rest with white

  return (
    <div
      className="bg-white rounded-lg border-[1px] shadow-lg w-full"
      style={{ position: "relative", height: "300px" }}
    >
      {/* Outer Radial Chart (Recycled and Remaining data) */}
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={[...outerData, ...remainingData]} // Adding "Recycled" and "Remaining" data
            dataKey="value"
            cx="50%"
            cy="50%"
            outerRadius={100} // Outer radius for radial effect
            innerRadius={80} // Inner radius to control thickness
            startAngle={90}
            endAngle={450}
            paddingAngle={5}
            label={({ value }) => (
              <span style={{ fill: "#ffffff", fontSize: "14px" }}>{value}</span>
            )}
            labelLine={false} // Disable connecting lines
          >
            {outerData.map((entry, index) => (
              <Cell key={`outer-cell-${index}`} fill={entry.color} />
            ))}
            {remainingData.map((entry, index) => (
              <Cell key={`remaining-cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>

      {/* Inner Full Pie Chart (Equal Distribution for Paper, Plastic, and Metal) */}
      <div
        style={{
          position: "absolute",
          top: "25%",
          left: "25%",
          width: "50%",
          height: "50%",
        }}
      >
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={innerData}
              dataKey="value"
              cx="50%"
              cy="50%"
              outerRadius={70} // Smaller to fit within outer ring
              innerRadius={0} // Full pie chart appearance
              startAngle={90}
              endAngle={450}
              paddingAngle={5}
              label={({ value }) => (
                <span style={{ fill: "#ffffff", fontSize: "14px" }}>
                  {value}
                </span>
              )}
              labelLine={false} // Disable connecting lines
            >
              {innerData.map((entry, index) => (
                <Cell key={`inner-cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Legend */}
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
    </div>
  );
};

export default WasteView;
