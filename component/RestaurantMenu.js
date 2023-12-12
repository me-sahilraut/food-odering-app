import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { addItem } from "../utils/CartSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";

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

  if (resMenu === null) return console.log("i am shimmer ui");

  const { name, cuisines, costForTwoMessage } =
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
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
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
