import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";

import ListItem from "./ListItem";

import {
  requestItemList,
  receiveItemList,
  receiveItemListError,
} from "../../actions";

const LandingPage = () => {
  const dispatch = useDispatch();
  const { status, itemList, error } = useSelector((state) => state.items);

  React.useEffect(() => {
    dispatch(requestItemList());

    fetch("/items/company/casio")
      .then((res) => res.json())
      .then((itemList) => dispatch(receiveItemList(itemList)));
  }, []);

  if (status === "loading") {
    return "loading...";
  }
  if (status === "error") {
    return "error";
  }

  return (
    <Wrapper>
      {itemList.map((item) => {
        return <ListItem key={item._id} item={item} />;
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  column-gap: 30px;
  row-gap: 30px;
  margin: 0 auto;
`;

export default LandingPage;
