import React from "react";
import {useState} from "react"

function ItemForm({ onItemFormSubmit, setItemName, setItemCategory }) {

  function handleNameChange(event) {
    setItemName(event.target.value)
  }
  function handleCatChange(event) {
    setItemCategory(event.target.value)
  }
  return (
    <form className="NewItem" onSubmit={onItemFormSubmit}>
      <label>
        Name:
        <input type="text" name="name" onChange={handleNameChange}/>
      </label>

      <label>
        Category:
        <select name="category" onChange={handleCatChange}>
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
