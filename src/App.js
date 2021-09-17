import './App.css';
import RoomPage from './components/Rooms/RoomPage';
import CategoryPage from './components/Categories/CategoryPage';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

function App() {

  return (
    <center>
    <Router>
      <div>
        {/* <Link to="/">Home</Link> */}
        <Link to="/rooms">Rooms</Link>
        <Link to="/categories">Categories</Link>

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
