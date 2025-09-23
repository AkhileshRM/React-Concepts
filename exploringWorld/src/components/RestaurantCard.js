const RestaurantCard = ({
  resName,
  resType,
  ratings,
  deliveryTime,
  imageURL,
  cost,
}) => {
  return (
    <div className="restaurant-card">
      <img className="res-logo" src={imageURL} alt="Restaurant Card" />
      <h1 className="resName">{resName}</h1>
      <h2 className="cost">{cost}</h2>
      <h3 className="resType">
        {resType.length > 40 ? resType.slice(0, 20) + "..." : resType}
      </h3>
      <h3 className="resRatings">{ratings}</h3>
      <h3 className="deliveryTime">{deliveryTime}</h3>
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
