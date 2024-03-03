import React from "react";
import FoodBadge from "./FoodBadge/FoodBadge";
import "./FoodSelection.css";

interface FoodSelectionProps {
  foodList: { image?: string; label: string }[];
}

const FoodSelection: React.FC<FoodSelectionProps> = ({ foodList }) => {
  return (
    <div className="food-list-container">
      <h1 className="food-selection-title">Our Menu</h1>
      {foodList.map((food, index) => (
        <FoodBadge
          key={index}
          image={food.image}
          label={food.label}
        />
      ))}
      <button className="food-selection-plus">See all</button>
    </div>
  );
};

export default FoodSelection;