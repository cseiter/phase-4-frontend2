import React from 'react';
import CategoryCard from './Category';

function CategoryContainer( {categories, onDeleteCategory}) {
    const CategoryCards = categories.map((category) => (
        <CategoryCard
            key={category.id}
            indRoom={category}
            onDeleteCategory={onDeleteCategory}
        />
    ));

    return (
        <section>
            <h2>Delete</h2>
            {CategoryCards}
        </section>
    );
}

export default CategoryContainer;