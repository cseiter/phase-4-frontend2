import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState} from 'react';
import RoomList from './components/RoomList';

function App() {
  const [showForm, setShowForm] = useState(false);
  const [rooms,setRooms] = useState([]);

  useEffect(() => {
    fetch('https://radiant-waters-01618.herokuapp.com/rooms')
    .then((r) => r.json())
    .then(setRooms);
  },[]);

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  function handleDeleteRoom(roomToDelete) {
    const updatedRooms = rooms.filter((room) => room.id !== roomToDelete.id);
    setRooms(updatedRooms);
  }

  return (
    <div className="App">
      Hello
      <main>
        <RoomList 
        rooms={rooms}
        onDeleteRoom={handleDeleteRoom}
        />
      </main>
    </div>
  );
}

export default App;
