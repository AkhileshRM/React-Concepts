import { useState, useEffect } from "react";
import { Menu_API } from "../utils/constants";
import Shimmer from "../components/Shimmer";

const useRestaurantMenu = (hotelId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(Menu_API + hotelId.resId);
    console.log(response)
    if(response.status === 202){
 
     return <Shimmer/>
     
    }
    const data = await response.json();
    setResInfo(data);
  };
  return resInfo;
};

export default useRestaurantMenu;
