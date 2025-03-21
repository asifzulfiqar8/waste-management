// Data file (e.g., recycleData.js)
const recycleData = [
  {
    lastRecycledDate: "Feb 19, 2024",
    metal: "24",
    plastic: "45",
    wood: "40",
    paper: '16', // Collected in kg
    liquid: "50",
    totalCollected: "500",
    recycled: '450',
    recycledEfficiency:'95',
    wastSentToLandfill:'100'
  },

];


const CustomHeader = ({ title, width }) => (
  <div
    style={{
      width: width,
      overflow: "hidden",
      // whiteSpace: "normal",
      // wordBreak: "break-word",
      // textAlign: "center",
      // display: "block", // ensures block-level rendering so width is applied
    }}
  >
    {title}
  </div>
);


const recycleDataColumns = [

  {
    name: <CustomHeader title="Last Recycled Date" width="" />,
    selector: (row) => row.lastRecycledDate,
    // width: "50px",
    // wrap: true, // Enables wrapping in cell content
    // center: true, // Centers the cell content
  },
  {
    name: <CustomHeader title="Metal" width="" />,

    selector: (row) => `${row.metal}kg`,
  },
  {
    name: <CustomHeader title="Wood" width="" />,

    selector: (row) => `${row.wood}kg`,
  },
  {
    name: <CustomHeader title="Paper" width="" />,

    selector: (row) => `${row.paper}kg`,
  },
  {
    name: <CustomHeader title="Plastic" width="" />,

    selector: (row) => `${row.plastic}kg`,
  },
  {
    name: <CustomHeader title="Last Active Location" width="" />,

    selector: (row) => `${row.liquid}kg`,
  },
  {
    name: <CustomHeader title="Total Collected" width="" />,

    selector: (row) => `${row.totalCollected}kg`,
  },
  {
    name: <CustomHeader title="Recycled" width="" />,

    selector: (row) => `${row.recycled}kg`,
  },
  {
    name: <CustomHeader title="Recycled Efficiency" width="" />,

    selector: (row) => `${row.recycledEfficiency}%`,
  },
  {
    name: <CustomHeader title="Wast Sent To Landfill" width="" />,

    selector: (row) => `${row.wastSentToLandfill}`,
  },
];

export { recycleData, recycleDataColumns };
