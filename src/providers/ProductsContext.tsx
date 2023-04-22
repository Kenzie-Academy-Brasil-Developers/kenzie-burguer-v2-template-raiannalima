import { createContext, useEffect, useState } from "react";
import { api } from "../services/api";

interface IProductsProviderProps {
  children: React.ReactNode;
}

export interface IProduct {
  id: number;
  name: string;
  category: string;
  price: number;
  img: string;
}

interface IProductsContext {
  productsList: IProduct[];
}

export const ProductsContext = createContext({} as IProductsContext);

export const ProductsProvider = ({ children }: IProductsProviderProps) => {
  const [productsList, setProductsList] = useState<IProduct[]>([]);

  useEffect(() => {
    const productsLoad = async () => {
      try {
        const { data } = await api.get<IProduct[]>("/products");
        setProductsList(data);
      } catch (error) {
        console.log(error);
      }
    };
    productsLoad();
  }, []);

  return (
    <ProductsContext.Provider value={{ productsList }}>
      {children}
    </ProductsContext.Provider>
  );
};
