import { useParams } from "react-router-dom";
import { CDN_URL } from "../utils/constants";
import useRestaurantMenu from "../hooks/useRestaurantMenu"

import Shimmer from "../components/Shimmer";

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

  return resInfo === null ? (
    <Shimmer />
  ) : (
    <div className="menu">
      <h1>{name}</h1>
      <p>
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      <h2>Menu</h2>
      <ul>
        {itemCards?.map((item) => (
          <li key={item?.card?.info?.id} className="recommendations">
            {item?.card?.info?.name} - {"Rs " + item?.card?.info?.price / 100}{" "}
            <img src={CDN_URL + item?.card?.info?.imageId} alt="Foods" className="recommended-image" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
