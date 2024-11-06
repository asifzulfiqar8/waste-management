import GlobalTable from "../../../../components/shared/large/GlobalTable";
import { wasteData, wasteDataColumns } from "../utils/WasteDetail";

const WasteDetailTable = () => {
  return (
    <div className="bg-white rounded-lg border-[1px] shadow-lg h-full p-3">
      <GlobalTable
        columns={wasteDataColumns}
        data={wasteData}
        heading="Waste Detail"
      />
    </div>
  );
};

export default WasteDetailTable;
