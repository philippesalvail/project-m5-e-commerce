import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";

import { COLORS } from "../../constants";

import { changeCategoryFilter } from "../../actions";
import SearchBar from "./SearchBar";

const NavBar = () => {
  const dispatch = useDispatch();
  const { currentCategory } = useSelector((state) => state.items);

  const location = useLocation();
  //console.log(location.pathname);

  return (
    <Wrapper>
      <div style={{ display: "flex" }}>
        <CategoryButton
          to={"/"}
          className={currentCategory === "fitness" && "disabled-link"}
          onClick={() => {
            dispatch(changeCategoryFilter("fitness"));
          }}
        >
          Fitness
        </CategoryButton>
        <CategoryButton
          to={"/"}
          className={currentCategory === "medical" && "disabled-link"}
          onClick={() => {
            dispatch(changeCategoryFilter("medical"));
          }}
        >
          Medical
        </CategoryButton>
        <CategoryButton
          to={"/"}
          className={currentCategory === "lifestyle" && "disabled-link"}
          onClick={() => {
            dispatch(changeCategoryFilter("lifestyle"));
          }}
        >
          Lifestyle
        </CategoryButton>
        <CategoryButton
          to={"/"}
          className={currentCategory === "entertainment" && "disabled-link"}
          onClick={() => {
            dispatch(changeCategoryFilter("entertainment"));
          }}
        >
          Entertainment
        </CategoryButton>
        <CategoryButton
          to={"/"}
          className={currentCategory === "industrial" && "disabled-link"}
          onClick={() => {
            dispatch(changeCategoryFilter("industrial"));
          }}
        >
          Industrial
        </CategoryButton>
        <CategoryButton
          to={"/"}
          className={currentCategory === "pets and animals" && "disabled-link"}
          onClick={() => {
            dispatch(changeCategoryFilter("pets and animals"));
          }}
        >
          Pets and Animals
        </CategoryButton>
      </div>
      <div>{location.pathname === "/" && <SearchBar />}</div>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0;
  padding: 0 20px;
  background: ${COLORS.light};
  height: 44px;
`;

const CategoryButton = styled(Link)`
  margin-right: 25px;
  font-weight: bold;
  font-size: 16px;
  color: white;
  border: none;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    color: ${COLORS.yellow};
  }

  &.disabled-link {
    color: ${COLORS.yellow};
    pointer-events: none;
  }
`;

export default NavBar;
