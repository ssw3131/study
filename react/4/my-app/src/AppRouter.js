import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import AppRouterList from './AppRouterList';
import App from './App';
import MainConcept2 from './MainConcept/MainConcept2';
import MainConcept4 from './MainConcept/MainConcept4';
import MainConcept5 from './MainConcept/MainConcept5';
import MainConcept6 from './MainConcept/MainConcept6';
import MainConcept7 from './MainConcept/MainConcept7';
import MainConcept8 from './MainConcept/MainConcept8';
import MainConcept9 from './MainConcept/MainConcept9';
import MainConcept10 from './MainConcept/MainConcept10';
import MainConcept11 from './MainConcept/MainConcept11';

function AppRouter() {
  return (
    <Router>
      <Route exact path="/" component={AppRouterList} />
      <Route path="/App" component={App} />
      <Route path="/MainConcept2" component={MainConcept2} />
      <Route path="/MainConcept4" component={MainConcept4} />
      <Route path="/MainConcept5" component={MainConcept5} />
      <Route path="/MainConcept6" component={MainConcept6} />
      <Route path="/MainConcept7" component={MainConcept7} />
      <Route path="/MainConcept8" component={MainConcept8} />
      <Route path="/MainConcept9" component={MainConcept9} />
      <Route path="/MainConcept10" component={MainConcept10} />
      <Route path="/MainConcept11" component={MainConcept11} />
    </Router>
  );
}

export default AppRouter;
