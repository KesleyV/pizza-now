import Navbar from "../../components/Navbar/Navbar";
import Cart from "../../components/Cart/Cart";

const Chat = () => {
  const teste = [
    {
      title: "Pizza with Cheese",
      description: "8 inch",
      price: 100.0,
      image: "src\\assets\\toppng 1.png",
      quantity: 2,
    },
  ];
  return (
    <>
      <Navbar />
      <div>
        <Cart items={teste} />
      </div>
    </>
  );
};

export default Chat;
