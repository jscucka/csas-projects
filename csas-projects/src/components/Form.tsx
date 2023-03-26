import React from "react";
import {
  StyledForm,
  StyledLabel,
  StyledInput,
  StyledButton,
} from "./styles/Form.styled";
import { Container } from "./styles/Container.styled";
export const Form = () => {
  return (
    <Container>
      <StyledForm>
        <StyledLabel htmlFor="first-name">First name:</StyledLabel>
        <StyledInput type="text" id="first-name" />
        <StyledLabel htmlFor="last-name">Last name:</StyledLabel>
        <StyledInput type="text" id="last-name" />
        <StyledButton type="submit">Submit</StyledButton>
      </StyledForm>
    </Container>
  );
};
