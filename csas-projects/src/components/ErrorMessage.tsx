import { StyledErrorMessage } from "./styles/ErrorMessage.styled";
interface ErrorMessageProps {
  message: string | undefined;
}

export const ErrorMessage = ({ message }: ErrorMessageProps) => {
  return <StyledErrorMessage>{message}</StyledErrorMessage>;
};
