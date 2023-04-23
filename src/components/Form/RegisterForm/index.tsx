import Input from "../Input";
import { StyledButton } from "../../../styles/button";
import { StyledForm } from "../../../styles/form";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { UserContext } from "../../../providers/UserContext";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerFormSchema } from "./registerFormSchema";
import { TRegisterFormValues } from "./registerFormSchema";

export interface ICreateUser {
  name: string;
  email: string;
  password: string;
  confirmPassword?: string;
}

const RegisterForm = () => {
  const { userRegister } = useContext(UserContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TRegisterFormValues>({
    resolver: zodResolver(registerFormSchema),
  });

  const submit = (formData: TRegisterFormValues) => {
    userRegister(formData);
  };

  return (
    <StyledForm onSubmit={handleSubmit(submit)}>
      <Input id="name" type="text" {...register("name")} error={errors.name} />
      <Input
        id="email"
        type="email"
        {...register("email")}
        error={errors.email}
      />
      <Input
        id="password"
        type="password"
        {...register("password")}
        error={errors.password}
      />
      <Input
        id="confirmPassword"
        type="password"
        {...register("confirmPassword")}
        error={errors.confirmPassword}
      />
      <StyledButton type="submit" $buttonSize="default" $buttonStyle="gray">
        Cadastrar
      </StyledButton>
    </StyledForm>
  );
};

export default RegisterForm;

// {
//   "email": "johndoe@email.com",
//   "password": "123456",
//   "name": "John Doe",
// }
