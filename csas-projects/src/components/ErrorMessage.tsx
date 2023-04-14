import { StyledErrorMessage } from './styles/ErrorMessage.styled';
import React from 'react';
interface ErrorMessageProps {
  message: string | undefined;
}

export const ErrorMessage = ({ message }: ErrorMessageProps) => {
  return <StyledErrorMessage>{message}</StyledErrorMessage>;
};
