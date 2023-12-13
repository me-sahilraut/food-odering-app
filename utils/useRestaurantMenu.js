import { RES_MENU } from "./constants";
import { useEffect, useState } from "react";
const useRestaurantMenu = (resID) => {
  const [resMenu, setResMenu] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);

  console.log(RES_MENU + resID)
  const fetchData = async () => {
    const data = await fetch(RES_MENU + resID);
    const jsonData = await data.json();
    setResMenu(jsonData.data);

  };


  return resMenu;



};

export default useRestaurantMenu;
