import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { removeItem } from "../utils/CartSlice";
const FoodItems = ({ name, imageId, description }) => {
  const dispatch = useDispatch();

  const handleRemoveCart = () => {
    dispatch(removeItem());
  };
  return (
    <div className="w-64 p-1 m-5 bg-slate-200 shadow-lg h-auto ">
      <img className="food-image" src={CDN_URL + imageId} />
      <h4 className="text-lg font-bold"> {name}</h4>
      <h4>{description}</h4>
      <button className="bg-red-500 p-2 m-2" onClick={() => handleRemoveCart()}>
        Remove Item
      </button>
    </div>
  );
};

export default FoodItems;
