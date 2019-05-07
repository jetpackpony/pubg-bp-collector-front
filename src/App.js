import React from 'react';
import CollectForm from './CollectForm';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Graphs from './Graphs';
import './App.scss';

function App({ firebase }) {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Graphs</Link>
            </li>
            <li>
              <Link to="/collect">Collection Form</Link>
            </li>
          </ul>
        </nav>
      </div>
      <Route path="/" exact component={Graphs} />
      <Route
        path="/collect"
        render={(routeProps) => (
          <CollectForm {...routeProps} firebase={firebase} />
        )}
      />
    </Router>
  );
}

export default App;