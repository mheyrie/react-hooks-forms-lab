import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";


function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedName, setSelectedName] = useState("")
  const [currentEventTarget, setCurrentEventTarget] = useState("filter")

  function handleCategoryChange(e) {
    setSelectedCategory(e.target.value)
    setCurrentEventTarget(e.target.name)
  }

function handleSearchChange(e){
  setSelectedName(e.target.value)
  setCurrentEventTarget(e.target.name)
}

  const itemsToDisplay = items.filter((item) => {
    if (currentEventTarget === "search"){
    if (selectedCategory === "") return true

    return item.name.toLowerCase().includes(selectedName.toLowerCase())
    } else if(currentEventTarget === "filter") {
      if(selectedCategory === "All") return true
      return item.category === selectedCategory
    }
    
  });

  return (
    <div className="ShoppingList">
      <ItemForm />
      <Filter onCategoryChange={handleCategoryChange} onSearchChange={handleSearchChange}/>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
