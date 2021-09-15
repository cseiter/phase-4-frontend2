import React, {useEffect,useState} from 'react';
import RoomItem from './Room';

function RoomList({onDeleteRoom}) {
    const [rooms,setRooms] = useState([]);
    useEffect (() => {
        fetch('https://radiant-waters-01618.herokuapp.com/rooms')
        .then((r) => r.json())
        .then((rooms) => {setRooms(rooms);
        });
    },[]);

    const RoomItems = rooms.map((r) => (
        <RoomItem
        key={r.id}
        room = {r}
        onDeleteRoom={onDeleteRoom}
        />
    ));

    return (
        <section>
            <h1>Rooms</h1>
            <ul>{roomItems}</ul>
        </section>
    );
}

export default RoomList;