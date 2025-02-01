import { useEffect, useState } from "react";
import { SWIGGY_API } from "../utils/constants";

const useRestaurantList = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);

  console.log("useRestaurantList hook is running");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await fetch(SWIGGY_API);
      const data = await res.json();
      setListOfRestaurant(
        data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    } catch (error) {
      console.error("Failed to fetch restaurant data:", error);
    }
  };

  return listOfRestaurant;
};

export default useRestaurantList;
