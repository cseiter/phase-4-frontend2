import React from 'react';
import RoomItem from './Room';

function RoomContainer( {rooms, onDeleteRoom}) {
    const RoomItems = rooms.map((room) => (
        <RoomItem
            key={room.id}
            badge={room}
            onDeleteRoom={onDeleteRoom}
        />
    ));

    return (
        <section>
            <h1>Rooms</h1>
            <ul>{RoomItems}</ul>
        </section>
    );
}

export default RoomContainer;