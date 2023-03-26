import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;
  height: 20rem;
  margin: 2% auto;
  background-color: white;
  padding: 2%;
  border-bottom-right-radius: 0.375rem; /* 6px */
  border-bottom-left-radius: 0.375rem; /* 6px */
`;
export const StyledLabel = styled.label`
  color: #2563eb;
  margin-bottom: 0.5rem;
`;
export const StyledInput = styled.input`
  margin-bottom: 2rem;
`;
export const StyledButton = styled.button`
  background-color: #3b82f6;
  width: 5rem;
  border-radius: 9999px;
  padding: 1%;
  color: white;
  border-color: #3b82f6;
  box-shadow: 0 8px 8px 0 rgba(0, 0, 0, 0.1), 0 3px 10px 0 rgba(0, 0, 0, 0.1);
  :hover {
    cursor: pointer;
  }
`;
