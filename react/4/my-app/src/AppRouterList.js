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
        <li><Link to="/MainConcept6">6 이벤트 처리하기</Link></li>
        <li><Link to="/MainConcept7">7 조건부 렌더링</Link></li>
        <li><Link to="/MainConcept8">8 리스트와 Key</Link></li>
        <li><Link to="/MainConcept9">9 폼</Link></li>
        <li><Link to="/MainConcept10">10 State 끌어올리기</Link></li>
        <li><Link to="/MainConcept11">11 합성 vs 상속</Link></li>
        <li><Link to="/MainConcept12">12 React로 생각하기</Link></li>
      </ul>
    </div>
  );
}

export default AppRouterList;
