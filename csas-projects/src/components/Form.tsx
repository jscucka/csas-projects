import {
  StyledForm,
  StyledLabel,
  StyledInput,
  StyledButton,
} from "./styles/Form.styled";
import { Container } from "./styles/Container.styled";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ErrorMessage } from "./ErrorMessage";
import { formSchema } from "../utils/formSchema";
import { NameContext } from "./context/NameContext";
import { useContext } from "react";
type FormSchema = z.infer<typeof formSchema>;
export const Form = () => {
  const { setName } = useContext(NameContext) ?? {};
  const submitData = (data: FormSchema) => {
    console.log("Data: ", data);
    setName?.(data.firstName);
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
  });
  return (
    <Container>
      <StyledForm onSubmit={handleSubmit(submitData)}>
        <StyledLabel htmlFor="first-name">First Name:</StyledLabel>
        <StyledInput
          type="text"
          id="first-name"
          hasError={!!errors.firstName}
          {...register("firstName")}
        />
        {errors.firstName && (
          <ErrorMessage message={errors.firstName.message?.toString()} />
        )}

        <StyledLabel htmlFor="last-name">Last Name:</StyledLabel>
        <StyledInput
          type="text"
          id="last-name"
          hasError={!!errors.lastName}
          {...register("lastName")}
        />
        {errors.lastName && (
          <ErrorMessage message={errors.lastName.message?.toString()} />
        )}

        <StyledLabel htmlFor="age">Age:</StyledLabel>
        <StyledInput
          type="number"
          id="age"
          hasError={!!errors.age}
          {...register("age", { valueAsNumber: true })}
        />
        {errors.age && (
          <ErrorMessage message={errors.age.message?.toString()} />
        )}

        <StyledLabel htmlFor="email">Email:</StyledLabel>
        <StyledInput
          type="email"
          id="email"
          hasError={!!errors.email}
          {...register("email")}
        />
        {errors.email && (
          <ErrorMessage message={errors.email.message?.toString()} />
        )}

        <StyledLabel htmlFor="password">Password:</StyledLabel>
        <StyledInput
          type="password"
          id="password"
          hasError={!!errors.password}
          {...register("password")}
        />
        {errors.password && (
          <ErrorMessage message={errors.password.message?.toString()} />
        )}

        <StyledLabel htmlFor="confirmPassword">Confirm Password:</StyledLabel>
        <StyledInput
          type="password"
          id="confirmPassword"
          hasError={!!errors.confirmPassword}
          {...register("confirmPassword")}
        />
        {errors.confirmPassword && (
          <ErrorMessage message={errors.confirmPassword.message?.toString()} />
        )}

        <StyledButton type="submit">Submit</StyledButton>
      </StyledForm>
    </Container>
  );
};
