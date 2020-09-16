import React from "react";
import ListItem from "./LandingPage/ListItem";
import styled from "styled-components";

const SimilarItemsDisplay = ({ similarItems }) => {
  let itemsChosen = [];
  let i = 0;
  while (i < 3) {
    let select = similarItems[Math.floor(Math.random() * similarItems.length)];
    if (!itemsChosen.includes(select)) {
      itemsChosen.push(select);
      i += 1;
    }
  }

  return (
    <>
      {itemsChosen ? (
        <Bottom>
          <Title>Similar Cheaper Items</Title>
          <Display>
            {itemsChosen.map((item) => {
              return <ListItem key={item._id} item={item} />;
            })}
          </Display>
        </Bottom>
      ) : (
        <>Loading</>
      )}
    </>
  );
};
const Bottom = styled.div`
  display: flex;
  flex-direction: column;
`;
const Title = styled.p`
  text-align: center;
  font-size: 1.5em;
  text-decoration-line: underline;
  text-decoration-style: solid;
`;

const Display = styled.div`
  margin: 0 auto;
  width: 70%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(190px, 1fr));
  column-gap: 30px;
`;

export default SimilarItemsDisplay;
