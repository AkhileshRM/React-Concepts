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

export default RestaurantCard