import RestaurantCard, { withDiscount } from "./RestaurantCard";
import { useState, useEffect } from "react";
// import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useRestaurantList from "../utils/useRestaurantList";
import useOnlineStatus from "../utils/useOnlineStatus";

console.log("body component is loaded");

export const Body = () => {
  const listOfRestaurant = useRestaurantList() || [];
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  // console.log(listOfRestaurant);

  // console.log("Body component is rendering");
  // console.log("Filtered Restaurants:", filteredRestaurant);

  const DisplayDiscount = withDiscount(RestaurantCard);

  // Update filtered list when the list of restaurants changes
  useEffect(() => {
    setFilteredRestaurant(listOfRestaurant);
  }, [listOfRestaurant]);

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    return <h1>You are offline. Please check your internet connection.</h1>;
  }

  // conditional rendering
  // return listOfRestaurant.length === 0 ? (
  //   <Shimmer />
  // ) :
  return (
    <div className="body">
      <div className="flex items-center gap-4 px-[150px] my-12 rounded-lg">
        <input
          type="text"
          data-testid="searchInput"
          className="flex-grow px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Search for restaurants and food"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="flex items-center justify-center p-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
          onClick={() => {
            console.log(searchText);
            const filteredRes = listOfRestaurant.filter((res) =>
              res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilteredRestaurant(filteredRes);
            // console.log(filteredRestaurant);
          }}
        >
          search
        </button>
        <button
          className="px-4 py-2 text-white bg-green-500 rounded-lg hover:bg-green-600 focus:ring-2 focus:ring-green-400 focus:ring-offset-2"
          onClick={() => {
            const filteredList = listOfRestaurant.filter(
              (res) => res.info.avgRating > 4.2
            );
            setFilteredRestaurant(filteredList);
          }}
        >
          Top Restaurants
        </button>
      </div>
      <div className="mx-[150px]">
        <h1 className="text-[24px] leading-7 font-semibold pt-4 pl-4">
          Top restaurant chains in Chennai
        </h1>
        <div className="flex flex-wrap items-center justify-around">
          {filteredRestaurant.map((restaurant) => (
            <Link
              key={restaurant?.info?.id}
              to={"/restaurants/" + restaurant?.info?.id}
            >
              {restaurant?.info?.aggregatedDiscountInfoV3 ? (
                <DisplayDiscount resData={restaurant} />
              ) : (
                <RestaurantCard resData={restaurant} />
              )}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Body;
