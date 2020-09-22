import React from "react";
import styled from "styled-components";

const Suggestion = ({ product, input, isSelected, onClick, onMouseEnter }) => {
  let cutIndex =
    product.name.toLowerCase().search(input.toLowerCase()) + input.length;

  const firstHalf = product.name.slice(0, cutIndex);
  const secondHalf = product.name.slice(cutIndex);

  return (
    <Wrapper
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      style={{ background: isSelected ? "lightyellow" : "transparent" }}
    >
      <span>
        {firstHalf}
        <Prediction>{secondHalf}</Prediction>
      </span>
    </Wrapper>
  );
};

const Wrapper = styled.li`
  padding: 5px;
  font-size: 14px;
`;

const Prediction = styled.span`
  font-weight: bold;
`;

export default Suggestion;
