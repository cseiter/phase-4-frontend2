import React, {useEffect, useState} from 'react';
import CategoryContainer from './CategoryContainer';
import CategoryForm from './CategoryForm';

function CategoryPage() {
  const [categories,setCategories] = useState([]);

  useEffect(() => {
    fetch('https://radiant-waters-01618.herokuapp.com/categories')
    .then((r) => r.json())
    .then(setCategories);
  },[]);

  function handleAddCategory(newCategory) {
    setCategories([...categories, newCategory]);
  }

  function handleDeleteCategory(categoryToDelete) {
    const updatedCategories = categories.filter((category) => category.id !== categoryToDelete.id);
    setCategories(updatedCategories);
  }
  
  return (
    <main>
      <header>
        <h1>Categories</h1>
      </header>
      <CategoryForm onAddCategory={handleAddCategory}/>
      <CategoryContainer 
      categories={categories}
      onDeleteCategory={handleDeleteCategory}
      />
    </main>
);
}

export default CategoryPage;