import { useSelector, useDispatch } from "react-redux";
import ItemList, { modifiedItemList } from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const ItemListModified = modifiedItemList(ItemList);
  console.log(ItemListModified)

  return (
    <div className="text-center m-4 p-4">
      <h1 className="text-2xl font-bold">Cart</h1>
      <div className="w-6/12 mx-auto">
        <button
          className="p-2 m-2 bg-slate-500 text-white rounded-lg"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
        {cartItems.length === 0 && (
          <h1>Your cart is empty please add items to your cart</h1>
        )}
        <ItemListModified items={cartItems}/>
      </div>
    </div>
  );
};

export default Cart;
