import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const res = await fetch(
      MENU_API + resId + "&catalog_qa=undefined&submitAction=ENTER"
    );
    const json = await res.json();
    setResInfo(json);
  };

  console.log(resInfo);

  const {
    name,
    avgRating,
    costForTwoMessage,
    totalRatingsString,
    cuisines,
    areaName,
  } = resInfo?.data?.cards[2]?.card?.card?.info || {};

  const { slaString } = resInfo?.data?.cards[2]?.card?.card?.info?.sla || {};
  const cardData2 =
    resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card;
  const cardData1 =
    resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card;

  const { title, itemCards } =
    cardData2 &&
    typeof cardData2 === "object" &&
    cardData2.itemCards &&
    cardData2.itemCards.length > 0
      ? cardData2
      : cardData1 || {};

  console.log("cardData1:", cardData1);
  console.log(
    "Is array and has items:",
    Array.isArray(cardData1) && cardData1.length > 0
  ); //this is not an array - it's object, that's why the problem came

  return resInfo === null ? (
    <Shimmer />
  ) : (
    <div>
      <h1>{name}</h1>
      <div>
        <h2>
          {avgRating}({totalRatingsString}) - {costForTwoMessage}
        </h2>
        {cuisines && cuisines.length > 0 ? (
          cuisines.map((cuisine) => <p key={cuisine}>{cuisine}</p>)
        ) : (
          <p>No cuisines available</p>
        )}
        <ul>
          <li>Outlet . {areaName}</li>
          <li>{slaString}</li>
        </ul>
      </div>
      <div>
        <p>MENU</p>
        <h2>{title}</h2>
        {Array.isArray(itemCards) && itemCards.length > 0 ? (
          itemCards.map((item) => (
            <ul key={item?.card?.info.id}>
              <li>
                <h2>{item?.card?.info.name}</h2>
              </li>
              <p>
                Price:{" "}
                {(item?.card?.info.defaultPrice ?? item?.card?.info.price) /
                  100}
              </p>
              <p>{item?.card?.info.description}</p>
            </ul>
          ))
        ) : (
          <p>No items available</p>
        )}
      </div>
    </div>
  );
};

export default RestaurantMenu;
