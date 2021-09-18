import React, {useEffect, useState} from 'react';
import ItemContainer from './ItemContainer';
import ItemForm from './ItemForm';

function ItemPage() {
  const [items,setItems] = useState([]);

  useEffect(() => {
    fetch('https://radiant-waters-01618.herokuapp.com/items')
    .then((r) => r.json())
    .then(setItems);
  },[]);

  function handleAddItem(newItem) {
    setItems([...items, newItem]);
  }

  function handleDeleteItem(itemToDelete) {
    const updatedItems = items.filter((item) => item.id !== itemToDelete.id);
    setItems(updatedItems);
  }
  
  return (
    <main>
      <header>
        <h1>Items</h1>
      </header>
      <ItemForm onAddItem={handleAddItem}/>
      <ItemContainer 
      items={items}
      onDeleteItem={handleDeleteItem}
      />
    </main>
);
}

export default ItemPage;