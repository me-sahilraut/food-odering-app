import { useDispatch, useSelector } from "react-redux";
import FoodItems from "./FoodItems";
import { clearItem } from "../utils/CartSlice";

const Cart = () => {
  const getCartItems = useSelector((Store) => Store.Cart.items);
  //   console.log({ ...getCartItems[0]?.card?.info });
  //   const CartItems = { ...getCartItems };
  //   console.log(CartItems);
  const dispatch = useDispatch();

  const handelClearCart = () => {
    dispatch(clearItem());
  };

  return (
    <div>
      {/* <h1 className="font-bold text-lg p-5">Cart {getCartItems.length}</h1>
      <button
        className="bg-green-200 border border-black p-2 m-2"
        onClick={() => handelClearCart()}
      >
        clearItem
      </button> */}
      <div className="flex flex-wrap gap-4 justify-center m-auto">
        {getCartItems.map((item) => (
          <FoodItems key={item?.card?.info?.id} {...item?.card?.info} />
        ))}
      </div>
    </div>
  );
};

export default Cart;
