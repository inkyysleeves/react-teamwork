import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/home';
import Profile from './pages/profile';

const App = () => (
  <Router>
    <Route exact path="/" component={Home} />
    <Route path="/:username" component={Profile} />
  </Router>
);

export default App;
