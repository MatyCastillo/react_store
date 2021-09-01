import React, { createContext, useState } from "react";

const cartContext = createContext({});

export const CartContextProvider = ({ children }) => {
  const items = [];
  const [products, setProducts] = useState();
  const [cart, setCart] = useState([]);

  const addItem = (newItem) => {
    setCart(newItem);
    console.log("cart", cart);
  };

  return (
    <cartContext.Provider
      value={{ products, setProducts, cart, setCart, addItem }}
    >
      {/* componentes hijos  */}
      {children}
    </cartContext.Provider>
  );
};
export default cartContext;

/* 
Metodo recomendados
addItem(item, quantity); // agregar cierta cantidad de un ítem al carrito
removeItem(itemId); // Remover un item del cart por usando su id
clear(); // Remover todos los items
isInCart: (id) => true | false;
 */
