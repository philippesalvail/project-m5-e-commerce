import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { GrSearch } from "react-icons/gr";
import { IconContext } from "react-icons";
import { useHistory } from "react-router-dom";
// import { COLORS } from "../../constants";

import Suggestion from "./Suggestion";
import UnstyledButton from "../UnstyledButton";

import { changeCategoryFilter } from "../../actions";

const SearchBar = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [input, setInput] = React.useState("");
  const [isSuggestionsOpen, setIsSuggestionsOpen] = React.useState(false);
  const [alreadyCalled, setAlreadyCalled] = React.useState(false);
  const [searchedList, setSearchedList] = React.useState([]);
  const [matchedProducts, setMatchedProducts] = React.useState([]);
  const [selectedSuggestionIndex, setSelectedSuggestionIndex] = React.useState(
    -1
  );

  React.useEffect(() => {
    if (input.length <= 2) {
      setAlreadyCalled(false);
      setSearchedList([]);
      setMatchedProducts([]);
      setIsSuggestionsOpen(false);
    }
    if (alreadyCalled) {
      setMatchedProducts(
        searchedList.filter((suggestion) =>
          suggestion.name.toLowerCase().includes(input.toLowerCase())
        )
      );
    }
    if (input.length >= 3 && !alreadyCalled) {
      fetch(`/search/${input}`)
        .then((res) => res.json())
        .then((itemList) => {
          if (!itemList.Error) {
            setMatchedProducts(itemList);
            setSearchedList(itemList);
            setAlreadyCalled(true);
            setIsSuggestionsOpen(true);
          }
        });
    }
    /* eslint-disable-next-line react-hooks/exhaustive-deps */
  }, [input]);

  const showSuggestions = matchedProducts.length >= 1 && isSuggestionsOpen;

  return (
    <Wrapper>
      <Form>
        <UnstyledButton
          value={input}
          disabled={input.length === 0}
          onClick={(ev) => {
            ev.preventDefault();
            dispatch(changeCategoryFilter("search", input));
          }}
        >
          <IconContext.Provider value={{ size: "20px" }}>
            <div>
              <GrSearch />
            </div>
          </IconContext.Provider>
        </UnstyledButton>

        <TextInput
          placeholder={"Product name..."}
          onChange={(ev) => {
            setInput(ev.target.value);
          }}
          onBlur={() => {
            if (isSuggestionsOpen) {
              setTimeout(() => {
                setIsSuggestionsOpen(false);
                setAlreadyCalled(false);
              }, 100);
            }
          }}
          onKeyDown={(ev) => {
            switch (ev.key) {
              case "Enter": {
                ev.preventDefault();
                if (selectedSuggestionIndex === -1) {
                  dispatch(changeCategoryFilter("search", input));
                } else {
                  history.push(
                    `/item/${matchedProducts[selectedSuggestionIndex]._id}`
                  );
                }

                break;
              }
              case "ArrowUp": {
                ev.preventDefault();
                if (matchedProducts.length >= 1) {
                  if (selectedSuggestionIndex === -1) {
                    break;
                  }
                  setSelectedSuggestionIndex(selectedSuggestionIndex - 1);
                }
                break;
              }
              case "ArrowDown": {
                ev.preventDefault();
                if (matchedProducts.length >= 1) {
                  if (selectedSuggestionIndex === matchedProducts.length - 1) {
                    break;
                  }
                  setSelectedSuggestionIndex(selectedSuggestionIndex + 1);
                }
                break;
              }
              case "Escape": {
                if (isSuggestionsOpen) {
                  setIsSuggestionsOpen(false);
                  setAlreadyCalled(false);
                }
                break;
              }
            }
          }}
        />
      </Form>
      <SuggestionList>
        {showSuggestions &&
          matchedProducts.map((product, indx) => {
            if (indx <= 10) {
              const index = matchedProducts.indexOf(product);
              const isSelected = index === selectedSuggestionIndex;

              return (
                <Suggestion
                  key={product._id}
                  input={input.toLowerCase()}
                  product={product}
                  index={index}
                  isSelected={isSelected}
                  onMouseEnter={() => setSelectedSuggestionIndex(index)}
                  onClick={(ev) => {
                    ev.preventDefault();
                    history.push(`/item/${product._id}`);
                  }}
                >
                  {product.name}
                </Suggestion>
              );
            }
          })}
      </SuggestionList>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  border-radius: 20px;
  padding: 6px 6px 3px 6px;
  width: 400px;
  display: flex;
  background: white;
`;

const TextInput = styled.input`
  border: none;
  width: 100%;
  outline: none;
  font-size: 18px;
  margin-left: 10px;
  margin-bottom: 5px;
`;

const Form = styled.form`
  display: flex;
  height: 24px;
  width: 100%;
`;

const SuggestionList = styled.ul`
  position: absolute;
  top: 30px;
  left: 30px;
  padding: 0px;
  width: 375px;
  box-shadow: 0px 14px 46px -9px rgba(0, 0, 0, 0.75);

  & li {
    list-style-type: none;
  }
`;

export default SearchBar;
