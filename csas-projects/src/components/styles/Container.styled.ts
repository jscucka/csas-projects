import styled from "styled-components";

export const Container = styled.div`
  width: 80%;
  max-width: 1200px;
  padding: 0 20px;
  margin: 0 auto;

  @media screen and (max-width: 1024px) {
    width: 90%;
  }

  @media screen and (max-width: 768px) {
    width: 95%;
  }

  @media screen and (max-width: 480px) {
    width: 100%;
    padding: 0 10px;
  }
`;
