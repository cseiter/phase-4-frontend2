import React from 'react';

function RoomItem({room,onDeleteRoom}) {
    const {id,room} = indRoom;

    function handleDeleteClick() {
        fetch('https://radiant-waters-01618.herokuapp.com/rooms/${id}', {
            method: "DELETE",
    })
    .then((r) => r.json())
    .then(() => {onDeleteRoom(indRoom);
    });
}

return (
    <li>
        <h4> Room {id}</h4>
        <button onClick={handleDeleteClick}>Delete Room</button>
        <h5>{room}</h5>
    </li>
);
}

export default RoomItem;