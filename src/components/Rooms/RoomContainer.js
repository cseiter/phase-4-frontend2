import React from 'react';
import RoomCard from './Room';

function RoomContainer( {rooms, onDeleteRoom}) {
    const RoomCards = rooms.map((room) => (
        <RoomCard
            key={room.id}
            indRoom={room}
            onDeleteRoom={onDeleteRoom}
        />
    ));

    return (
        <section>
            <h2>Delete</h2>
            {RoomCards}
        </section>
    );
}

export default RoomContainer;