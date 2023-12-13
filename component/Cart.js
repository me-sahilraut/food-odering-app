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

  return getCartItems.length === 0 ? (
    <div>
      <div className="   m-auto w-[55%]  my-5 shadow-xl px-8 py-10  bg-[#f9f9f9] rounded-xl space-y-10">
        <div className="flex justify-between ">
          <h1 className="font-bold text-lg p-5">CART-ITEMS({getCartItems.length})</h1>
          <button
            className="bg-[#f44336] text-white font-semibold text-lg rounded-xl my-3 px-[2rem] "
            onClick={() => handelClearCart()}
          >
            Clear Item
          </button>
        </div>
        <div className="flex justify-center">

          <h1 className="text-3xl font-bold">No Items Added!</h1>
        </div>
      </div>
    </div>
  ) : (
    < div >

      <div className="   m-auto w-[55%]  my-5 shadow-xl px-8 py-10  bg-[#f9f9f9] rounded-xl space-y-10">
        <div className="flex justify-between ">
          <h1 className="font-bold text-lg p-5">CART {getCartItems.length}</h1>
          <button
            className="bg-[#f44336] text-white font-semibold text-lg rounded-xl my-3 px-[2rem] "
            onClick={() => handelClearCart()}
          >
            Clear Item
          </button>
        </div>
        <div className="flex flex-wrap gap-4 justify-center">


          {getCartItems.map((item) => (
            <FoodItems key={item?.card?.info?.id} {...item?.card?.info} />
          ))}
        </div>
      </div>
    </div >
  );
};

export default Cart;
