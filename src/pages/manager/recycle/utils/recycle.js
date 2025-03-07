const wasteCardsData = [
    { title: "Total", subtitles: ["Waste", "Collected"], value: "2000 kg" },
    { title: "Total", subtitles: ["Waste", "Recycled"], value: "2000 kg" },
    { title: "Total", subtitles: ["Remaining", "no recyclable"], value: "2000 kg" }
];

// Data array for recycle rate details
const recycleRatesData = [
    { label: "Metal Recycle Rate", value: "580kg" },
    { label: "Plastic Recycle Rate", value: "580kg" },
    { label: "Wood Recycle Rate", value: "580kg" },
    { label: "Paper Recycle Rate", value: "580kg" },
    { label: "Liquid Recycle Rate", value: "580kg" }
];
const recycleData = [
    {
        id: 1,
        date: "Feb 12, 2024",
        metal: "16kg",
        wood: "16kg",
        paper: "16kg",
        plastic: "16kg",
        liquid: "16kg",
        collected: "16kg",
        recycled: "80kg",
        efficiency: "80%",
        landfill:"800"
    },
    {
        id: 1,
        date: "Feb 12, 2024",
        metal: "16kg",
        wood: "16kg",
        paper: "16kg",
        plastic: "16kg",
        liquid: "16kg",
        collected: "16kg",
        recycled: "80kg",
        efficiency: "80%",
        landfill:"800"
    },
    {
        id: 1,
        date: "Feb 12, 2024",
        metal: "16kg",
        wood: "16kg",
        paper: "16kg",
        plastic: "16kg",
        liquid: "16kg",
        collected: "16kg",
        recycled: "80kg",
        efficiency: "80%",
        landfill:"800"
    },
    {
        id: 1,
        date: "Feb 12, 2024",
        metal: "16kg",
        wood: "16kg",
        paper: "16kg",
        plastic: "16kg",
        liquid: "16kg",
        collected: "16kg",
        recycled: "80kg",
        efficiency: "80%",
        landfill:"800"
    },
    {
        id: 1,
        date: "Feb 12, 2024",
        metal: "16kg",
        wood: "16kg",
        paper: "16kg",
        plastic: "16kg",
        liquid: "16kg",
        collected: "16kg",
        recycled: "80kg",
        efficiency: "80%",
        landfill:"800"
    },

];

const recycleDataColumns = [
    {
        name: "Last Recycled Date",
        selector: (row) => row?.date,
    },
    {
        name: "Metal",
        selector: (row) => row?.metal,
    },
    {
        name: "Wood",
        selector: (row) => row?.wood,
    },
    {
        name: "Paper",
        selector: (row) => row?.paper,
    },
    {
        name: "Plastic",
        selector: (row) => row?.plastic,
    },
    {
        name: "Liquid",
        selector: (row) => row?.liquid,
    },
    {
        name: "Total Collected",
        selector: (row) => row?.collected,
    },
    {
        name: "Recycled",
        selector: (row) => row?.recycled,
    },
    {
        name: "Recycling Efficiency",
        selector: (row) => row?.efficiency,
    },
    {
        name: "Waste Sent to Landfill",
        selector: (row) => row?.landfill,
    },
];



export { wasteCardsData, recycleRatesData,recycleData,recycleDataColumns };