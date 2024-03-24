import "./Home.css";
import SearchBar from "../../components/SearchBar/SearchBar";
import Navbar from "../../components/Navbar/Navbar";
import ImageCarouselPromotion from "../../components/ImageContainer/ImageCarousel";
import FoodSelection from "../../components/FoodTypeselection/FoodSelection";
import ItemCardList from "../../components/ItemCardList/ItemCardList";

const Home = () => {
  const foodList = [
    {
      label: "Pizza",
      image: "src\\assets\\pizza 1.png",
    },
    {
      label: "Burger",
      image: "src\\assets\\sandwich.png",
    },
    {
      label: "Fries",
      image: "src\\assets\\french_fried.png",
    },
    {
      label: "Pack",
      image: "src\\assets\\pack.png",
    },
  ];

  const itemCardList = [
    {
      image: "src\\assets\\pngegg.png",
      title: "Pizza with Pepperoni",
      deliveryTime: ["30", "50"],
      price: 89,
    },
    {
      image: "src\\assets\\pngegg.png",
      title: "Pizza with Cheese",
      deliveryTime: ["60", "70"],
      price: 57,
    },
  ];

  return (
    <div className="App">
      <Navbar />
      <div className="page-body">
        <header className="App-header">
          <div className="textContainer">
            <p className="username">Hello John</p>
            <p className="welcome">Welcome Back</p>
          </div>
          <SearchBar />
        </header>
        <div className="carousel-container">
          <ImageCarouselPromotion
            title="Make Your First Order and Get "
            image="src\assets\pizza.png"
          />
          <div>
            <FoodSelection foodList={foodList} />
            <ItemCardList cardList={itemCardList} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
