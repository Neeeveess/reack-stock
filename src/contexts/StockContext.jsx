import { createContext, useState } from "react";
import { PropTypes } from "prop-types";

export const StockContext = createContext({});

StockContextProvider.propTypes = {
  children: PropTypes.node,
};

// Item
// {name, description, quantity, price, category, createdAt, updatedAt}

export function StockContextProvider({ children }) {
  const [items, setItems] = useState(() => {
    const storedItems = localStorage.getItem("react-stock");
    if (!storedItems) return [];
    const items = JSON.parse(storedItems);
    items.forEach((item) => {
      item.createdAt = new Date(item.createdAt);
      item.updatedAd = new Date(item.updatedAd);
    });
    return items;
  });

  const addItem = (item) => {
    setItems((currentState) => {
      const updatedItems = [item, ...currentState];
      localStorage.setItem("react-stock", JSON.stringify(updatedItems));
      return updatedItems;
    });
  };
  const stock = {
    items,
    addItem,
  };

  return (
    <StockContext.Provider value={stock}>{children}</StockContext.Provider>
  );
}
