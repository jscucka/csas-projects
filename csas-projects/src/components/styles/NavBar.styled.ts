import styled from "styled-components";

export const StyledNavBar = styled.nav`
  background-color: #1a1a1a;
  padding: 1.5rem 0;
  min-width: 100vw;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.15);

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem;

    @media (max-width: 768px) {
      flex-direction: column;
      align-items: center;
      padding: 1rem;
    }
  }

  a {
    text-decoration: none;
    color: #ffffff;
    font-size: 1rem;
    margin-right: 2rem;
    transition: color 0.2s;
    font-weight: 500;
    letter-spacing: 0.025em;

    &:hover {
      color: #60a5fa;
    }

    &.active {
      color: #60a5fa;
    }

    @media (max-width: 768px) {
      margin: 0.5rem 0;
      margin-right: 0;
      font-size: 1.2rem;
    }

    @media (min-width: 769px) and (max-width: 1024px) {
      font-size: 0.9rem;
      margin-right: 1rem;
    }

    @media (min-width: 1025px) {
      font-size: 1rem;
      margin-right: 2.5rem;
    }
  }
`;
