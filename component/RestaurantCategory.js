import { useState } from "react";
import ItemList from "./ItemList";
import { RiArrowDropDownLine } from "react-icons/ri";

const RestaurantCategory = ({ data, showItems, setShowIndex, hideItems, dummy }) => {


  const handleClick = () => {
    showItems ? hideItems() : setShowIndex();
  };

  return (
    <div>
      {/* Header */}
      <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-lg">
            {data.title} ({data.itemCards.length})
          </span>
          <span><RiArrowDropDownLine className="w-[2rem] h-[3rem]" /></span>
        </div>

        {showItems && <ItemList items={data.itemCards} dummy={dummy} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
