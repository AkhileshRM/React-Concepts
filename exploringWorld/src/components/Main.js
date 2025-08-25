import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { useState, useEffect } from "react";
import { CDN_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Main = () => {
  const [resList, setResList] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [search, setSearch] = useState("");

  console.log("Search Value Updating");

  useEffect(() => {
    setTimeout(() => {
      getData();
    }, 1000);
  }, []);

  const getData = async () => {
    try {
      const response = await fetch(
        "https://swiggy-api-4c740.web.app/swiggy-api.json"
      );
      const data = await response.json();
      let restaurants =
        data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants?.map(
          (i) => i.info
        );
      setResList(restaurants);
      setFilteredData(restaurants);
    } catch (error) {
      console.log("Error occurred", error);
    }
  };

  // console.log("Success")

  // const handleSearch = (event) => {
  //   let searchValue = event.target.value;

  //   if (searchValue === "") {
  //     setFilteredData(resList);
  //     return;
  //   }

  //   let filteredSearchList = filteredData?.filter((item) =>
  //     item?.name.toLowerCase().includes(searchValue.toLowerCase())
  //   );

  //   setFilteredData(filteredSearchList);
  // };

  const handleSearch = (event) => {
    setSearch(event.target.value);
    const listedRestaurants = resList?.filter((item) =>
      item?.name.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredData(listedRestaurants);
  };

  return (
    <>
      {filteredData.length === 0 ? (
        <Shimmer />
      ) : (
        <div className="body">
          <div className="filter">
            <button
              className="filter-btn"
              onClick={() => {
                setFilteredData(
                  resList?.filter((item) => item.avgRating > 4.2)
                );
              }}
            >
              Top Rated Restaurants
            </button>
            <div className="search">
              <input
                type="text"
                placeholder="Search for Food"
                // onChange={handleSearch}
                onChange={handleSearch}
                value={search}
              />
              <button
                onClick={() => {
                  const listedRestaurants = resList?.filter((item) =>
                    item?.name.toLowerCase().includes(search.toLowerCase())
                  );
                  setFilteredData(listedRestaurants);
                }}
              >
                Search
              </button>
            </div>
          </div>
          <div className="restaurant-container">
            {filteredData?.map((item) => (
              <Link key={item.id} to={"/restaurant/" + item.id} style={{textDecoration: "none", color:"inherit"}}>
                <RestaurantCard
                  resName={item?.name}
                  resType={item?.cuisines.join(",")}
                  ratings={`${item?.avgRating} stars`}
                  deliveryTime={`${item?.sla?.deliveryTime} minutes`}
                  imageURL={CDN_URL + item.cloudinaryImageId}
                  cost={item.costForTwo}
                />
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Main;
