import { createContext, useContext } from "react";

const cartInitialState = {
  cartlist: [],
  total: 0,
};
const CartContext = createContext(cartInitialState);

export const CartProvider = ({ children }) => {
  const value = {
    cartlist: [],
    total: 0,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
export const useCart = () => {
  const context = useContext(CartContext);
  return context;
};
