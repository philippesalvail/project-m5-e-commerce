import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { COLORS } from "../../constants";

import { changeCategoryFilter } from "../../actions";
import SearchBar from "./SearchBar";

const NavBar = () => {
  const dispatch = useDispatch();
  const { currentCategory } = useSelector((state) => state.items);

  return (
    <Wrapper>
      <div style={{ display: "flex" }}>
        <CategoryButton
          onClick={() => {
            dispatch(changeCategoryFilter("fitness"));
          }}
          disabled={currentCategory === "fitness"}
        >
          Fitness
        </CategoryButton>
        <CategoryButton
          onClick={() => {
            dispatch(changeCategoryFilter("medical"));
          }}
          disabled={currentCategory === "medical"}
        >
          Medical
        </CategoryButton>
        <CategoryButton
          onClick={() => {
            dispatch(changeCategoryFilter("lifestyle"));
          }}
          disabled={currentCategory === "lifestyle"}
        >
          Lifestyle
        </CategoryButton>
        <CategoryButton
          onClick={() => {
            dispatch(changeCategoryFilter("entertainment"));
          }}
          disabled={currentCategory === "entertainment"}
        >
          Entertainment
        </CategoryButton>
        <CategoryButton
          onClick={() => {
            dispatch(changeCategoryFilter("industrial"));
          }}
          disabled={currentCategory === "industrial"}
        >
          Industrial
        </CategoryButton>
        <CategoryButton
          onClick={() => {
            dispatch(changeCategoryFilter("pets and animals"));
          }}
          disabled={currentCategory === "pets and animals"}
        >
          Pets and Animals
        </CategoryButton>
      </div>
      <div>
        <SearchBar />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0;
  padding: 0 20px;
  background: ${COLORS.light};
  height: 40px;
`;

const CategoryButton = styled.div`
  margin-right: 25px;
  font-weight: bold;
  font-size: 16px;
  color: white;
  border: none;
  outline: none;
  cursor: pointer;

  &:hover {
    color: ${COLORS.yellow};
  }

  &:active {
    color: ${COLORS.yellow};
  }
`;

export default NavBar;
