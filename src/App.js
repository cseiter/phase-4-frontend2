import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Tabs, Tab} from "react-bootstrap";
import RoomPage from './components/Rooms/RoomPage';
import CategoryPage from './components/Categories/CategoryPage';
import ItemPage from './components/Items/ItemPage';
import HomePage from './components/HomePage';

function App() {

  return (
    <center>
      <h1>Seiter Home Inventory Tracker</h1>

    <Tabs fill defaultActiveKey="home" fullWidth={true} indicatorColor="secondary" centered>
      <Tab eventKey="home" title="Home">
        <HomePage />
      </Tab>
      <Tab eventKey="items" title="Items">
        <ItemPage />
      </Tab>
      <Tab eventKey="rooms" title="Rooms">
        <RoomPage />
      </Tab>
      <Tab eventKey="categories" title="Categories">
        <CategoryPage />
      </Tab>
    </Tabs>
    </center>
  );
}

export default App;
