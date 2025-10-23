import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { useState, useEffect, useContext } from "react";
import { CDN_URL } from "../utils/constants";
import { Link } from "react-router-dom";

import useOnlineStatus from "../hooks/useOnlineStatus";

import UserContext from "../utils/UserContext";
import ThemeContext from "../utils/ThemeContext";

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
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0059026&lng=77.5468264"
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

  const status = useOnlineStatus();

  if (status === false)
    return <h1>Looks like you are Offline! Please check your connection</h1>;

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  //Context API

  const { loggedInUser, setUserName } = useContext(UserContext);

  const { theme, setDarkMode } = useContext(ThemeContext);

  const darkModeStyles = "bg-slate-400"

  return (
    <>
      {filteredData.length === 0 ? (
        <Shimmer />
      ) : (
        <div className={theme ? darkModeStyles : "body"}>
          <div className="filter flex justify-between">
            <div className="search m-4 p-4 flex items-center">
              <button
                className="filter-btn px-4 py-2 bg-gray-100 rounded-lg"
                onClick={() => {
                  setFilteredData(
                    resList?.filter((item) => item.avgRating > 4.5)
                  );
                }}
              >
                Top Rated Restaurants
              </button>
            </div>
            <div className="search m-4 p-4 flex items-center">
              <label className="mr-2">User Name:</label>
              <input
                type="text"
                className="border-black border-2"
                onChange={(event) => setUserName(event.target.value)}
                value={loggedInUser}
              />
            </div>

            <div className="search m-4 p-4 flex items-center">
              <button
                className="px-4 py-2 bg-green-100 m-4 rounded-lg"
                onClick={() => setDarkMode(!theme)}
              >
                {theme ? "Dark Mode" : "White Mode"}
              </button>
            </div>

            <div className="search m-4 p-4">
              <input
                className="border-2 border-black"
                type="text"
                data-testid="searchInput"
                placeholder="Search for Food"
                // onChange={handleSearch}
                onChange={handleSearch}
                value={search}
              />
              <button
                className="search-btn px-4 py-2 bg-green-100 m-4 rounded-lg"
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
          <div className="restaurant-container flex flex-wrap justify-evenly">
            {filteredData?.map((item) => (
              <Link
                key={item.id}
                to={"/restaurant/" + item.id}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                {item?.isOpen ? (
                  <RestaurantCardPromoted
                    resName={item?.name}
                    resType={item?.cuisines.join(", ")}
                    ratings={`${item?.avgRating} stars`}
                    deliveryTime={`${item?.sla?.deliveryTime} minutes`}
                    imageURL={CDN_URL + item.cloudinaryImageId}
                    cost={item.costForTwo}
                  />
                ) : (
                  <RestaurantCard
                    resName={item?.name}
                    resType={item?.cuisines.join(", ")}
                    ratings={`${item?.avgRating} stars`}
                    deliveryTime={`${item?.sla?.deliveryTime} minutes`}
                    imageURL={CDN_URL + item.cloudinaryImageId}
                    cost={item.costForTwo}
                  />
                )}
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Main;
