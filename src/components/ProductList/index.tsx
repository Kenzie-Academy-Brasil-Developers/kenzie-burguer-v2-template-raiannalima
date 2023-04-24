import { useContext } from "react";
import { IProduct, ProductsContext } from "../../providers/ProductsContext";
import ProductCard from "./ProductCard";
import { StyledProductList } from "./style";

const ProductList = () => {
  return (
    <StyledProductList>
      <ProductCard />
    </StyledProductList>
  );
};

export default ProductList;
