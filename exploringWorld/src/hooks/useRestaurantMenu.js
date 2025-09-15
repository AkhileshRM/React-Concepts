import { useState, useEffect } from "react";
import { Menu_API } from "../utils/constants";

const useRestaurantMenu = (hotelId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(Menu_API + hotelId.resId);
    const data = await response.json();
    setResInfo(data);
  };
  return resInfo;
};

export default useRestaurantMenu;
