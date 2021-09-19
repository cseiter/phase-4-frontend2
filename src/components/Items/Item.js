import React from 'react';
import button from 'react-bootstrap/Button';
import '../../App.css';

function ItemCard({indItem,onDeleteItem}) {
    const {id,item_name,manufacturer,model,serial_number,index_items_on_condition_id,index_items_on_room_id,index_items_on_category_id} = indItem;

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
            <table>
                <tbody>
                <tr>
                    <td>Manufacturer:</td>
                    <td>{manufacturer}</td>
                    <td>Model:</td>
                    <td>{model}</td>
                </tr>
                <tr>
                    <td>Serial Number:</td>
                    <td>{serial_number}</td>
                    <td>Condition:</td>
                    <td>{index_items_on_condition_id}</td>
                </tr>
                <tr>
                    <td>Room:</td>
                    <td>{index_items_on_room_id}</td>
                    <td>Category:</td>
                    <td>{index_items_on_category_id}</td>
                </tr>
                </tbody>
            </table>
            <button type="button" className="btn btn-danger" onClick={handleDeleteClick}>X</button>
        </div>
        );
    };

export default ItemCard;