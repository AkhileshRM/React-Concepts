import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import {useState} from "react"

const Main = () => {

  const [filteredData, setFilteredData] = useState(resList)

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
           setFilteredData(filteredData.filter(item =>(
            item.ratings.slice(0,3) > 4.6
           )))
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="restaurant-container">
        {filteredData?.map((item) => (
          <RestaurantCard
            key={item.resName}
            resName={item.resName}
            resType={item.resType}
            ratings={item.ratings}
            deliveryTime={item.deliveryTime}
            imageURL={item.imageURL}
          />
        ))}
      </div>
    </div>
  );
};

export default Main;
