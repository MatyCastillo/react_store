import React, { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

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


  const getCartAmount = () => {
    let amount = 0;
    cart.map((item) => {
      amount += item.item.price * item.quantity;
    });
    return amount;
  };

  const getQuantities = () => {
    let len = 0;
    cart.map((item) => {
      len += item.quantity;
    });
    return len;
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        removeItem,
        addItem,
        isInCart,
        clear,
        getCartAmount,
        getQuantities,
      }}

    >
      {/* componentes hijos  */}
      {children}
    </CartContext.Provider>
  );
};
export default CartContextProvider;
