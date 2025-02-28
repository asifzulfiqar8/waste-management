import { useParams } from "react-router-dom";
import { binCardData } from "./utils/bin";
import CardOnDetail from "./components/CardOnDetail";

const BinDetail = () => {
  const { id } = useParams();
  const card = binCardData.find((card) => card.id === id);
  console.log("card", card);
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-5">
      <div className="lg:col-span-8">
        <CardOnDetail />
      </div>
    </div>
  );
};

export default BinDetail;
