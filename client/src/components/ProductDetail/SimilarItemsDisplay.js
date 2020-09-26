import React from "react";
import ListItem from "../LandingPage/ListItem";
import styled from "styled-components";

const SimilarItemsDisplay = ({ similarItems }) => {
  const [itemsChosen, setItemsChosen] = React.useState([]);

  //console.log("setSimilarItems: ", similarItems);
  React.useEffect(() => {
    for (let i = 0; i < 3 && i < similarItems.length; i++) {
      let select =
        similarItems[Math.floor(Math.random() * similarItems.length)];

      if (!itemsChosen.includes(select)) {
        setItemsChosen((itemsChosen) => [...itemsChosen, select]);
      }
      console.log(itemsChosen);
    }
  }, []);

  return (
    <Wrapper>
      <Title>Suggested items</Title>
      {itemsChosen ? (
        <Bottom>
          <Display>
            {itemsChosen.map((item) => {
              console.log("item: ", item);
              return <ListItem key={item._id} item={item} />;
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
