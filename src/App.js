import NavBar from './components/NavBar';
import Home from './pages/home';
import MenuButtons from "./components/Menu"
import CartWidget from './components/CartWidget';

import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Switch, Route } from "react-router-dom"
import '@fontsource/roboto';


function App() {
  return (
    // <>
    //   
    //   {/* <ItemListContainer greeting="Catálogo" /> */}
    //   <ItemDetailContainer />
    // </>
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
      </Switch>
    </BrowserRouter>
  );
}

export default App;
