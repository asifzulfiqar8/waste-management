const CardOnDetail = ({ data }) => {
  return (
    <div className="flex flex-wrap gap-5 md:gap-8">
      <img
        src={data?.binImg}
        alt="bin image"
        className="w-full max-w-[450px]"
      />
      <div className="flex flex-col justify-center">
        <List list={{ title: "Bin Id", value: data?.serial }} />
        <List
          cn="mt-4 md:mt-5"
          list={{ title: "Status", value: data?.status }}
        />
        <List
          cn="mt-4 md:mt-5"
          list={{ title: "Last Emptied Date", value: "00:00 PM" }}
        />
        <List
          cn="mt-4 md:mt-5"
          list={{ title: "Last Emptied By", value: "Driver Name" }}
        />
        <List
          cn="mt-4 md:mt-5"
          list={{ title: "Location", value: data?.location }}
        />
      </div>
    </div>
  );
};

export default CardOnDetail;

const List = ({ list, cn }) => {
  return (
    <div className={cn}>
      <h6 className="text-sm md:text-base font-bold text-[#4E4E4E]">
        {list.title}:
      </h6>
      <p
        className={`text-sm md:text-base font-medium capitalize ${getColor(
          list?.value
        )}`}
      >
        {list.value}
      </p>
    </div>
  );
};

const getColor = (type) => {
  switch (type) {
    case "full":
      return "text-[#BA2222] font-semibold";
    case "half":
      return "text-[#F49324] font-semibold";
    case "empty":
      return "text-[#7FD2CF] font-semibold";
    default:
      return "#69776D";
  }
};
