import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const subscriptionData = [
  {
    username: "jon",
    email: "example@email.com",
    subscriptionPlan: "Basic",
    activationDate: "2024-01-01",
    expiryDate: "2024-01-01",
    status: "Active",
    paymentMethod: "Credit Card",
    totalAmount: "120",
  },

];

const CustomHeader = ({ title, width }) => (
  <section
    style={{
      width: width,
      overflow: "hidden",
      alignItems: "center",
      justifyContent: "center",
      whiteSpace: "normal",
      wordBreak: "break-word",
      textAlign: "center",
      display: "flex",
    }}
  >
    {title}
  </section>
);

const handleViewMap = (row) => {
  // Implement your view map functionality here.
  console.log("View Map clicked for:", row);
};

const subscriptionDataColumns = [
  {
    name: <CustomHeader title="User Name" width="" />,
    selector: (row) => row.username,
  },
  {
    name: <CustomHeader title="Email" width="" />,
    selector: (row) => row.email,
  },
  {
    name: <CustomHeader title="Subscription Plan" width="" />,
    selector: (row) => row.subscriptionPlan,
  },
  {
    name: <CustomHeader title="Activation Date" width="" />,
    selector: (row) => `${row.activationDate}`,
  },
  {
    name: <CustomHeader title="Expiry Date" width="" />,
    selector: (row) => `${row.expiryDate}`,
  },
  {
    name: <CustomHeader title="Status" width="" />,
    selector: (row) => `${row.status}`,
  },
  {
    name: <CustomHeader title="Payment Method" width="" />,
    selector: (row) => `${row.paymentMethod}`,
  },
  {
    name: <CustomHeader title="Total Amount" width="" />,
    selector: (row) => `$${row.totalAmount} `,
  },
  {
    name: <CustomHeader title="Action" width="" />,
    cell: (row) => (
      <section
        onClick={() => handleViewMap(row)}
        style={{
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <span className="text-primary text-sm font-semibold">
          View Detail
        </span>
        <MdKeyboardDoubleArrowRight className="text-primary text-sm font-semibold" />
      </section>
    ),
  },
];

export { subscriptionData, subscriptionDataColumns };
