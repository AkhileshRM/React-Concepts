import { CDN_URL } from "../utils/constants";

import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../utils/cartSlice";

const ItemList = ({ items, children }) => {
  const dispatch = useDispatch();
  const handleAdd = (item) => {
    dispatch(addItem(item));
  };

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
              <button
                className="px-4 py-1 bg-white shadow-lg absolute rounded-lg mx-8 font-sans text-green-500 font-bold uppercase"
                onClick={() => handleAdd(item)}
              >
                Add
              </button>
              <img
                className="rounded-lg"
                src={CDN_URL + item?.card?.info?.imageId}
                alt="recommended-foods"
              />
              {children}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export const modifiedItemList = (ItemList) => {
  return (props) => {
    const dispatch = useDispatch();
    const handleDelete = () => {
      dispatch(removeItem());
    };
    return (
      <div>
        <ItemList {...props}>
          <button
            onClick={handleDelete}
            className="px-4 py-1 bg-white shadow-lg rounded-lg mx-8 font-sans text-green-500 font-bold uppercase"
          >
            Remove
          </button>
        </ItemList>
      </div>
    );
  };
};
export default ItemList;
