import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { GrSearch } from "react-icons/gr";
import { IconContext } from "react-icons";
import { COLORS } from "../../constants";

import UnstyledButton from "../UnstyledButton";

import { changeCategoryFilter, changeSearchInput } from "../../actions";

const SearchBar = () => {
  const dispatch = useDispatch();
  const [input, setInput] = React.useState("");

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
        />
      </Form>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  border-radius: 20px;
  padding: 6px 6px 3px 6px;
  width: 300px;
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
`;
export default SearchBar;
