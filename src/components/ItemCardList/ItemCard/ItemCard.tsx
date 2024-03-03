import { FiPlus } from "react-icons/fi";
import "./ItemCard.css";

interface ItemCardProps {
  title?: string;
  deliveryTime?: [];
  price?: number;
  image?: string;
}

const ItemCard: React.FC<ItemCardProps> = ({
  title = "Pizza with Cheese",
  deliveryTime = ["16", "25"],
  price = 100.0,
  image,
}) => {
  return (
    <div className="item-card-container">
      <img src={image} className="item-card-image" />
      <div className="item-card-infos-container">
        <text className="title-item-card-text">{title}</text>
        <text className="dilivery-time-item-card-text">
          {deliveryTime.join("-")} minutes
        </text>
        <text className="price-item-card-text">${price.toFixed(2)}</text>
      </div>
      <div className="item-card-button">
        <button
          className="plus-button"
          onClick={() => {
            console.log("sexoooo");
          }}
        >
          <FiPlus className="plus-icon" />
        </button>
      </div>
    </div>
  );
};

export default ItemCard;
