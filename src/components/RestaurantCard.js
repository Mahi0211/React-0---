import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { setSelectedRestaurant } from "../redux/restaurantSlice";

const RestaurantCard = (props) => {
  const { resData } = props;
  console.log(resData);

  // Destructure only if resData and resData.info are defined
  const { name, cloudinaryImageId, cuisines, areaName, avgRating, sla } =
    resData?.info || {};

  const dispatch = useDispatch();

  const handleCardClick = () => {
    dispatch(setSelectedRestaurant({ name, cloudinaryImageId, areaName }));
  };

  return (
    <div
      className="my-5 w-[273px] h-[283px] flex flex-col justify-between rounded-[10px] transform transition-transform duration-300 hover:scale-95 hover:shadow-lg"
      daa-testid="resCard"
      onClick={handleCardClick}
    >
      <div className="relative w-[273px] h-[170px]">
        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent rounded-[10px] h-[81px]"></div>
        <img
          src={CDN_URL + cloudinaryImageId}
          alt="res-logo"
          className="w-full h-full object-cover rounded-[10px]"
        />
      </div>
      <div className="ml-[12px]">
        <h3 className="text-[18px] leading-6 font-bold truncate w-full">
          {name}
        </h3>
        <h4 className="font-medium">
          <span className="text-[#116649] text-xl">★ </span>
          {avgRating} . {sla?.slaString}
        </h4>
        <h4 className="text-[#02060c] opacity-[60%] truncate w-full">
          {cuisines?.join(", ")}
        </h4>
        <h4 className="text-[#02060c] opacity-[60%]">{areaName}</h4>
      </div>
    </div>
  );
};

export const withDiscount = (RestaurantCard) => {
  return (props) => {
    const { resData } = props;
    const discountInfo = resData?.info?.aggregatedDiscountInfoV3;
    return (
      <div className="relative">
        <RestaurantCard {...props} />
        <div className="absolute top-[140px] left-[12px] flex items-center justify-center text-white text-[22px] leading-[22px] font-black">
          {discountInfo.header} {discountInfo.subHeader || ""}
        </div>
      </div>
    );
  };
};

export default RestaurantCard;
