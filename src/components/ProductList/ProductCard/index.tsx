import { StyledProductCard } from "./style";
import { StyledButton } from "../../../styles/button";
import { StyledParagraph, StyledTitle } from "../../../styles/typography";
import { IProduct, ProductsContext } from "../../../providers/ProductsContext";
import { useContext } from "react";
import { CartContext } from "../../../providers/CartContext";

const ProductCard = () => {
  const { productsList } = useContext(ProductsContext);
  const { addProductCart } = useContext(CartContext);

  const cart = (product: IProduct) => {
    addProductCart(product);
  };

  return (
    <>
      {productsList.map((product) => (
        <StyledProductCard key={product.id}>
          <div className="imageBox">
            <img src={product.img} alt={product.name} />
          </div>
          <div className="content">
            <StyledTitle tag="h3" $fontSize="three">
              {product.name}
            </StyledTitle>
            <StyledParagraph className="category">
              {product.category}
            </StyledParagraph>
            <StyledParagraph className="price">
              R$ {product.price}
            </StyledParagraph>
            <StyledButton
              $buttonSize="medium"
              $buttonStyle="green"
              onClick={() => cart(product)}
            >
              Adicionar
            </StyledButton>
          </div>
        </StyledProductCard>
      ))}
    </>
  );
};

export default ProductCard;

// {productsList.map((currentProduct) => (
//   <ProductCard currentProduct={currentProduct} key={currentProduct.id} />
// ))}
