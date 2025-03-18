// Data file (e.g., wastData.js)
const wastData = [
  {
    date: "Feb 19, 2024",
    organicWaste:'85',
    hazardousWaste: "24",
    plasticWast: "45",
    wood: "40",
    paperWast: '16', // Collected in kg
    recycled: "50",
    totalCollected: "500",
    recycled: '450',
    composted:'95',
    wastSentToLandfill:'100'
  },

];


const CustomHeader = ({ title, width }) => (
  <div
    style={{
      width: width,
      overflow: "hidden",
      alignItems: 'center',
      justifyContent:'center',
      whiteSpace: "normal",
      wordBreak: "break-word",
      textAlign: "center",
      display: "block", // ensures block-level rendering so width is applied
      display:'flex'
    }}
  >
    {title}
  </div>
);


const wastDataColumns = [

  {
    name: <CustomHeader title="Date" width="" />,
    selector: (row) => row.date,
  },
  {
    name: <CustomHeader title="Organic Waste" width="" />,
    selector: (row) => row.organicWaste,

  },
  {
    name: <CustomHeader title="Hazardous Waste" width="" />,

    selector: (row) => `${row.hazardousWaste}kg`,
  },
  
  {
    name: <CustomHeader title="Plastic Wast" width="" />,

    selector: (row) => `${row.plasticWast}kg`,
  },
  {
    name: <CustomHeader title="Metal Wast" width="" />,

    selector: (row) => `${row.metalWast}kg`,
  },
  {
    name: <CustomHeader title="Paper Wast" width="" />,

    selector: (row) => `${row.paperWast}kg`,
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
    name: <CustomHeader title="Composted" width="" />,

    selector: (row) => `${row.composted}%`,
  },
  {
    name: <CustomHeader title="Wast Sent To Landfill" width="" />,

    selector: (row) => `${row.wastSentToLandfill}`,
  },
];

export { wastData, wastDataColumns };
