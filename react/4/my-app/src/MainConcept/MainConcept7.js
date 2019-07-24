import React from 'react';

class LogoutButton extends React.Component {
  render() {
    return (
      <button onClick={this.props.onClick}>
        Logout
      </button>
    );
  }
}

class LoginButton extends React.Component {
  render() {
    return (
      <button onClick={this.props.onClick}>
        Login
      </button>
    );
  }
}

class Greeting extends React.Component {
  render() {
    if (this.props.isLoggedIn) return <h1>Welcome back!</h1>;
    else return <h1>Please sign up.</h1>;
  }
}

class WarningBanner extends React.Component {
  render() {
    if (this.props.isLoggedIn) return null;
    else return <p>Warning</p>;
  }
}

class MainConcept7 extends React.Component {
  constructor(props) {
    super(props);
    this.hadleLoginClick = this.hadleLoginClick.bind(this);
    this.hadleLogoutClick = this.hadleLogoutClick.bind(this);
    this.state = { isLoggedIn: false };
  }

  hadleLoginClick() {
    this.setState({ isLoggedIn: true });
  }

  hadleLogoutClick() {
    this.setState({ isLoggedIn: false });
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button;

    if (isLoggedIn) {
      button = <LogoutButton onClick={this.hadleLogoutClick} />
    } else {
      button = <LoginButton onClick={this.hadleLoginClick} />
    }

    return (
      <div>
        <div>
          The user is <b>{isLoggedIn ? 'currently' : 'not'}</b> logged in.
        </div>
        <Greeting isLoggedIn={isLoggedIn} />
        {button}
        <WarningBanner isLoggedIn={isLoggedIn} />
      </div>
    );
  }
}

export default MainConcept7;
