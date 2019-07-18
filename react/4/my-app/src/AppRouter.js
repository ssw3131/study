import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import AppRouterList from './AppRouterList';
import App from './App';
import MainConcept2 from './MainConcept/MainConcept2';
import MainConcept4 from './MainConcept/MainConcept4';

function AppRouter() {
  return (
    <Router>
      <Route exact path="/" component={AppRouterList} />
      <Route path="/App" component={App} />
      <Route path="/MainConcept2" component={MainConcept2} />
      <Route path="/MainConcept4" component={MainConcept4} />
    </Router>
  );
}

export default AppRouter;
