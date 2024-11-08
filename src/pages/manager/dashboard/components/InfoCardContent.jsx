/* eslint-disable react/prop-types */
import {
  LgBinIcon,
  LgDriverIcon,
  LgTruckIcon,
} from "../../../../assets/svgs/icon";
import HalfRadialChart from "../../../../components/charts/HalfRadialChart";

export const BinsInfoContent = () => {
  return (
    <div className="flex gap-3">
      <HalfRadialChart text="Active" value={50} fillColor="#00C853" />
      <IconTypo
        quantity={12}
        type="Empty"
        color="text-[#03E080]"
        icon={<LgBinIcon />}
      />
      <IconTypo
        quantity={12}
        type="half"
        color="text-[#F49324]"
        icon={<LgBinIcon />}
      />
      <IconTypo
        quantity={12}
        type="full"
        color="text-[#BA2222]"
        icon={<LgBinIcon />}
      />
    </div>
  );
};

export const TrucksInfoContent = () => {
  return (
    <div className="flex gap-4">
      <HalfRadialChart text="Active" value={50} fillColor="#00C853" />
      <IconTypo
        quantity={12}
        type="Empty"
        color="text-[#03E080]"
        icon={<LgTruckIcon />}
      />

      <IconTypo
        quantity={12}
        type="full"
        color="text-[#BA2222]"
        icon={<LgTruckIcon />}
      />
    </div>
  );
};

export const DriversInfoContent = () => {
  return (
    <div className="flex gap-4">
      <HalfRadialChart text="Active" value={50} fillColor="#00C853" />
      <HalfRadialChart text="Offline" value={2} fillColor="#BA2222" />
      <IconTypo
        quantity={5}
        type="leaves"
        color="text-[#BA2222]"
        icon={<LgDriverIcon />}
      />
    </div>
  );
};

const IconTypo = ({ color, icon, quantity, type }) => {
  return (
    <div className="flex gap-1 items-center">
      <div className="flex flex-col items-center">
        <h3 className={`text-base font-[700] ${color}`}>{quantity}</h3>
        <h5 className="text-[9px] text-[#06060699] capitalize -mt-1">{type}</h5>
      </div>
      {icon}
    </div>
  );
};
