import React from 'react';


function MainConcept1() {
  const name = 'Josh Perez';
  const user = {
    firstName : 'Harper',
    lastName : 'Perez',
    avatarUrl : 'avatar',
  }

  function formatName(user) {
    return user.firstName + ' ' + user.lastName;
  }

  function getGreeting(user) {
    if (user) {
      return <h1>Hello, {formatName(user)}!</h1>;
    }
    return <h1>Hello, Stranger.</h1>;
  }

  return (
    <div>
      <h1>Hello, {name}</h1>
      {getGreeting(user)}
      {getGreeting()}
      <div tabIndex='0'>tabIndex</div>
      <img src={user.avatarUrl}></img>
      <img src={user.avatarUrl} />
    </div>
  );
}

export default MainConcept1;
