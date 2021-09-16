import React from 'react';

function RoomItem({indRoom,onDeleteRoom}) {
    const {id,room} = indRoom;

    function handleDeleteClick() {
        fetch('https://radiant-waters-01618.herokuapp.com/rooms/${id}', {
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
            <button onClick={handleDeleteClick}>Delete Room</button>
        </div>
        );
    };

export default RoomItem;