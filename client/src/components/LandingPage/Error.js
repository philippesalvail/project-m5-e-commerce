import React from "react";
import styled from "styled-components";
import { GrAlert } from "react-icons/gr";
import { IconContext } from "react-icons";

const Error = ({ searchInput }) => {
  return (
    <Wrapper>
      <IconContext.Provider value={{ size: "75px" }}>
        <div>
          <GrAlert />
        </div>
      </IconContext.Provider>
      <ErrorBody>
        {`Sorry! No matches found for query "${searchInput}"`}{" "}
      </ErrorBody>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  margin-top: 40px;
`;

const ErrorBody = styled.p`
  font-size: 18px;
`;

export default Error;
