import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import RoomPage from './components/Rooms/RoomPage';
import CategoryPage from './components/Categories/CategoryPage';
import ItemPage from './components/Items/ItemPage';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

function App() {

  return (
    <center>
      <h1>Seiter Home Inventory Tracker</h1>
    <Router>
      <div>
        {/* <Link to="/">Home</Link> */}
        <Link to="/rooms">Rooms</Link>
        <Link to="/categories">Categories</Link>
        <Link to="/items">Items</Link>

        <Switch>
{/*           <Route exact path="/">
            <Home />
          </Route> */}
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
    </Router>
    </center>

 /*    <div className="App">
      <RoomPage />
      <CategoryPage />
    </div> */
  );
}

export default App;
