import { useState } from "react";

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
        <div>{restaurant}</div>
      ))}
    </div>
  );
}

export default Restaurant;
