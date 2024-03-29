import { MdShoppingCart, MdLogout } from "react-icons/md";

import SearchForm from "./SearchForm";
import { StyledHeader } from "./style";
import LogoKenzieBurguer from "../../assets/LogoKenzieBurguer.svg";

import { StyledContainer } from "../../styles/grid";

import { useContext } from "react";
import { UserContext } from "../../providers/UserContext";
import { CartContext } from "../../providers/CartContext";

const Header = () => {
  const { user, userLogOut } = useContext(UserContext);
  const { isOpenModalCart, setIsOpenModalCart } = useContext(CartContext);

  const openModal = () => {
    setIsOpenModalCart(true);
  };

  return (
    <StyledHeader>
      <StyledContainer containerWidth={1300}>
        <div className="flexGrid">
          <img
            src={LogoKenzieBurguer}
            alt="Kenzie Burguer Logo"
            className="logo"
          />
          <nav className="nav" role="navigation">
            <SearchForm />
            <div className="buttons">
              <button type="button" onClick={openModal}>
                <MdShoppingCart size={28} />
              </button>
              <button type="button" onClick={() => userLogOut()}>
                <MdLogout size={28} />
              </button>
            </div>
          </nav>
        </div>
      </StyledContainer>
    </StyledHeader>
  );
};

export default Header;
