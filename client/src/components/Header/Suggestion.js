import React from "react";
import styled from "styled-components";

const Suggestion = ({ product, input, isSelected, onClick, onMouseEnter }) => {
  let cutIndex = product.name.toLowerCase().search(input.toLowerCase());

  const firstPart = product.name.slice(0, cutIndex);
  const searchTerm = product.name.slice(cutIndex, cutIndex + input.length);
  const lastPart = product.name.slice(cutIndex + input.length);

  return (
    <Wrapper
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      style={{ background: isSelected ? "lightyellow" : "white" }}
    >
      <span>
        {firstPart}
        <SearchTerm>{searchTerm}</SearchTerm>
        {lastPart}
      </span>
    </Wrapper>
  );
};

const Wrapper = styled.li`
  margin: 0px;
  padding: 5px;
  font-size: 14px;
  background-color: white;
`;

const SearchTerm = styled.span`
  font-weight: bold;
`;

export default Suggestion;
