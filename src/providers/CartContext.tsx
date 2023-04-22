import { createContext, useContext, useState } from "react";
import ProductList from "../components/ProductList";
import { ProductsContext } from "./ProductsContext";
import { IProduct } from "./ProductsContext";

interface ICartContext {
  isOpenModalCart: boolean;
  setIsOpenModalCart: React.Dispatch<React.SetStateAction<boolean>>;
  addProductCart: (product: React.SyntheticEvent) => void;
}

interface ICartProviderProps {
  children: React.ReactNode;
}

export const CartContext = createContext({} as ICartContext);

export const CartProvider = ({ children }: ICartProviderProps) => {
  const [isOpenModalCart, setIsOpenModalCart] = useState(false);
  const [listCartProducts, setListCartProducts] = useState<IProduct[]>([]);

  const { productsList } = useContext(ProductsContext);

  const addProductCart = (product: React.SyntheticEvent): void => {
    console.log(product);
    // if (productsList.some((productList) => product.id === productList.id)) {
    //   setListCartProducts[...listCartProducts, product]
    // }
  };

  // Função adicionar produtos no carrinho:
  // -> Quando eu clicar eu vou pegar o elemento e adicionar na nova lista;

  return (
    <CartContext.Provider
      value={{ isOpenModalCart, setIsOpenModalCart, addProductCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

// const addProductCart = (product) => {
//   if (!productsCart.some(productCart => productCart.id === product.id)) {
//     const listCartProducts = [...productsCart, product];
//     setProductsCart(listCartProducts);
//   } else {
//     console.log("Este item já está na lista.")
//   }
// }
