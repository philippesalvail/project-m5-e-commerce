import React from "react";
import ListItem from "./LandingPage/ListItem";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}
function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

const CheaperItemsDisplay = ({ itemId, handleClick }) => {
  const [items, setItems] = React.useState(null);
  let config = {};
  if (items) {
    const config = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: items.length > 2 ? 3 : items.length,
      slidesToScroll: 3,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
    };
  }

  React.useEffect(() => {
    fetch(`/item/${itemId}`)
      .then((res) => res.json())
      .then((selectedItems) => setItems(selectedItems.cheaperItems))
      .catch((error) => console.log("error: ", error));
  }, [itemId]);

  return items ? (
    <Bottom>
      <CarouselTitle>Similar Cheaper Items</CarouselTitle>
      <Display>
        <Slider {...config}>
          {items.map((item) => {
            return <SliderItem key={item._id} item={item} />;
          })}
        </Slider>
      </Display>
    </Bottom>
  ) : (
    <></>
  );
};
const Bottom = styled.div`
  display: flex;
  flex-direction: column;
`;
const CarouselTitle = styled.p`
  text-align: center;
  font-size: 1.5em;
  text-decoration-line: underline;
  text-decoration-style: solid;
`;
const SliderItem = styled(ListItem)`
  width: 30%;
`;

const Display = styled.div`
  margin: 0 auto;
  width: 70%;
  text-align: center;
`;

export default CheaperItemsDisplay;
