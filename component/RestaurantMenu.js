
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { addItem } from "../utils/CartSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";
import ShimmerMenu from "./ShimmerMenu";
import { FcRating } from "react-icons/fc";
import { CDN_URL } from "../utils/constants";
import { MdLocationPin } from "react-icons/md";
import { FaBowlFood } from "react-icons/fa6";
const RestaurantMenu = () => {
  //   const [resMenu, setResMenu] = useState(null);

  //   useEffect(() => {
  //     fetchMenu();
  //   }, []);

  const dummy = "Dummy Data";

  const { resID } = useParams();
  console.log(resID);

  const resMenu = useRestaurantMenu(resID);



  console.log("new data " + resMenu)
  const [showIndex, setShowIndex] = useState(null);

  //   const fetchMenu = async () => {
  //     const data = await fetch(RES_MENU + resId);
  //     const json = await data.json();
  //     console.log(json);
  //     setResMenu(json.data);
  //   };

  if (resMenu === null) return <ShimmerMenu />;

  const { name, cuisines, costForTwoMessage, slugs, cloudinaryImageId, avgRating } =
    resMenu?.cards[0]?.card?.card?.info;

  console.log(
    resMenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
  );

  const { itemCards } =
    resMenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
  {
    // console.log(menuCards);
  }
  const categories =
    resMenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.["card"]?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  //console.log(categories);

  return (
    <div className="text-center mb-10">
      <div className="w-6/12 mx-auto my-4 bg-gray-50  p-4">
        <div
          className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between"
        >
          <div className="w-9/12 space-y-3">
            <h1 className=" text-3xl font-bold ">{name}</h1>
            <p className="text-lg font-light flex space-x-2"><FaBowlFood className="my-auto " /><span className="capitalize">{cuisines.join(", ")}</span></p>
            <p className="text-lg font-semibold flex space-x-2"><MdLocationPin className="my-auto " /><span className="capitalize">{slugs.city}</span></p>
            <h2 className="text-lg font-semibold">{costForTwoMessage}</h2>
            <div className="flex space-x-2 w-[5rem]  bg-gray-200 px-2 rounded-md"><FcRating className="w-[1rem] h-[2rem]" /><span className="my-auto font-bold">{avgRating}</span></div>
          </div>
          <div className="w-3/12 p-4">

            <img src={CDN_URL + cloudinaryImageId} className="w-full h-[8rem]  object-cover" />

          </div>
        </div>
      </div>

      {/* categories accordions */}
      {categories.map((category, index) => (
        // controlled component
        <RestaurantCategory
          key={category?.card?.card.title}
          data={category?.card?.card}
          showItems={index === showIndex && true}
          hideItems={() => setShowIndex(null)}
          setShowIndex={() => setShowIndex(index)}
          dummy={dummy}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
