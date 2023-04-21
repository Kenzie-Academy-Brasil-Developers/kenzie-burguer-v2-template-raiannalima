import { createContext, useState } from "react";

interface ICartContext {
  isOpenModalCart: boolean;
  setIsOpenModalCart: React.Dispatch<React.SetStateAction<boolean>>;
}

interface ICartProviderProps {
  children: React.ReactNode;
}

export const CartContext = createContext({} as ICartContext);

export const CartProvider = ({ children }: ICartProviderProps) => {
  const [isOpenModalCart, setIsOpenModalCart] = useState(false);

  return (
    <CartContext.Provider value={{ isOpenModalCart, setIsOpenModalCart }}>
      {children}
    </CartContext.Provider>
  );
};
