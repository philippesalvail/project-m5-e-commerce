import React from "react";
import ListItem from "../LandingPage/ListItem";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

const SimilarItemsDisplay = ({ similarItems }) => {
  const location = useLocation();
  const [itemsChosen, setItemsChosen] = React.useState([]);

  //console.log("setSimilarItems: ", similarItems);
  React.useEffect(() => {
    let tempArray = [];
    for (let i = 0; i < 3 && i < similarItems.length; i++) {
      let select =
        similarItems[Math.floor(Math.random() * similarItems.length)];

      console.log(tempArray, select);
      if (!tempArray.includes(select)) {
        tempArray.push(select);
      }
      //console.log(itemsChosen);
    }
    setItemsChosen(tempArray);
  }, [location.pathname]);

  return (
    <Wrapper>
      <Title>Suggested items</Title>
      {itemsChosen ? (
        <Bottom>
          <Display>
            {itemsChosen.map((item) => {
              //console.log("item: ", item);
              return <ListItem key={`suggested-${item._id}`} item={item} />;
            })}
          </Display>
        </Bottom>
      ) : (
        <>Loading</>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: gainsboro;
  padding-bottom: 0;
  width: 100vw;
`;

const Bottom = styled.div`
  display: flex;
  flex-direction: column;
`;
const Title = styled.p`
  text-align: center;
  font-size: 1.5em;
  font-weight: 600;
  margin: 25px;
`;

const Display = styled.div`
  margin: 0 auto;
  width: 80%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(190px, 1fr));
  column-gap: 30px;
`;

export default SimilarItemsDisplay;
