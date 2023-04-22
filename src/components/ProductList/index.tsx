import { useContext } from "react";
import { IProduct, ProductsContext } from "../../providers/ProductsContext";
import ProductCard from "./ProductCard";
import { StyledProductList } from "./style";

const ProductList = () => {
  // const { productsList } = useContext(ProductsContext);

  return (
    <StyledProductList>
      <ProductCard />
    </StyledProductList>
  );
};

export default ProductList;

// {productsList.map((currentProduct) => (
//   <ProductCard currentProduct={currentProduct} key={currentProduct.id} />
// ))}
