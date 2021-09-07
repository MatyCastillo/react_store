//resourses
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "@fontsource/roboto";
//components
import NavBar from "./components/NavBar";
import MenuButtons from "./components/Menu";
import CartWidget from "./components/CartWidget";
//pages
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Category from "./pages/Category";
import Cart from "./components/Cart";

import { useState } from "react";
import CartContextProvider from "./context/CartContext";

export default function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <NavBar title="React Store">
          <MenuButtons>
            <CartWidget />
          </MenuButtons>
        </NavBar>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/item/:id">
            <Detail />
          </Route>
          <Route exact path="/category/:categoryId" component={Category} />
          <Route exact path="/cart" component={Cart} />
        </Switch>
      </BrowserRouter>
    </CartContextProvider>
  );
}
