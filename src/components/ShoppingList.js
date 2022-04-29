import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, addItem }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  // const onSearchChange = items.filter((item) => {
  //   if (filterChange === item.name) return item;
  // });
  const itemsToDisplay = items
    .filter((item) => {
      if (selectedCategory === "All") return true;

      return item.category === selectedCategory;
    })
    .filter((item) => {
      return item.name.includes(search);
    });

  function handleSearchChange(event) {
    setSearch(event.target.value);
  }
  console.log(search);

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={addItem} />
      <Filter
        onCategoryChange={handleCategoryChange}
        onSearchChange={handleSearchChange}
        search={search}
      />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
