import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  margin: 2% auto;
  background-color: #f9f9f9;
  padding: 2rem;
  border-radius: 0.5rem;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    width: 90%;
    padding: 1rem;
  }
`;

export const StyledLabel = styled.label`
  color: #444444;
  margin-bottom: 0.5rem;
  font-size: 1rem;
`;

export const StyledInput = styled.input<{ hasError: boolean }>`
  margin-bottom: 2rem;
  border: 1px solid ${(props) => (props.hasError ? "#ff4f4f" : "#dddddd")};
  height: 3rem;
  font-size: 1.2rem;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  outline: none;
  transition: all 0.2s ease-in-out;

  &:focus {
    border-color: #0077b6;
    box-shadow: 0 0 0 2px #0077b6;
  }

  &:invalid {
    border-color: #ff4f4f;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const StyledButton = styled.button`
  background-color: #0077b6;
  width: 100%;
  max-width: 12rem;
  height: 3.5rem;
  border-radius: 0.5rem;
  padding: 0.75rem 2rem;
  color: #ffffff;
  border: none;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.05rem;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #008cba;
    cursor: pointer;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px #008cba;
  }

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;
