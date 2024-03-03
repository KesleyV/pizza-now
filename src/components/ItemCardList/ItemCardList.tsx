// ItemCardList.tsx
import React from "react";
import ItemCard from "./ItemCard/ItemCard";

interface ItemCardListProps {
  cardList: { image?: string; title: string; price: number; deliveryTime: [] }[];
}

const ItemCardList: React.FC<ItemCardListProps> = ({ cardList }) => {
  return (
    <div className="food-list-container">
      {cardList.map((item, index) => (
        <ItemCard
          key={index}
          image={item.image}
          title={item.title}
          deliveryTime={item.deliveryTime}
          price={item.price}
        />
      ))}
    </div>
  );
};

export default ItemCardList;
