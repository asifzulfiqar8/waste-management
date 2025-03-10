// Data file (e.g., truckData.js)
const truckData = [
    {
      id: 1,
      driverName: "john",
      currentStatus: "Active",
      totalBinCollected: 16, 
      garbageCollected: 16, // Collected in kg
      lastActiveLocation: "Location A",
      lastMaintenanceDate: "Feb 19, 2024",
      alert: 'overflow Alert',
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
  
  
  const truckDataColumns = [
    {
      name: <CustomHeader title="Truck ID" width="150px" />,
      selector: (row) => row.id,
      // width: "50px",
      // wrap: true, // Enables wrapping in cell content
      // center: true, // Centers the cell content
    },
    {
      name: <CustomHeader title="Driver Name" width="150px" />,
  
      selector: (row) => row.driverName,
    },
    {
      name: <CustomHeader title="Total Bin Collected" width="100px" />,
  
      selector: (row) => `${row.totalBinCollected}`,
    },
    {
      name: <CustomHeader title="Garbage Collected (kg)" width="100px" />,
  
      selector: (row) => `${row.garbageCollected}kg`,
    },
    {
      name: <CustomHeader title="Current Status" width="150px" />,
  
      selector: (row) => row.currentStatus,
    },
    {
      name: <CustomHeader title="Last Active Location" width="150px" />,
  
      selector: (row) => row.lastActiveLocation,
    },
    {
      name: <CustomHeader title="Last Maintenance Date" width="150px" />,
  
      selector: (row) => row.lastMaintenanceDate,
    },
    {
      name: <CustomHeader title="Alert" width="150px" />,
  
      selector: (row) => row.alert,
    },
  ];
  
  export { truckData, truckDataColumns };
  