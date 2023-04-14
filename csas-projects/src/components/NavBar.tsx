import React from 'react';
import { Container } from './styles/Container.styled';
import { StyledNavBar } from './styles/NavBar.styled';
import { NavLink } from 'react-router-dom';
export const NavBar = () => {
  return (
    <StyledNavBar>
      <Container>
        <NavLink to="/">Projects</NavLink>
        <NavLink to="/form">Form</NavLink>
      </Container>
    </StyledNavBar>
  );
};
