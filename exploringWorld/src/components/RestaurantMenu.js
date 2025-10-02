import React, {useState} from "react"

import { useParams } from "react-router-dom";
import { CDN_URL } from "../utils/constants";
import useRestaurantMenu from "../hooks/useRestaurantMenu"

import Shimmer from "../components/Shimmer";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  // const [resInfo, setResInfo] = useState(null);

const hotelId = useParams();

const resInfo = useRestaurantMenu(hotelId)

  // useEffect(() => {
  //   getData();
  // }, []);

  // const getData = async () => {
  //   const response = await fetch(Menu_API + hotelId.resId);
  //   const data = await response.json();
  //   console.log(data);
  //   setResInfo(data);
  // };

  const { name, cuisines, costForTwoMessage } =
    resInfo?.data?.cards[2]?.card?.card?.info || {};
  const { itemCards } =
    resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card || {};


const categories = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter((c) => (
  c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
))
       
//Lifting state up Accordion

const [activeIndex, setActiveIndex] = useState(null)

  return resInfo === null ? (
    <Shimmer />
  ) : (
    <div className="menu text-center">
      <h1 className="font-bold m-5 text-2xl">{name}</h1>
      <p className="font-bold m-3 text-lg">
        {cuisines?.join(", ")} - {costForTwoMessage}
      </p>
      {/* <ul>
        {itemCards?.map((item) => (
          <li key={item?.card?.info?.id} className="recommendations flex justify-between items-center m-5 font-semibold text-[20px]">
            {item?.card?.info?.name} - {"Rs " + item?.card?.info?.price / 100}{" "}
            <img src={CDN_URL + item?.card?.info?.imageId} alt="Foods" className="recommended-image w-[20%]" />
          </li>
        ))}
      </ul> */}

      {categories.map((category, index) => 
      <RestaurantCategory key={category?.card?.card?.title} 
      data={category?.card?.card}
      showItems={index === activeIndex ? true : false}
      setActiveIndex = {() => setActiveIndex(activeIndex === index ? null : index)}/>)}
    </div>
  );
};

export default RestaurantMenu;
