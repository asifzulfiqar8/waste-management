/* eslint-disable react/prop-types */
const Input = ({startIcon, label, icon, type="text", ...rest}) => {
  return (
    <article className="w-full">
      {label && (
        <p className="text-sm  text-[#9794AA] font-[500] mb-[8px] ml-5 capitalize ">
          {label}{" "}
        </p>
      )}
      <div
        className={`flex gap-2  justify-between items-center py-2 px-3 rounded-xl border-[1.5px] border-[#CBCAD7] text-[#686677] h-[50px]`}
      >
        <div className="flex items-center">
          {startIcon && <span>{startIcon}</span>}
          <input
            className=" ml-2 border-none outline-none flex-1"
            type={type}
            {...rest}
          />
        </div>
        {icon && <span className="cursor-pointer">{icon}</span>}
      </div>
    </article>
  );
}

export default Input