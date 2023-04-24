import { createContext, useContext, useState } from "react";
import ProductList from "../components/ProductList";
import { ProductsContext } from "./ProductsContext";
import { IProduct } from "./ProductsContext";

interface ICartContext {
  isOpenModalCart: boolean;
  setIsOpenModalCart: React.Dispatch<React.SetStateAction<boolean>>;
  addProductCart: (product: IProduct) => void;
  listCartProducts: IProduct[];
  deleteProduct: (product: IProduct) => void;
  deleteAllProducts: () => void;
}

interface ICartProviderProps {
  children: React.ReactNode;
}

export const CartContext = createContext({} as ICartContext);

export const CartProvider = ({ children }: ICartProviderProps) => {
  const [isOpenModalCart, setIsOpenModalCart] = useState(false);
  const [listCartProducts, setListCartProducts] = useState<IProduct[]>([]);

  const addProductCart = (product: IProduct) => {
    if (
      !listCartProducts.find(
        (productCartList) => productCartList.id === product.id
      )
    ) {
      setListCartProducts([...listCartProducts, product]);
    } else {
      console.log("erro");
    }
  };

  const deleteProduct = (product: IProduct) => {
    const filteredProduct = listCartProducts.filter((productCart) => {
      return productCart !== product;
    });
    setListCartProducts(filteredProduct);
  };

  const deleteAllProducts = () => {
    const emptyList: [] = [];
    setListCartProducts(emptyList);
  };

  return (
    <CartContext.Provider
      value={{
        isOpenModalCart,
        setIsOpenModalCart,
        addProductCart,
        listCartProducts,
        deleteProduct,
        deleteAllProducts,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
