import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";

import ItemGrid from "./ItemGrid";
import FilterSelector from "./FilterSelector";

import {
  requestItemList,
  receiveItemList,
  receiveItemListError,
} from "../../actions";

const LandingPage = () => {
  const dispatch = useDispatch();
  const { status, error } = useSelector((state) => state.items);

  React.useEffect(() => {
    dispatch(requestItemList());

    fetch("/items/")
      .then((res) => res.json())
      .then((itemList) => dispatch(receiveItemList(itemList)));
  }, []);

  if (status === "loading") {
    return "loading...";
  }
  if (status === "error") {
    return { error };
  }

  return (
    <Wrapper>
      <FilterSelector />
      <ItemGrid />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 0;
  padding: 20px 20px;
`;

export default LandingPage;
