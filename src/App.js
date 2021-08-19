import '@fontsource/roboto';
import NavBar from './components/NavBar';
import MenuButtons from "./components/Menu"
import CartWidget from './components/CartWidget';
import ItemDetailContainer from "./components/ItemDetailContainer";

function App() {
  return (
    <>
      <NavBar title="React Store">
        <MenuButtons>
          <CartWidget />
        </MenuButtons>
      </NavBar>
      <ItemDetailContainer />
    </>
  );
}

export default App;
