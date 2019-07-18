import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import AppRouterList from './AppRouterList';
import App from './App';
import MainConcept1 from './MainConcept/MainConcept1';

function AppRouter() {
  return (
    <Router>
      <Route exact path="/" component={AppRouterList} />
      <Route path="/App" component={App} />
      <Route path="/MainConcept1" component={MainConcept1} />
    </Router>
  );
}

export default AppRouter;
