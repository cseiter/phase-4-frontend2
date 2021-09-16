import React, {useState} from "react";

function RoomForm({onAddRoom}) {

    const [formData, setFormData] = useState({
        room: "",
    });

    function handleChange(e) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    }

    function handleSubmit(e) {
        e.preventDefault();

        const newRoom = {...formData};

        fetch('https://radiant-waters-01618.herokuapp.com/rooms', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newRoom),
        })
        .then((r) => r.json())
        .then(console.log({newRoom}))
        .then(onAddRoom);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h2>Add</h2>
                <input 
                type="text"
                name="room"
                onChange={handleChange}
                value={formData.room}
                placeholder="Enter room name"
                />
                <br />
                <input 
                type="submit"
                name="submit"
                value="Save Room"
                />
            </form>
        </div>
    );
};

export default RoomForm;