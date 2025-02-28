import { Bar, BarChart, ResponsiveContainer, XAxis } from "recharts";

const data = [
  { name: "Mon", value: 3000 },
  { name: "Tue", value: 1346 },
  { name: "Wed", value: 2345 },
  { name: "Thu", value: 1400 },
  { name: "Fri", value: 678 },
  { name: "Sat", value: 235 },
  { name: "Sun", value: 899 },
];

const WasteVolume = () => {
  return (
    <div>
      <h6 className="text-base font-semibold text-[#242731]">Waste volume</h6>
      <div className="my-5">tabs</div>
      <ResponsiveContainer width="100%" height="300px">
        <BarChart width={150} height={40} data={data}>
          <XAxis dataKey="name" />
          <Bar dataKey="value" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default WasteVolume;
