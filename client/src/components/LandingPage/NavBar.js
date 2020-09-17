import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";

import { changeCategoryFilter } from "../../actions";
import SearchBar from "./SearchBar";

const NavBar = () => {
  const dispatch = useDispatch();
  const { currentCategory } = useSelector((state) => state.items);

  return (
    <Wrapper>
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
      <SearchBar />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-items: start;
  margin: 0;
  margin-top: -30px;
`;

const CategoryButton = styled.button`
  margin-right: 25px;
  font-weight: bold;
  font-size: 16px;
  background-color: white;
  color: black;
  border: none;
  outline: none;
  cursor: pointer;

  &:disabled {
    border-bottom: 1px blue solid;

    text-decoration: none;
    color: blue;
  }
`;

export default NavBar;
