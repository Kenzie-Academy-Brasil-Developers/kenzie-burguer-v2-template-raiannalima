import { createContext, useEffect, useState } from "react";
import { api } from "../services/api";
import { ICreateUser } from "../components/Form/RegisterForm";
import { ILoginUser } from "../components/Form/LoginForm";
import { useNavigate } from "react-router-dom";

interface IUserProviderProps {
  children: React.ReactNode;
}

interface IUserContext {
  user: IUser | null;
  userRegister: (formData: ICreateUser) => Promise<void>;
  userLogin: (formData: ILoginUser) => Promise<void>;
  userLogOut: () => void;
}

export const UserContext = createContext({} as IUserContext);

interface IUser {
  id: string;
  name: string;
  email: string;
}

interface IUserLoginResponse {
  accessToken: string;
  user: IUser;
}

export const UserProvider = ({ children }: IUserProviderProps) => {
  const [user, setUser] = useState<IUser | null>(null);

  useEffect(() => {
    const token = localStorage.getItem("@tokenHamburgueria2");
    const userId = localStorage.getItem("@idUserHamburgueria2");

    const userAutoLogin = async () => {
      try {
        api.defaults.headers.authorization = `Bearer ${token}`;

        const { data } = await api.get<IUser>(`/users/${userId}`);
        setUser(data);
        navigate("/shop");
      } catch (error) {
        console.log(error);
        localStorage.removeItem("@tokenHamburgueria2");
        localStorage.removeItem("@idUserHamburgueria2");
      }
    };
    if (token && userId) {
      userAutoLogin();
    }
  }, []);

  const navigate = useNavigate();

  const userLogin = async (formData: ILoginUser) => {
    try {
      const { data } = await api.post<IUserLoginResponse>("/login", formData);
      api.defaults.headers.authorization = `Bearer ${data.accessToken}`;
      localStorage.setItem("@tokenHamburgueria2", data.accessToken);
      localStorage.setItem("@idUserHamburgueria2", data.user.id);
      setUser(data.user);
      navigate("/shop");
    } catch (error) {
      console.log(error);
    }
  };

  const userRegister = async (formData: ICreateUser) => {
    try {
      await api.post("/users", formData);
      console.log("Cadastro efetuado com sucesso!");
    } catch (error) {
      console.log(error);
    }
  };

  const userLogOut = () => {
    localStorage.removeItem("@tokenHamburgueria2");
    localStorage.removeItem("@idUserHamburgueria2");
    setUser(null);
    navigate("/");
  };

  return (
    <UserContext.Provider value={{ userLogin, userRegister, userLogOut, user }}>
      {children}
    </UserContext.Provider>
  );
};
