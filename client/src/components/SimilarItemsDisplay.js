import React from "react";
import ListItem from "./LandingPage/ListItem";
import styled from "styled-components";

const SimilarItemsDisplay = ({ similarItems }) => {
  let itemsChosen = [];

  for (let i = 0; i < 3 && i <= similarItems.length; i++) {
    let select = similarItems[Math.floor(Math.random() * similarItems.length)];

    if (!itemsChosen.includes(select)) {
      itemsChosen.push(select);
    }
  }

  return (
    <Wrapper>
      <Title>Suggested items</Title>
      {itemsChosen ? (
        <Bottom>
          <Display>
            {itemsChosen.map((item) => {
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
  width: 70%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(190px, 1fr));
  column-gap: 30px;
`;

export default SimilarItemsDisplay;
