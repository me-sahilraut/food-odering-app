import Shimmer from "./Shimmer";
import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import Restaurant from "./Restaurant";


const Body = ({ user }) => {
  const [listOfRestaurants, setlistOfRestaurants] = useState([]);
  const [filterRestaurant, setfilterRestaurant] = useState([]);
  const [searchText, setsearchText] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  // const apiData =
  //   "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING";
  // const filterData = apiData.json();
  // console.log(filterData);

  const fetchData = async () => {
    const data = await fetch(
      "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );

    const jsonData = await data.json();

    // console.log(
    //   jsonData?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle
    //     ?.restaurants
    // );
    setlistOfRestaurants(
      jsonData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setfilterRestaurant(
      jsonData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );

    console.log(
      jsonData?.data
    );
  };

  // console.log(listOfRestaurants);

  const onlineStatus = useOnlineStatus();
  // console.log(listOfRestaurants.length);
  if (onlineStatus === false)
    return <h1>"You Lost your Internet Connection,Plzz Check it"</h1>;
  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body mx-[8.5rem]">
      <div className="filter flex ">
        <div className="search m-8 p-4">
          <div className="ml-[4.75rem]">
            <input
              data-testid="search-input"
              className="w-48 rounded-l-full rounded-r  border border-gray-400  p-2 bg-pink-100 "
              type={searchText}
              onChange={(e) => {
                setsearchText(e.target.value);
              }}
            />
            <button
              className="rounded-l rounded-r-full  border border-gray-400  p-2 hover:bg-gray-100 "
              data-testid="search-btn"
              onClick={() => {
                const filterRestaurant = listOfRestaurants.filter((res) =>
                  res.info.name.toLowerCase().includes(searchText.toLowerCase())
                );
                setfilterRestaurant(filterRestaurant);
              }}
            >
              Search
            </button>
          </div>
          {/* 
          <button
            className="btn"
            onClick={() => {
              const filterList = listOfRestaurants.filter(
                (res) => res.data.avgRating > 4
              );
              setlistOfRestaurants(filterList);
            }}
          >
            Top Rating Restaurant
          </button>

          <button
            className="btn"
            onClick={() => {
              const filterList = listOfRestaurants.filter(
                (res) => res.data.avgRating < 4
              );
              setlistOfRestaurants(filterList);
            }}
          >
            Low Rating Restaurant
          </button> */}

          <div
            className="flex flex-wrap gap-4 justify-center  "
            data-testid="res-list"
          >
            {/* {console.log(filterRestaurant[0].info.id + " hello ")} */}
            {filterRestaurant.map((restaurant) => (
              <Link
                key={restaurant?.info.id}
                to={"/restaurant/" + restaurant?.info.id}
              >
                <Restaurant resData={restaurant} user={user} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
