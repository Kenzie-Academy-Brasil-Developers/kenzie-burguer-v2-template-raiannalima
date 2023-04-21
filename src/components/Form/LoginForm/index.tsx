import { useContext } from "react";
import { StyledButton } from "../../../styles/button";
import { StyledForm } from "../../../styles/form";
import Input from "../Input";
import { useForm } from "react-hook-form";
import { UserContext } from "../../../providers/UserContext";

export interface ILoginUser {
  email: string;
  password: string;
}

const LoginForm = () => {
  const { userLogin } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginUser>();

  const submit = (formData: ILoginUser) => {
    userLogin(formData);
  };

  return (
    <StyledForm onSubmit={handleSubmit(submit)}>
      <Input id="login" type="email" {...register("email")} />
      <Input id="senha" type="password" {...register("password")} />
      <StyledButton $buttonSize="default" $buttonStyle="green">
        Entrar
      </StyledButton>
    </StyledForm>
  );
};

export default LoginForm;
