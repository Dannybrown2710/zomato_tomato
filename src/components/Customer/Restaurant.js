import { Button } from "@mui/material";
import { useState } from "react";
import RestaurantCard from "../common/RestaurantCard"

function Restaurant(props) {
  const [restaurants, setRestaurants] = useState([
    "Arora",
    "Woodland",
    "KFC",
    "MCD",
  ]);
  return (
    <div>
      {restaurants.map((restaurant) => (
        <RestaurantCard restaurantData = {restaurant}/>
      ))}
    </div>
  );
}

export default Restaurant;
