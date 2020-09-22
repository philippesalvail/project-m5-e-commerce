import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";

import ItemGrid from "./ItemGrid";
import LoadingSpinner from "../LoadingSpinner";
import Error from "../Error";

import {
  requestItemList,
  receiveItemList,
  receiveItemListError,
} from "../../actions";

const LandingPage = () => {
  const dispatch = useDispatch();
  const { status, error, currentCategory, searchInput } = useSelector(
    (state) => state.items
  );

  // console.log(currentCategory);

  React.useEffect(() => {
    const fetchUrl =
      currentCategory === "search"
        ? `search/${searchInput}`
        : `/items/filter/${currentCategory}/`;

    dispatch(requestItemList());
    fetch(fetchUrl)
      .then((res) => res.json())
      .then((itemList) => {
        if (!itemList.Error) {
          dispatch(receiveItemList(itemList));
        } else {
          dispatch(receiveItemListError(error));
        }
      })
      .catch((error) => dispatch(receiveItemListError(error)));
    /* eslint-disable-next-line react-hooks/exhaustive-deps */
  }, [currentCategory, searchInput]);

  if (status === "error") {
    return (
      <Wrapper>
        <Error> {`Sorry! No matches found for query "${searchInput}"`}</Error>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      {status === "loading" ? <LoadingSpinner /> : <ItemGrid />}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 0;
  padding: 0;
`;

export default LandingPage;
