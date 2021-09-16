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
            <h1>Rooms</h1>
            {RoomCards}
        </section>
    );
}

export default RoomContainer;