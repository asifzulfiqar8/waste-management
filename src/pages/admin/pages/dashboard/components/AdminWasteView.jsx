import {
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

// Original data
const data = [
  { name: "Paper", value: 40, color: "#04E59B80" },
  { name: "Plastic", value: 40, color: "#DCD521" },
  { name: "Metal", value: 25, color: "#23B2E7" },
  { name: "Recycled", value: 60, color: "#01B67A" },
];

const AdminWasteView = () => {
  const innerData = [
    { name: "Paper", value: 33.33, color: "#04E59B80" },
    { name: "Plastic", value: 33.33, color: "#DCD521" },
    { name: "Metal", value: 33.33, color: "#23B2E7" },
  ];

  const recycledValue = data.find((item) => item.name === "Recycled").value;
  const remainingValue = 100 - recycledValue;

  const outerData = [
    { name: "Recycled", value: recycledValue, color: "#01B67A" },
  ];
  const remainingData = [
    { name: "Remaining", value: remainingValue, color: "#fff" },
  ];

  return (
    <div className="bg-white rounded-lg border-[1px] shadow-lg w-full p-3">
      <h3 className="text-sm md:text-base font-[600] flex justify-start">
        Waste View
      </h3>
      <div style={{ position: "relative", height: "340px" }}>
        {/* Outer Radial Chart */}
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={[...outerData, ...remainingData]}
              dataKey="value"
              cx="50%"
              cy="50%"
              outerRadius={90}
              innerRadius={72}
              startAngle={90}
              endAngle={450}
              paddingAngle={5}
              label={({ value }) => (
                <span style={{ fill: "#ffffff", fontSize: "14px" }}>
                  {value}
                </span>
              )}
              labelLine={false}
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

        {/* Inner Full Pie Chart */}
        <div
          style={{
            position: "absolute",
            top: "25%",
            left: "20%",
            width: "60%",
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
                outerRadius={70}
                innerRadius={0}
                startAngle={90}
                endAngle={450}
                paddingAngle={0}
                label={({ value }) => (
                  <span style={{ fill: "#ffffff", fontSize: "14px" }}>
                    {value}
                  </span>
                )}
                labelLine={false}
              >
                {innerData.map((entry, index) => (
                  <Cell key={`inner-cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Centered Legend */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
            marginTop: "10px",
          }}
        >
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
      </div>
    </div>
  );
};

export default AdminWasteView;
