//resourses
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "@fontsource/roboto";
//components
import NavBar from "./components/NavBar";
import MenuButtons from "./components/Menu";
import CartWidget from "./components/CartWidget";
import Breadcrumb from "./components/Breadcrumb";
//pages
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Category from "./pages/Category";
import Cart from "./components/Cart";
//contexts
import CartContextProvider from "./context/CartContext";
import OrderSearch from "./components/OrderSearch";
import OrderContainer from "./components/OrderContainer";

export default function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <NavBar title="React Store">
          <MenuButtons>
            <CartWidget />
          </MenuButtons>
        </NavBar>
        <Breadcrumb />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/item/:id" component={Detail} />
          <Route exact path="/category/:categoryId" component={Category} />
          <Route exact path="/order" component={OrderSearch} />
          <Route exact path="/order/:orderId" component={OrderContainer} />
          <Route exact path="/cart" component={Cart} />
        </Switch>
      </BrowserRouter>
    </CartContextProvider>
  );
}
