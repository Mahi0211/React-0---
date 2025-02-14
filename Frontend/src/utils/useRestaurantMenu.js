import { useEffect, useState } from "react";
import { MENU_API } from "../utils/constants";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    if (resId) {
      fetchData();
    } else {
      console.error("resId is undefined");
    }
  }, [resId]);

  const fetchData = async () => {
    const res = await fetch(MENU_API + resId);

    const data = await res.json();
    setResInfo(data);
  };
  return resInfo;
};

export default useRestaurantMenu;
