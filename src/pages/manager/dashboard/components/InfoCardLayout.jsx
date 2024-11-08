/* eslint-disable react/prop-types */

const InfoCardLayout = ({ content, url }) => {
  return (
    <div
      className="bg-white rounded-lg shadow-lg p-2 md:p-4 border-[1px] relative flex flex-col justify-between "
      style={{
        backgroundImage: `url(${url})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right",
      }}
    >
      <div>
        <h3 className="text-base font-[500]">Total Bins</h3>
        <h3 className="text-3xl font-bold">233</h3>
      </div>
      <div>{content}</div>
    </div>
  );
};

export default InfoCardLayout;
