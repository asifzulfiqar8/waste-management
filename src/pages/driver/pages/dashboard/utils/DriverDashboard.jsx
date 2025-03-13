// Data file (e.g., binData.js)
const binData = [
  {
    binID: "Bin-001",
    location:'Location',
    status: "full",
    lastServiced: "2024-12-30",
    actionNeeded: 'Collection',
    
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


const binDataColumns = [

  {
    name: <CustomHeader title="Bin ID" width="90px" />,
    selector: (row) => row.binID,
  },
  {
    name: <CustomHeader title="Location" width="90px" />,
    selector: (row) => row.location,

  },
  {
    name: <CustomHeader title="Status" width="90px" />,
    selector: (row) => row.status,

  },
  {
    name: <CustomHeader title="Last Serviced" width="90px" />,

    selector: (row) => `${row.lastServiced}`,
  },
  
  {
    name: <CustomHeader title="Action Needed" width="90px" />,
    
    selector: (row) => `${row.actionNeeded}`,
  },
  
];

export { binData, binDataColumns };
