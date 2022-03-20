import { Button } from "@mui/material";
import { useContext, useState } from "react";
import RestaurantCard from "../common/RestaurantCard";
import Language from "../../LanguageContext";

function Restaurant(props) {
  const [restaurants, setRestaurants] = useState([
    "Arora",
    "Woodland",
    "KFC",
    "MCD",
  ]);
  const name = "Chetan";
  const language = useContext(Language);
  console.log(language);
  return (
    <div>
      <h1>Hello {name}</h1>
      {restaurants.map((restaurant) => (
        <RestaurantCard restaurantData={restaurant} />
      ))}
    </div>
  );
}

export default Restaurant;
