import { CDN_URL } from "../utils/constants";

const ItemList = ({ items }) => {
  console.log(items);
  return (
    <div>
      {items?.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-b-2 border-gray-200 text-left"
        >
          <div className="flex gap-28">
            <div className="py-2 w-9/12">
              <span> {item?.card?.info?.name}</span>
              <span>
                {" "}
                ₹{" "}
                {item?.card?.info?.price
                  ? item?.card?.info?.price / 100
                  : item?.card?.info?.defaultPrice / 100}
              </span>
              <p className="text-xs">{item?.card?.info?.description}</p>
            </div>
      <div className="w-5/12 relative">          
              <button className="px-4 py-1 bg-white shadow-lg absolute rounded-lg mx-8 font-sans text-green-500 font-bold uppercase">Add</button>
                  <img className="rounded-lg"
                src={CDN_URL + item?.card?.info?.imageId}
                alt="recommended-foods"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
