import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const transactionData = [
    {
        transactionId: "TXN001",
        username: "jon",
        email: "example@gmail.com",
        transactionDate: "20/12/2024",
        amount: "24",
        paymentMethod: "Credit Card",
        subscriptionPlan: "Standard",
        status: "failed",
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

const transactionDataColumns = [
    {
        name: <CustomHeader title="Transaction ID" width="" />,
        selector: (row) => `${row.transactionId} `,
    },
    {
        name: <CustomHeader title="User Name" width="" />,
        selector: (row) => row.username,
    },
    {
        name: <CustomHeader title="Email" width="" />,
        selector: (row) => row.email,
    },
    {
        name: <CustomHeader title="Transaction Date" width="" />,
        selector: (row) => `${row.transactionDate}`,
    },
    {
        name: <CustomHeader title="Amount" width="" />,
        selector: (row) => `$${row.amount}`,
    },
    {
        name: <CustomHeader title="Payment Method" width="" />,
        selector: (row) => `${row.paymentMethod}`,
    },
    {
        name: <CustomHeader title="Subscription Plan" width="" />,
        selector: (row) => row.subscriptionPlan,
    },

    {
        name: <CustomHeader title="Status" width="" />,
        selector: (row) => `${row.status}`,
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

export { transactionData, transactionDataColumns };
