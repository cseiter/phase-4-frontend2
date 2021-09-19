import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Tabs, Tab} from "react-bootstrap";
import RoomPage from './components/Rooms/RoomPage';
import CategoryPage from './components/Categories/CategoryPage';
import ItemPage from './components/Items/ItemPage';
import HomePage from './components/HomePage';
//import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

function App() {

  return (
    <center>
      <h1>Seiter Home Inventory Tracker</h1>
{/*     <Router>
      <div>
        <Link to="/">Home</Link>
        <Link to="/rooms">Rooms</Link>
        <Link to="/categories">Categories</Link>
        <Link to="/items">Items</Link>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/rooms">
            <RoomPage />
          </Route>
          <Route exact path="/categories">
            <CategoryPage />
          </Route>
          <Route exact path="/items">
            <ItemPage />
          </Route>
        </Switch>
      </div>
    </Router> */}
    <Tabs defaultActiveKey="home" fullWidth={true} indicatorColor="secondary" centered>
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

 /*    <div className="App">
      <RoomPage />
      <CategoryPage />
    </div> */
  );
}

export default App;
