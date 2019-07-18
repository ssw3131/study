import React from 'react';
import { Link } from 'react-router-dom';

function AppRouterList() {
  return (
    <div>
      <ul>
        <li><Link to="/App">App</Link></li>
        <li><Link to="/MainConcept2">2 JSX 소개</Link></li>
        <li><Link to="/MainConcept4">4 Components and Props</Link></li>
        <li><Link to="/MainConcept5">5 State와 생명주기</Link></li>
      </ul>
    </div>
  );
}

export default AppRouterList;
