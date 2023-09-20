import { useEffect, useState } from "react";
import { MENU_API } from "./Constants";

const useRestaurantMenu = (resId) => {
  //fetch data

  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(MENU_API + resId + "&submitAction=ENTER");

    const json = await data.json();

    setResInfo(json.data);
  };

  console.log(resInfo);

  return resInfo;
};

export default useRestaurantMenu;
