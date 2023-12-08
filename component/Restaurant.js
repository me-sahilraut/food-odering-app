import { useContext } from "react";
import UserContext from "../utils/UserContext";
import { CDN_URL } from "../utils/constants";



const Restaurant = (props) => {
    const { resData } = props;
    const { user } = useContext(UserContext);

    const {
        name,
        cuisines,
        avgRating,
        costForTwo,
        deliveryTime,
        cloudinaryImageId,
    } = resData?.info;
    return (
        <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200">
            <img className="food-image" src={CDN_URL + cloudinaryImageId} />
            <h4 className="text-lg font-bold"> {name}</h4>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating}</h4>
            <h4>{costForTwo / 100}For Two</h4>
            <h4>{deliveryTime}minutes</h4>
            <h4>
                {user.name} - {user.email}
            </h4>
        </div>
    );
};


export default Restaurant;