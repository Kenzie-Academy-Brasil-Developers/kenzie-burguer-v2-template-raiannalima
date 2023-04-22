import { useContext } from "react";
import { UserContext } from "../../providers/UserContext";
import { Navigate, Outlet } from "react-router-dom";
import { ProductsProvider } from "../../providers/ProductsContext";

export const ProtectedRoutes = () => {
  const { user } = useContext(UserContext);

  return user ? (
    <ProductsProvider>
      <Outlet />
    </ProductsProvider>
  ) : (
    <Navigate to="/" />
  );
};
