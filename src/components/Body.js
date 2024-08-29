import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState, useEffect } from "react";

export const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState(resList);

  useEffect(() => {
    console.log("useEffect called")
  }, []);

  return (
    <div className="body">
      <h1>Top Restaurants</h1>
      <div className="button">
        <button
          className="res-btn"
          onClick={() => {
            const filteredList = listOfRestaurant.filter(
              (res) => res.info.avgRating > 4
            );
            setListOfRestaurant(filteredList);
          }}
        >
          Top Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurant.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
