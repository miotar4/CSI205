import { Outlet } from "react-router-dom";
import AppHeader from "../components/AppHeader";
import AppFooter from "../components/AppFooter";
import AppNavbar from "../components/AppNavbar";

const AppLayout = ({ carts, products ,setToken}) => {
  return (
    <>
      <AppHeader />
      <AppNavbar carts={carts} products={products} setToken={setToken}/>
      <div className="w-100 h-auto px-3 pb-3">
        <Outlet />
      </div>
      <AppFooter />
    </>
  );
};

export default AppLayout;
