import React, { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  console.log("cart:", cart);

  const addItem = (newItem, quant) => {
    const cartAux = [...cart];
    if (isInCart(newItem.id)) {
      const itemFind = cart.find((itm) => itm.item.id === newItem.id);
      itemFind.quantity = itemFind.quantity + quant;
      setCart([...cart]);
    } else {
      cartAux.push({ item: newItem, quantity: quant });
      setCart(cartAux);
    }
    console.log("cart:", cart);
  };

  const isInCart = (id) => {
    return (
      cart.filter(function (item) {
        return item.item.id == id;
      }).length > 0
    );
  };

  const removeItem = (id) => {
    setCart(
      cart.filter(function (obj) {
        return obj.item.id != id;
      })
    );
  };

  const clear = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{ cart, removeItem, addItem, isInCart, clear }}
    >
      {/* componentes hijos  */}
      {children}
    </CartContext.Provider>
  );
};
export default CartContextProvider;
