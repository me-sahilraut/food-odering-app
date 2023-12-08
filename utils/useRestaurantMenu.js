import { RES_MENU } from "./constants";
import { useEffect, useState } from "react";
const useRestaurantMenu = (resID) => {
  const [resMenu, setResMenu] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RES_MENU + resID);
    const json = await data.json();
    setResMenu(json.data);

  };


  return resMenu;



};

export default useRestaurantMenu;
