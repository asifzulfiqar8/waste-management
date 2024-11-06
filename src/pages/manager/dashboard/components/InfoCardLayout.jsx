/* eslint-disable react/prop-types */

const InfoCardLayout = ({ content, url }) => {
  return (
    <div
      className="bg-white rounded-lg shadow-lg p-2 border-[1px] relative "
      style={{
        backgroundImage: `url(${url})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right",
      }}
    >
      <h3 className="text-base font-[500]">Total Bins</h3>
      <h3 className="text-xl font-bold">233</h3>
      <div className="mt-10">{content}</div>
    </div>
  );
};

export default InfoCardLayout;
