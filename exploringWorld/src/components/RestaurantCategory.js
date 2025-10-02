import React, { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setActiveIndex }) => {

// Normal Accordion approach

  // const [showItems, setShowItems] = useState(false);
  // const handleClick = () => {
  //   setShowItems((prev) => !prev);
  // };

  //Lifting the showItems state up to parent RestaurantMenu and controlled component approach

  const handleClick= () => {
    setActiveIndex()
  }

  return (
    <div>
      <div className="w-[50%] bg-gray-100 shadow-lg mx-auto my-4 p-4">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-lg">
            {data?.title} ({data?.itemCards?.length})
          </span>
          <span>⬇️</span>
        </div>

        {showItems && <ItemList items={data?.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
