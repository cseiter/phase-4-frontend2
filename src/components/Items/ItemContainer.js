import React from 'react';
import ItemCard from './Item';

function ItemContainer( {items, onDeleteItem}) {
    const ItemCards = items.map((item) => (
        <ItemCard
            key={item.id}
            indItem={item}
            onDeleteItem={onDeleteItem}
        />
    ));

    return (
        <section>
            <h2>Delete</h2>
            {ItemCards}
        </section>
    );
}

export default ItemContainer;