import React from "react";
import CheckoutItemCard from "./CheckoutItemCard.tsx/CheckoutItemCard";

interface CartProps {
  items: {
    title?: string;
    description?: string;
    price?: number;
    image?: string;
    quantity?: number;
  }[];
}

const Cart: React.FC<CartProps> = ({ items }) => {
  return (
    <>
      {items.map((item, index) => (
        <CheckoutItemCard
          key={index}
          title={item.title}
          description={item.description}
          price={item.price}
          image={item.image}
          quantity={item.quantity}
        />
      ))}
    </>
  );
};

export default Cart;
