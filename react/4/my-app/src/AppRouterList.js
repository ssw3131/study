import React from 'react';
import { Link } from 'react-router-dom';

function AppRouterList() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/App">App</Link>
        </li>
        <li>
          <Link to="/MainConcept1">JSX 소개</Link>
        </li>
      </ul>
    </div>
  );
}

export default AppRouterList;
