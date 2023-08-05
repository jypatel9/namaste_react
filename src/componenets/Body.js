//not using key (not acceptable) <<<<<<< index as key <<<<<<<<<<< unique id (best practice)

import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import resList from "../../Utils/MockData";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(resList);

// const arr = useState(resList);

// method -- 1
// const [listOfRestaurants, setListOfRestaurants] = arr;


 // method -- 2
// const listOfRestaurants = arr[0]
// const setListOfRestaurants = arr[1]

// both are same either use this or use above one because of above one is very efficient that's why we better practice on this



  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"

          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.data.avgRating > 4.2
            );
            setListOfRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
