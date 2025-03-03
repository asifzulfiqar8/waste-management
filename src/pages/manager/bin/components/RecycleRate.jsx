import PieChartComponent from "../../../../components/charts/PieChartComponent";

const COLORS = ["#01B67A", "#D2F4E0"];
const recyleData = [
  { name: "Recyclable", value: 25 },
  { name: "Non-Recyclable", value: 75 },
];

const RecycleRate = () => {
  return (
    <div>
      <h6 className="text-base font-semibold text-[#242731]">Recycling Rate</h6>
      <PieChartComponent
        width={380}
        height={380}
        COLORS={COLORS}
        data={recyleData}
        innerRadius={0}
        outerRadius={90}
        paddingAngle={0}
      />
      <div className="mt-5">
        {recyleData.map((list, i) => (
          <List key={i} list={list} />
        ))}
      </div>
    </div>
  );
};

export default RecycleRate;

const List = ({ list }) => {
  return (
    <div className="flex items-center justify-between gap-4 mt-2">
      <div className="flex items-center gap-4">
        <div
          className="size-[16px] rounded-full"
          style={{
            backgroundColor: list.name === "Recyclable" ? "#01B67A" : "#D2F4E0",
          }}
        ></div>
        <h6 className="text-sm font-medium text-[#4B5563]">{list.name}</h6>
      </div>
      <p className="text-sm text-black font-bold">{list.value}%</p>
    </div>
  );
};
