import styled from "styled-components";

export const StyledNavBar = styled.nav`
  background-color: white;
  padding: 1% 0;
  min-width: 100vw;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  div {
    display: flex;
    justify-content: space-between;
  }
  a {
    text-decoration: none;
    color: #60a5fa;
  }
  a.active {
    color: #2563eb;
  }
`;
