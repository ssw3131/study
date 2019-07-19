import React from 'react';

class MainConcept6 extends React.Component {
	constructor( props ) {
		super( props );
		this.state = {
			isToggle1: true,
			isToggle2: true,
			counter: 0,
	  };
    this.hadleClick1 = this.hadleClick1.bind( this );
	}

	hadleClick1( e ) {
		e.preventDefault();
		this.setState( state => ( { isToggle1: !state.isToggle1 } ) );
	}

	hadleClick2 = ( e ) => {
		e.preventDefault();
		this.setState( state => ( { isToggle2: !state.isToggle2 } ) );
	}

	hadleClick3 = ( id1, id2, e ) => {
		e.preventDefault();
		this.setState( state => ( { counter: state.counter + id1 } ) );
	}

	render() {
		return (
      <div>
				<a href="#" onClick={ this.hadleClick1 }>
				{ this.state.isToggle1 ? 'ON' : 'OFF' }
				</a>
				<br/>
				<a href="#" onClick={ this.hadleClick2 }>
				{ this.state.isToggle2 ? 'ON' : 'OFF' }
				</a>
				<br/>
				<a href="#" onClick={ this.hadleClick3.bind( this, 1, 1 ) }>
				{ 'Counter : ' + this.state.counter }
				</a>
				<br/>
				<a href="#" onClick={ ( e ) => this.hadleClick3( 2, 2, e ) }>
				{ 'Counter : ' + this.state.counter }
				</a>
			</div>
		);
	}
}

export default MainConcept6;
