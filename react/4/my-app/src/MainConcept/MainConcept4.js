import React from 'react';

class WelcomeClass extends React.Component {
  render() {
    return <h1>Hello, {this.props.name} 2</h1>;
  }
}

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

function Comment1(props) {
  return (
    <div className="Comment">
      <div className="UserInfo">
        <img className="Avatar"
          src={props.author.avatarUrl}
          alt={props.author.name}
        />
        <div className="UserInfo-name">
          {props.author.name}
        </div>
      </div>
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {props.date.toLocaleDateString()}
      </div>
    </div>
  );
}

function Avatar(props) {
  return (
    <img className="Avatar"
      src={props.user.avatarUrl}
      alt={props.user.name}
    />
  );
}
function UserInfo(props) {
  return (
    <div className="UserInfo">
      <Avatar user={props.user} />
      <div className="UserInfo-name">
        {props.user.name}
      </div>
    </div>
  );
}

function Comment2(props) {
  return (
    <div className="Comment">
      <UserInfo user={props.author} />
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {props.date.toLocaleDateString()}
      </div>
    </div>
  );
}

function MainConcept4() {
  const comment = {
    date: new Date(),
    text: 'I hope you enjoy learning React!',
    author: {
      name: 'Hello Kitty',
      avatarUrl: 'https://placekitten.com/g/64/64',
    },
  };

  return (
    <div>
      <WelcomeClass name="Sara" />
      <Welcome name="Sara" />
      <Welcome name="Cahal" />
      <Welcome name="Edite" />
      <Comment1
        date={comment.date}
        text={comment.text}
        author={comment.author}
      />
      <Comment2
        date={comment.date}
        text={comment.text}
        author={comment.author}
      />
    </div>
  );
}

export default MainConcept4;
