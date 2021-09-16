import React from 'react';
import button from 'react-bootstrap/Button';
import '../App.css';

function RoomCard({indRoom,onDeleteRoom}) {
    const {id,room} = indRoom;

    function handleDeleteClick() {
        fetch(`https://radiant-waters-01618.herokuapp.com/rooms/${id}`, {
            method: "DELETE",
    })
    .then((r) => r.json())
    .then(console.log({id}))
    .then(() => {onDeleteRoom(indRoom);
    });
}

    return (
        <div>
            <h4>{room}</h4>
            <button type="button" className="btn btn-default btn-circle" onClick={handleDeleteClick}>X</button>
        </div>
        );
    };

export default RoomCard;