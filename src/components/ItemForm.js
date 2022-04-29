import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormSubmit }) {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  console.log(name, category);

  //Set state
  //Set onchange with state e.target.value
  //set value to state name

  //On submit - handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    onItemFormSubmit({ name: name, category: category, id: uuid() });
    setName("");
    setCategory("");
  };

  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
      </label>
      <label>
        Category:
        <select
          name="category"
          onChange={(e) => setCategory(e.target.value)}
          value={category}
        >
          <option>Select Category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
