import React from "react";
import {
  StyledForm,
  StyledLabel,
  StyledInput,
  StyledButton,
} from "./styles/Form.styled";
import { Container } from "./styles/Container.styled";
import { ZodType, z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ErrorMessage } from "./ErrorMessage";
const formSchema: ZodType = z
  .object({
    firstName: z
      .string()
      .min(2, { message: "Jméno musí mít aspoň 2 znaky" })
      .max(20, { message: "Jméno musí být menší než 20 znaků." }),
    lastName: z
      .string()
      .min(2, { message: "Příjmení musí mít aspoň 2 znaky" })
      .max(20, { message: "Příjmení musí být menší než 20 znaků." }),
    email: z.string().email({ message: "Nevalidní email." }).optional(),
    age: z.number().min(18, { message: "Musí ti bý 18." }),
    password: z
      .string()
      .min(4, { message: "Heslo musí být delší než 3 znaky." }),
    confirmPassword: z
      .string()
      .min(4, { message: "Heslo musí být delší než 3 znaky." }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Hesla se neshodují",
    path: ["confirmPassword"],
  });
const submitData = (data: FormSchema) => {
  console.log("Data: ", data);
};
type FormSchema = z.infer<typeof formSchema>;
export const Form = () => {
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
