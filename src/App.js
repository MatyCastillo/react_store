import NavBar from './components/NavBar';
import MenuButtons from "./components/Menu"
import CartWidget from './components/CartWidget';

function App() {
  return (
    <>
      <NavBar title="React Store">
        <MenuButtons>
          <CartWidget />
        </MenuButtons>
      </NavBar>

    </>
  );
}

export default App;
