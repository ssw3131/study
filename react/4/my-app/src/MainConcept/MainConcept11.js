import React from 'react';

class FancyBorder extends React.Component {
  render() {
    return (
      <div className={'FancyBorder FancyBorder-' + this.props.color}>
        {this.props.children}
      </div>
    );
  }
}

class Dialog extends React.Component {
  render() {
    return (
      <div>
        <FancyBorder color="blue">
          <h1 className="Dialog-title">{this.props.title}</h1>
          <p className="Dialog-message">{this.props.message}</p>
          {this.props.children}
        </FancyBorder>
        <FancyBorder color="blue">
          <h2 className="Dialog-title">Welcome2</h2>
        </FancyBorder>
      </div>
    );
  }
}

class WelcomeDialog extends React.Component {
  render() {
    return (
      <div>
        <Dialog title="Welcome" message="Thank you for visiting our spacecraft!">
          <p>This is children contents</p>
        </Dialog>
      </div>
    );
  }
}

//-------------------------------------------------------------------------------------------//

class SplitPane extends React.Component {
  render() {
    return (
      <div className="SplitPane">
        <div className="SplitPane-left">{this.props.left}</div>
        <div className="SplitPane-right">{this.props.right}</div>
      </div>
    );
  }
}

class SplitLeft extends React.Component {
  render() {
    return (
      <span>left</span>
    );
  }
}

class SplitRight extends React.Component {
  render() {
    return (
      <span>right</span>
    );
  }
}

class SplitApp extends React.Component {
  render() {
    return (
      <SplitPane left={<SplitLeft />} right={<SplitRight />} />
    );
  }
}

//-------------------------------------------------------------------------------------------//

class MainConcept11 extends React.Component {
  render() {
    return (
      <div>
        <WelcomeDialog />
        <SplitApp />
      </div>
    );
  }
}

export default MainConcept11;
