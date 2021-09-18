import React from 'react';
import button from 'react-bootstrap/Button';
import '../../App.css';

function ItemCard({indItem,onDeleteItem}) {
    const {id,item_name,manufacturer,model} = indItem;

    function handleDeleteClick() {
        fetch(`https://radiant-waters-01618.herokuapp.com/items/${id}`, {
            method: "DELETE",
    })
    .then((r) => r.json())
    .then(console.log({id}))
    .then(() => {onDeleteItem(indItem);
    });
}

    return (
        <div>
            <h4>{item_name}</h4>
            <h2>{id}</h2>
            <table>
                <tbody>
                <tr>
                    <td>Manufacturer:</td>
                    <td>{manufacturer}</td>
                </tr>
                <tr>
                    <td>Model:</td>
                    <td>{model}</td>
                </tr>
                </tbody>
            </table>
            <button type="button" className="btn btn-warning btn-circle btn-xl" onClick={handleDeleteClick}>X</button>
        </div>
        );
    };

export default ItemCard;