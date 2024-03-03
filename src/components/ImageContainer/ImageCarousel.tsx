import "./ImageCarousel.css";

interface ImageCarouselProps {
  title?: string;
  promotionPercentage?: string;
  label?: string;
  image?: string;
}

const ImageCarouselPromotion: React.FC<ImageCarouselProps> = ({
  label = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
  title = "",
  image,
  promotionPercentage = "50% OFF",
}) => {
  return (
    <div className="carousel-image-container">
      <img src={image} alt="" className="carousel-image" />
        <text className="title-text">{title}</text>
        <text className="title-promotion">{promotionPercentage}</text>
        <text className="paragraph-text">{label}</text>
        <button className="carousel-button" onClick={ () => console.log("clicou")}>Order Now</button>
    </div>
  );
};

export default ImageCarouselPromotion;
