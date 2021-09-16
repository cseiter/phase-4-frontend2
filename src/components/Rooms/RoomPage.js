import React, {useEffect, useState} from 'react';
import RoomContainer from './RoomContainer';
import RoomForm from './RoomForm';

function RoomPage() {
  const [rooms,setRooms] = useState([]);

  useEffect(() => {
    fetch('https://radiant-waters-01618.herokuapp.com/rooms')
    .then((r) => r.json())
    .then(setRooms);
  },[]);

  function handleAddRoom(newRoom) {
    setRooms([...rooms, newRoom]);
  }

  function handleDeleteRoom(roomToDelete) {
    const updatedRooms = rooms.filter((room) => room.id !== roomToDelete.id);
    setRooms(updatedRooms);
  }
  
  return (
    <main>
      <header>
        <h1>Rooms</h1>
      </header>
      <RoomForm onAddRoom={handleAddRoom}/>
      <RoomContainer 
      rooms={rooms}
      onDeleteRoom={handleDeleteRoom}
      />
    </main>
);
}

export default RoomPage;