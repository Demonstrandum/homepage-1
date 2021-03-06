import React from 'react';

import './App.css';

import Card from './components/card/Card.jsx';
import Background from './Background.jsx';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

function App() {
  return (
    <>
      <Routes/>
      <Background/>
    </>
  );
}

function Routes() {
  return (
    <Router basename={window.location.pathname || '/'}>
      <Switch>
        <Route path="/" component={Card} />
      </Switch>
    </Router>
  );
}

export default App;
