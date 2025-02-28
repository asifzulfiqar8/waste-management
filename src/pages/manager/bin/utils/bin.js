import emptyBin from "../../../../assets/images/bin/empty-bin.png";
import halfBin from "../../../../assets/images/bin/half-bin.png";
import fullBin from "../../../../assets/images/bin/red-bin.png";
import binImg from "../../../../assets/images/bin/bin-img.png";

const vehiclesPieChartData = [
  {
    name: "In Use",
    value: 65,
    color: "rgba(225, 52, 30, 1)",
  },
  { name: "Not In Use", value: 55, color: "rgba(43, 193, 85, 1)" },
  { name: "Total Vehicles", value: 250, color: "rgba(64, 123, 255, 1)" },
];

const binData = [
  { name: "Paper", value: 10 },
  { name: "Paper", value: 70 },
  { name: "Paper", value: 20 },
];

const binListData = [
  {
    img: emptyBin,
    color: "text-[#47484A]",
    count: "02",
  },
  {
    img: halfBin,
    color: "text-[#FAC109]",
    count: "152",
  },
  {
    img: fullBin,
    color: "text-[#E30613]",
    count: "82",
  },
];

const binCardData = [
  {
    id: "1",
    binImg: binImg,
    serial: "#002320",
    company: "Tetra Intech",
    status: "full",
    location: "Hillside Ave, London",
    time: [
      { name: "morning", value: 33 },
      { name: "evening", value: 33 },
      { name: "night", value: 34 },
    ],
  },
  {
    id: "2",
    binImg: binImg,
    serial: "#002321",
    company: "GreenWaste Ltd",
    status: "half",
    location: "Baker Street, London",
    time: [
      { name: "morning", value: 40 },
      { name: "evening", value: 30 },
      { name: "night", value: 30 },
    ],
  },
  {
    id: "3",
    binImg: binImg,
    serial: "#002322",
    company: "EcoBin Solutions",
    status: "empty",
    location: "Oxford Street, London",
    time: [
      { name: "morning", value: 20 },
      { name: "evening", value: 50 },
      { name: "night", value: 30 },
    ],
  },
  {
    id: "4",
    binImg: binImg,
    serial: "#002323",
    company: "WasteTech UK",
    status: "full",
    location: "Piccadilly Circus, London",
    time: [
      { name: "morning", value: 25 },
      { name: "evening", value: 25 },
      { name: "night", value: 50 },
    ],
  },
  {
    id: "5",
    binImg: binImg,
    serial: "#002324",
    company: "Urban Cleanup Ltd",
    status: "half",
    location: "Hyde Park, London",
    time: [
      { name: "morning", value: 35 },
      { name: "evening", value: 40 },
      { name: "night", value: 25 },
    ],
  },
  {
    id: "6",
    binImg: binImg,
    serial: "#002325",
    company: "RecyclePro",
    status: "empty",
    location: "Soho, London",
    time: [
      { name: "morning", value: 50 },
      { name: "evening", value: 30 },
      { name: "night", value: 20 },
    ],
  },
  {
    id: "7",
    binImg: binImg,
    serial: "#002326",
    company: "SmartBin Corp",
    status: "full",
    location: "Camden Town, London",
    time: [
      { name: "morning", value: 30 },
      { name: "evening", value: 50 },
      { name: "night", value: 20 },
    ],
  },
  {
    id: "8",
    binImg: binImg,
    serial: "#002327",
    company: "BinTrack Systems",
    status: "half",
    location: "Greenwich, London",
    time: [
      { name: "morning", value: 45 },
      { name: "evening", value: 35 },
      { name: "night", value: 20 },
    ],
  },
  {
    id: "9",
    binImg: binImg,
    serial: "#002328",
    company: "EcoWaste Management",
    status: "empty",
    location: "Kensington, London",
    time: [
      { name: "morning", value: 25 },
      { name: "evening", value: 50 },
      { name: "night", value: 25 },
    ],
  },
  {
    id: "10",
    binImg: binImg,
    serial: "#002329",
    company: "GreenCycle Solutions",
    status: "full",
    location: "Chelsea, London",
    time: [
      { name: "morning", value: 40 },
      { name: "evening", value: 40 },
      { name: "night", value: 20 },
    ],
  },
];

export { vehiclesPieChartData, binData, binListData, binCardData };
