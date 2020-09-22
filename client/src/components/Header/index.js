import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { COLORS } from "../../constants";
import { FiWind } from "react-icons/fi";

import CartButton from "./CartButton";
import NavBar from "./NavBar";
import { useAuth0 } from "@auth0/auth0-react";
import LoginBtn from "../Login-Btn";
import LogoutBtn from "../Logout-Btn";

const Header = () => {
  const { isAuthenticated } = useAuth0();
  const { user } = useAuth0();
  console.log("user: ", user);

  return (
    <Wrapper>
      {isAuthenticated ? (
        <TopHeader>
          <TitleLink to={"/"}>
            620sqm <FiWind /> <div>Welcome: {user.name}</div> <LogoutBtn />
          </TitleLink>
          <CartButton />
        </TopHeader>
      ) : (
        <TopHeader>
          <TitleLink to={"/"}>
            620sqm <FiWind />
            <LoginBtn />
          </TitleLink>

          <CartButton />
        </TopHeader>
      )}

      <NavBar />
    </Wrapper>
  );
};

const Wrapper = styled.header``;

const TopHeader = styled.div`
  margin: 0;
  padding: 0 0 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${COLORS.primary};
`;

const TitleLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 800;
  font-size: 24px;
  grid-area: header;
  text-decoration: none;
  color: white;
`;

export default Header;
