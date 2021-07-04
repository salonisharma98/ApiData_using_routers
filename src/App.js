import './App.css';
import UserId from './UserId.js';
import UsersData from './UsersData.js';
import Nav from './Nav.js';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="container-fluid">
        <Switch>
          <Route path="/" exact component={UsersData} />
          <Route path="/UsersData/:id" component={UserId} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
