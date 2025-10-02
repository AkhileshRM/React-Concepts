import {useContext} from "react"
import UserContext from "../utils/UserContext";

const RestaurantCard = ({
  resName,
  resType,
  ratings,
  deliveryTime,
  imageURL,
  cost,
}) => {
  
 const {loggedInUser} = useContext(UserContext)
  return (
 <div className="m-3 p-3 w-[300px] restaurant-card rounded-lg mx-auto hover:scale-105 bg-gray-200 hover:bg-gray-400">
      <img className="res-logo min-h-64 rounded-lg max-h-64 mx-auto w-full" src={imageURL} alt="Restaurant Card" />
      <h1 className="resName font-bold font-serif py-4 text-lg text-center">{resName}</h1>
      <h2 className="cost m-[10px] text-center font-semibold">{cost}</h2>
      <h3 className="resType m-[10px] text-center font-semibold">{resType.length > 40 ? resType.slice(0, 20) + "..." : resType}</h3>
      <h3 className="resRatings m-[10px] text-center font-semibold">{ratings}</h3>
      <h3 className="deliveryTime m-[10px] text-center font-semibold">{deliveryTime}</h3>
      <h4 className="deliveryTime m-[10px] text-center font-bold">User: {loggedInUser}</h4>
    </div>
  );
};

// Higher Order Component
//As per the API we dont have promoted label so just assume that isOpen values as promoted and
// print promoted label

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute text-white bg-black m-2 p-2 rounded-lg">Promoted</label>
        <RestaurantCard {...props}/>
      </div>
    );
  };
};

export default RestaurantCard;
