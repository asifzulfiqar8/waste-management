const AlertListTableStyle = {
    headRow: {
      style: {
        background: "#F1F3F9",
        // borderTopLeftRadius: "6px",
        // borderTopRightRadius: "6px",
        borderRadius:'12px',
        overflow: "hidden", // ensures the rounded corners are applied
      },
    },
    headCells: {
      style: {
        fontSize: "14px",
        fontWeight: 700,
        // you can remove borderRadius here or adjust if needed
      },
    },
    rows: {
      style: {
        borderRadius: "6px",
        margin: "1px 0",
        borderBottomWidth: "1 !important",
      },
    },
    cells: {
      style: {
        color: "#292D32",
        fontSize: "12px",
      },
    },
  };
  
  export { AlertListTableStyle };
  