import React from 'react';

function CategoryCard({indCategory,onDeleteCategory}) {
    const {id,category} = indCategory;

    function handleDeleteClick() {
        fetch(`https://radiant-waters-01618.herokuapp.com/categories/${id}`, {
            method: "DELETE",
    })
    .then((r) => r.json())
    .then(console.log({id}))
    .then(() => {onDeleteCategory(indCategory);
    });
}

    return (
        <div>
            <h4>{category}</h4>
            <button onClick={handleDeleteClick}>Delete Category</button>
        </div>
        );
    };

export default CategoryCard;