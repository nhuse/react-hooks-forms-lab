import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";
import { v4 as uuid } from "uuid";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearchCrit] = useState("")
  const [itemArray, setItemArray] = useState([...items])
  const [itemName, setItemName] = useState("")
  const [itemCategory, setItemCategory] = useState("Produce")

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function onSeachChange(event) {
    setSearchCrit(event.target.value);
  }

  function onItemFormSubmit(event) {
    event.preventDefault();
    // console.log(event)
    const newObj = {
      id: uuid(),
      name: itemName,
      category: itemCategory
    }

    setItemArray([...itemArray, newObj])
  }


  let itemsToDisplay = [];

  if(search === ""){
    itemsToDisplay = itemArray.filter((item) => {
      if(selectedCategory === "All"){
        return true;
      }
  
      return item.category === selectedCategory;
    });
  }else{
    itemsToDisplay = itemArray.filter((item) => {
      return item.name === search;
    });
  }
  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit} setItemName={setItemName} setItemCategory={setItemCategory} />
      <Filter onCategoryChange={handleCategoryChange} onSearchChange={onSeachChange} search={search}/>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
