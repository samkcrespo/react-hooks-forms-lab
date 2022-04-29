import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import Header from "./Header";
import itemData from "../data/items";

function App() {
  const [items, setItems] = useState(itemData);
  const [isDarkMode, setIsDarkMode] = useState(false);

  function handleDarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }
  //create new array that does not modify our original array, using our setter to update state. Anytime our new state relies upon our old state, we need to do a function that receives that state as an argument (example below)
  const addItem = (newItem) => {
    setItems((currentItems) => {
      return [...currentItems, newItem];
    });
  };

  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      <Header isDarkMode={isDarkMode} onDarkModeClick={handleDarkModeClick} />
      <ShoppingList items={items} addItem={addItem} />
    </div>
  );
}

export default App;
