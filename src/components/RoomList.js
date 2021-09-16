import RoomItem from './Room';

function RoomList( {rooms, onDeleteRoom}) {
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

export default RoomList;