import CartProductCard from "./CartProductCard";

import { StyledCartProductList } from "./style";
import { StyledButton } from "../../../styles/button";
import { StyledParagraph } from "../../../styles/typography";
import { useContext } from "react";
import { CartContext } from "../../../providers/CartContext";

const CartProductList = () => {
  const { listCartProducts, deleteAllProducts } = useContext(CartContext);

  const sum = listCartProducts.reduce((acc, current) => {
    return acc + current.price;
  }, 0);

  return (
    <StyledCartProductList>
      <ul>
        <CartProductCard />
      </ul>

      <div className="totalBox">
        <StyledParagraph>
          <strong>Total</strong>
        </StyledParagraph>
        <StyledParagraph className="total">R$ {sum.toFixed(2)}</StyledParagraph>
      </div>
      <StyledButton
        $buttonSize="default"
        $buttonStyle="gray"
        onClick={() => deleteAllProducts()}
      >
        Remover todos
      </StyledButton>
    </StyledCartProductList>
  );
};

export default CartProductList;

{
  /* <ul>
{productsCart.map(product => (
    <li key={product.id}>
        <div className="cart-data">
            <div className="cart-image">
                <img src={product.img}/>
            </div>
            <div className="cart-name">
                <h2 className="title-03">
                    {product.name}
                </h2>
                <span className="text-01">
                    {product.category}
                </span>
            </div>    
        </div>
        <button type="button" className="btn-remove" onClick={() => removeProductCart(product.id)}>
            Remover
        </button>
    </li>
))}
</ul> */
}
