import React from "react";
import { Container } from "./styles/Container.styled";
import { StyledNavBar } from "./styles/NavBar.styled";
export const NavBar = () => {
  return (
    <StyledNavBar>
      <Container>
        <a href="/">Projects</a>
        <ul>
          <li>
            <a href="/form">Form</a>
          </li>
        </ul>
      </Container>
    </StyledNavBar>
  );
};
