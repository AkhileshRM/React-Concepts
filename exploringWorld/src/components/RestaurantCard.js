const RestaurantCard = ({
  resName,
  resType,
  ratings,
  deliveryTime,
  imageURL,
  cost
}) => {
  return (
    <div className="m-3 p-3 w-[300px] restaurant-card rounded-lg mx-auto hover:scale-105 bg-gray-200 hover:bg-gray-400">
      <img className="res-logo min-h-64 rounded-lg max-h-64 mx-auto w-full" src={imageURL} alt="Restaurant Card" />
      <h1 className="resName font-bold font-serif py-4 text-lg text-center">{resName}</h1>
      <h2 className="cost m-[10px] text-center font-semibold">{cost}</h2>
      <h3 className="resType m-[10px] text-center font-semibold">{resType.length > 40 ? resType.slice(0, 20) + "..." : resType}</h3>
      <h3 className="resRatings m-[10px] text-center font-semibold">{ratings}</h3>
      <h3 className="deliveryTime m-[10px] text-center font-semibold">{deliveryTime}</h3>
    </div>
  );
};

export default RestaurantCard