import { MdDelete } from "react-icons/md";

import { StyledCartProductCard } from "./style";
import { StyledTitle } from "../../../../styles/typography";
import { IProduct } from "../../../../providers/ProductsContext";
import { useContext } from "react";
import { CartContext } from "../../../../providers/CartContext";

const CartProductCard = () => {
  const { listCartProducts, deleteProduct } = useContext(CartContext);

  return (
    <>
      {listCartProducts.map((product) => (
        <StyledCartProductCard key={product.id}>
          <div className="imageBox">
            <img src={product.img} alt={product.name} />
          </div>
          <div className="contentBox">
            <StyledTitle tag="h3" $fontSize="three">
              {product.name}
            </StyledTitle>
            <button
              type="button"
              aria-label="Remover"
              onClick={() => deleteProduct(product)}
            >
              <MdDelete size={24} />
            </button>
          </div>
        </StyledCartProductCard>
      ))}
    </>
  );
};

export default CartProductCard;
