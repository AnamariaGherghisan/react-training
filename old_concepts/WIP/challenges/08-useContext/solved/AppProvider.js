import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({ children, items }) => {
  const [basket, setBasket] = useState(items || []);

  const addToBasket = (item) => {
    const newBasket = [item, ...basket];

    setBasket(newBasket);
  };

  const removeFromBasket = (item) => {
    const newBasket = basket.filter((basketItem) => basketItem.id !== item.id);

    setBasket(newBasket);
  };

  const value = { basket, addToBasket, removeFromBasket };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useApp = () => useContext(AppContext);
