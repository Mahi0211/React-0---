import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  const { title, itemCards } = data;

  const handleClick = () => {
    // setShowItems(!showItems);
    setShowIndex();
  };

  return (
    <div>
      <div className="">
        <div className="w-full h-[16px] bg-[#F2F2F2]"></div>
        <div
          className="flex justify-between py-[24px] px-4 cursor-pointer bg-white"
          onClick={handleClick}
        >
          <span className="text-[20px] leading-[22px] font-bold">
            {title} ({itemCards.length})
          </span>
          {showItems ? <span>▲</span> : <span>▼</span>}
        </div>
        <div
          className={`overflow-hidden transition-all ease-in-out duration-200 ${
            showItems ? "max-h-full opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          {showItems && Array.isArray(itemCards) && itemCards.length > 0
            ? itemCards.map((item, index) => (
                <ItemList
                  key={item?.card?.info?.id}
                  data={item?.card?.info}
                  isLast={index === itemCards.length - 1}
                />
              ))
            : ""}
        </div>
      </div>
    </div>
  );
};

export default RestaurantCategory;
