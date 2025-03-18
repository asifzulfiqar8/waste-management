const SensorListTableStyle = {
  headRow: {
    style: {
      background: "#F1F3F9",
      // borderTopLeftRadius: "6px",
      // borderTopRightRadius: "6px",
      borderRadius: '12px',
      overflow: "hidden", // ensures the rounded corners are applied
    },
  },
    headCells: {
      style: {
        fontSize: "14px",
        fontWeight: 600,
        background: "#E1E6EF",
      },
    },
    rows: {
      style: {
          // background: "#e3fff9",
        borderRadius: "6px",
        // padding: "10px 0",
        margin: "1px 0",
        // height: "100%",
        borderBottomWidth: "1 !important",
      },
    },
    cells: {
      style: {
        color: "#292D32",
        fontSize: "12px",
        // background: "red"
      },
    },
  };
  
  export { SensorListTableStyle };
  