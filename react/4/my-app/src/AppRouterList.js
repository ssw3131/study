import React from 'react';
import { Link } from 'react-router-dom';

function AppRouterList() {
  return (
    <div>
      <ul>
        <li><Link to="/App">App</Link></li>
        <li><Link to="/MainConcept2">JSX 소개</Link></li>
        <li><Link to="/MainConcept4">Components and Props</Link></li>
      </ul>
    </div>
  );
}

export default AppRouterList;
