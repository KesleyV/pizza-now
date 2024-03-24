import "./CheckoutItemCard.css";
import CounterButton from "../../CounterButton/CounterButton";

interface CheckoutItemCardProps {
  title?: string;
  description?: string;
  price?: number;
  image?: string;
  quantity?: number;
}

const CheckoutItemCard: React.FC<CheckoutItemCardProps> = ({
  title = "Pizza with Cheese",
  description = "8 inch",
  price = 100.0,
  image,
  quantity = 0,
}) => {
  return (
    <div className="checkout-item-card-container">
      <div className="checkout-image-card-container">
        <img src={image} className="checkout-item-card-image" />
      </div>
      <div className="checkout-item-card-infos-container">
        <text className="checkout-title-item-card-text">{title}</text>
        <text className="checkout-description-item-card-text">
          {description}
        </text>
        <text className="checkout-price-item-card-text">
          ${price.toFixed(2)}
        </text>
      </div>
      <div className="checkout-item-card-button">
        <CounterButton value={quantity} />
      </div>
    </div>
  );
};

export default CheckoutItemCard;
