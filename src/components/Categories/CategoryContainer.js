import React from 'react';
import CategoryCard from './Category';

function CategoryContainer( {categories, onDeleteCategory}) {
    const CategoryCards = categories.map((category) => (
        <CategoryCard
            key={category.id}
            indCategory={category}
            onDeleteCategory={onDeleteCategory}
        />
    ));

    return (
        <section>
            <h1>Categories</h1>
            {CategoryCards}
        </section>
    );
}

export default CategoryContainer;