import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [showIndex, setShowIndex] = useState(0);

  // Custom Hook...
  const resInfo = useRestaurantMenu(resId);
  // console.log(resInfo);

  const {
    name,
    avgRating,
    costForTwoMessage,
    totalRatingsString,
    cuisines,
    areaName,
  } = resInfo?.data?.cards[2]?.card?.card?.info || {};

  const { slaString } = resInfo?.data?.cards[2]?.card?.card?.info?.sla || {};

  const categories =
    resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (category) => {
        return (
          category?.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        );
      }
    );

  // console.log(categories);

  return resInfo === null ? (
    <Shimmer />
  ) : (
    <div className="w-[1000px] flex flex-col mx-auto">
      <div className="mt-4">
        <h1 className="text-[24px] leading-[28px] font-bold ml-4 mt-4">
          {name}
        </h1>
        <div className="rounded-t-none rounded-b-[36px] px-4 pb-4 mt-4">
          <div className="shadow-custom-box rounded-[20px] py-[21px] px-[18px] flex flex-col gap-2 outline outline-1 outline-[#cecdcd]">
            <h2 className="text-[16px] leading-[19px] font-bold">
              ⭐ {avgRating}({totalRatingsString}) - {costForTwoMessage}
            </h2>
            {cuisines && cuisines.length > 0 ? (
              <p className="text-[14px] leading-[17px] text-[#ff5200] font-bold">
                {cuisines?.join(", ")}
              </p>
            ) : (
              <p>No cuisines available</p>
            )}
            <div className="flex flex-col gap-[10px] pl-3">
              <p>
                <span className="text-[14px] leading-[18px] font-bold">
                  Outlet
                </span>{" "}
                . {areaName}
              </p>
              <p className="text-[14px] leading-[18px] font-bold">
                {slaString}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <div className="h-[72px] flex justify-center items-center">
          <p className="text-[13px] leading-4 text-[#02060c] text-opacity-[60%] text-center">
            ↫ MENU ↬
          </p>
        </div>
        <div>
          {Array.isArray(categories) && categories.length > 0 ? (
            categories.map((category, index) => (
              <RestaurantCategory
                key={category?.card?.card?.title}
                data={category?.card?.card}
                showItems={index === showIndex}
                setShowIndex={() =>
                  setShowIndex((prevIndex) =>
                    prevIndex === index ? null : index
                  )
                }
              />
            ))
          ) : (
            <p>No items available</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
