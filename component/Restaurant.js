import { useContext } from "react";
import UserContext from "../utils/UserContext";
import { CDN_URL } from "../utils/constants";
import { FcRating } from "react-icons/fc";


const Restaurant = (props) => {
    const { resData } = props;
    const { user } = useContext(UserContext);

    const {
        name,
        cuisines,
        avgRating,
        costForTwo,
        sla,
        cloudinaryImageId,
    } = resData?.info;
    return (
        <div className="m-3 p-4 w-[350px] rounded-2xl bg-gray-100 hover:bg-gray-200 shadow-xl h-[26rem] space-y-1 zoom">
            <img className="w-full object-cover h-[200px]" src={CDN_URL + cloudinaryImageId} />
            <h4 className="text-lg font-bold uppercase"> {name}</h4>
            <h4 className="text-ellipsis font-light whitespace-nowrap overflow-hidden">{cuisines.join(", ")}</h4>
            <h4 className="flex space-x-2 "><FcRating className="w-[1rem] h-[2rem]" /><span className="my-auto font-bold">{avgRating}</span></h4>
            <h4>{costForTwo}</h4>
            <h4 >{sla.deliveryTime} minutes</h4>

        </div>
    );
};


export default Restaurant;