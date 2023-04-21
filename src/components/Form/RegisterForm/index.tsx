import Input from "../Input";
import { StyledButton } from "../../../styles/button";
import { StyledForm } from "../../../styles/form";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { UserContext } from "../../../providers/UserContext";

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
  } = useForm<ICreateUser>();

  const submit = (formData: ICreateUser) => {
    userRegister(formData);
  };

  return (
    <StyledForm onSubmit={handleSubmit(submit)}>
      <Input id="name" type="text" {...register("name")} />
      <Input id="email" type="email" {...register("email")} />
      <Input id="password" type="password" {...register("password")} />
      <Input
        id="confirmPassword"
        type="password"
        {...register("confirmPassword")}
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
