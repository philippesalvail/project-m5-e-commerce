import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";

import ItemGrid from "./ItemGrid";
import NavBar from "./NavBar";
import LoadingSpinner from "../LoadingSpinner";

import {
  requestItemList,
  receiveItemList,
  receiveItemListError,
} from "../../actions";

const LandingPage = () => {
  const dispatch = useDispatch();
  const { status, error, currentCategory } = useSelector(
    (state) => state.items
  );

  React.useEffect(() => {
    dispatch(requestItemList());

    fetch(`/items/filter/${currentCategory}/`)
      .then((res) => res.json())
      .then((itemList) => dispatch(receiveItemList(itemList)));
  }, [currentCategory]);

  if (status === "error") {
    return { error };
  }

  return (
    <Wrapper>
      <NavBar />
      {status === "loading" ? <LoadingSpinner size={"50px"} /> : <ItemGrid />}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 0;
  padding: 20px 20px;
`;

export default LandingPage;
