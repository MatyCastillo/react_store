import NavBar from './components/NavBar';
import MenuButtons from "./components/Menu"
import CartWidget from './components/CartWidget';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <>
      <NavBar title="React Store">
        <MenuButtons>
          <CartWidget />
        </MenuButtons>
      </NavBar>
      <ItemListContainer greeting="Catalogo" />
    </>
  );
}

export default App;
