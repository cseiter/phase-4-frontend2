import React, {useEffect, useState} from 'react';
import RoomContainer from './RoomContainer';
import RoomForm from './RoomForm';

function RoomPage() {
  const [showForm, setShowForm] = useState(false);
  const [rooms,setRooms] = useState([]);

  useEffect(() => {
    fetch('https://radiant-waters-01618.herokuapp.com/rooms')
    .then((r) => r.json())
    .then(setRooms);
  },[]);

/*   function handleClick() {
    setShowForm((showForm) => !showForm);
  } */

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
        <RoomForm onAddRoom={handleAddRoom}/>
{/*         {showForm ? <RoomForm onAddRoom={handleAddRoom} /> : null}
        <div>
          <button onClick={handleClick}>Add a room</button>
        </div> */}
      </header>
      <RoomContainer 
      rooms={rooms}
      onDeleteRoom={handleDeleteRoom}
      />
    </main>
);
}

export default RoomPage;