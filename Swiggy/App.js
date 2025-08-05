import React from "react";
import { createRoot } from "react-dom/client";

const resList = [
  {
    resName: "Meghana Foods",
    resType: "North Indian",
    ratings: "4.4 stars",
    deliveryTime: "38 minutes",
    imageURL:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Burger.png",
  },
  {
    resName: "KFC",
    resType: "Chinese",
    ratings: "4.5 stars",
    deliveryTime: "15 minutes",
    imageURL:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Pizza.png",
  },
  {
    resName: "McDonald's",
    resType: "American",
    ratings: "4.8 stars",
    deliveryTime: "20 minutes",
    imageURL:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Ice%20Cream.png",
  },
  {
    resName: "Dose",
    resType: "south Indian",
    ratings: "5 stars",
    deliveryTime: "40 minutes",
    imageURL:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/South%20Indian.png",
  },
];

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://www.logodesign.net/logo/smoking-burger-with-leuttuce-3624ld.png"
          alt="Logo"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = ({
  resName,
  resType,
  ratings,
  deliveryTime,
  imageURL,
}) => {
  return (
    <div className="restaurant-card">
      <img className="res-logo" src={imageURL} alt="Restaurant Card" />
      <h3>{resName}</h3>
      <h4>{resType}</h4>
      <h4>{ratings}</h4>
      <h4>{deliveryTime}</h4>
    </div>
  );
};

const Main = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="restaurant-container">
        {resList?.map((item) => (
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

const App = () => {
  return (
    <div className="app">
      <Header />
      <Main />
    </div>
  );
};
const root = createRoot(document.getElementById("root"));
root.render(<App />);
