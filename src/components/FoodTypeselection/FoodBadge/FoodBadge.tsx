import React from "react";
import "./FoodBadge.css";

interface FoodBadgeProps {
  onClick?: () => void;
  image?: string;
  label: string;
}

const FoodBadge: React.FC<FoodBadgeProps> = ({ onClick, image, label }) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
      <button className="button-badge" onClick={handleClick}>
        <div className="food-badge-image-container">
          <img
            className="image-controller"
            src={image}
          />
        </div>
        <text className="label-button-badge">{label}</text>
      </button>
  );
};

export default FoodBadge;
