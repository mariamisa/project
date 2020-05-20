import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Register from './componant/Register'
import Login from './componant/Login'
import AddBlog from './componant/AddBlog'
import LogOut from './componant/Logout'
import Home from './componant/Home'

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <header className="header">
            <nav className="nav-container">
              <ul className="nav nav-item nav-left">
                  <li>Anime Blog</li>
              </ul>
              <ul className="nav nav-container nav-right">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/register">Register</Link>
              </li>
              <li>
                <Link to="/login">login</Link>
              </li>
              <li>
                <Link to="/addBlog">Add Blog</Link>
              </li>
              <li>
                <Link to="/logout">LogOut</Link>
              </li>
              </ul>
            </nav>
          </header>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/register">
              <Register />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/addBlog">
              <AddBlog />
            </Route>
            <Route exact path="/logout">
              <LogOut />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
