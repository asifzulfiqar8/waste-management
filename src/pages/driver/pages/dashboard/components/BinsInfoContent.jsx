/* eslint-disable react/prop-types */
import {
    LgBinIcon,
    LgDriverIcon,
    LgTruckIcon,
} from "../../../../../assets/svgs/icon";
//   } from "../../../../assets/svgs/icon";
import HalfRadialChart from "../../../../../components/charts/HalfRadialChart";

export const BinsInfoContent = () => {
    return (
        <div className="gap-3 inline-flex bg-white px-4 rounded-md">
            <HalfRadialChart text="Active" value={80} fillColor="#00C853" />
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
        <div className="gap-3 inline-flex bg-white px-4 rounded-md">
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

export const PetrolInfoContent = () => {
    return (
        <div className="gap-3 inline-flex bg-white px-4 rounded-md">
            <section className="text-base font-semibold text-[#060606CC]">
                Fuel Remaining
            </section>
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
