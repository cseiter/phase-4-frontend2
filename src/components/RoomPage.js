import React, {useEffect, useState} from 'react';
import RoomContainer from './RoomContainer';

function RoomPage() {
  // const [showForm, setShowForm] = useState(false);
  const [rooms,setRooms] = useState([]);

  useEffect(() => {
    fetch('https://radiant-waters-01618.herokuapp.com/rooms')
    .then((r) => r.json())
    .then(setRooms);
  },[]);

//  function handleClick() {
//    setShowForm((showForm) => !showForm);
//  }

  function handleDeleteRoom(roomToDelete) {
    const updatedRooms = rooms.filter((room) => room.id !== roomToDelete.id);
    setRooms(updatedRooms);
  }
  
  return (
    <main>
      <RoomContainer 
      rooms={rooms}
      onDeleteRoom={handleDeleteRoom}
      />
    </main>
);
}

export default RoomPage;