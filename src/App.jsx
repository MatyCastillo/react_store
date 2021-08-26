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

function App() {
  return (
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
      </Switch>
    </BrowserRouter>
  );
}

export default App;
