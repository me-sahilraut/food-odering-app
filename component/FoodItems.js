import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { removeItem } from "../utils/CartSlice";
const FoodItems = ({ name, imageId, description }) => {
  const dispatch = useDispatch();

  const handleRemoveCart = () => {
    dispatch(removeItem());
  };
  return (
    <div className=" p-4 w-[338px] rounded-lg bg-gray-100 hover:bg-gray-200 shadow-xl h-[23rem] space-y-2">
      <img className="w-full object-cover h-[200px]" src={CDN_URL + imageId} />
      <h4 className="text-lg font-bold uppercase"> {name}</h4>
      <h4 className="text-ellipsis font-light whitespace-nowrap overflow-hidden"> {description}</h4>
      <button className="bg-[#f44336] p-2  rounded-md text-white font-bold " onClick={() => handleRemoveCart()}>
        Remove Item
      </button>
    </div>
  );
};

export default FoodItems;
