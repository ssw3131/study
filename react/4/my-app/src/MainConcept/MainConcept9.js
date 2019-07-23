import React from 'react';

class MainConcept9 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      textareaValue: '초기값',
      selectValue: 'lime',
      isGoing: true,
      type: 'B',
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleTextareaChange = this.handleTextareaChange.bind(this);
    this.hadleSelectChange = this.hadleSelectChange.bind(this);
    this.handleCommonChange = this.handleCommonChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    this.setState({ inputValue: event.target.value.toUpperCase() });
  }

  handleTextareaChange(event) {
    this.setState({ textareaValue: event.target.value });
  }

  hadleSelectChange(event) {
    this.setState({ selectValue: event.target.value });
  }

  handleCommonChange(event) {
    const target = event.target;
    const name = target.name;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    alert('A name was submitted: ' + this.state.inputValue);
    console.log(this.state);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <lable>
          Name : <input type="text" value={this.state.inputValue} onChange={this.handleInputChange} />
        </lable>
        <br />

        <lable>
          Essay : <textarea value={this.state.textareaValue} onChange={this.handleTextareaChange} />
        </lable>
        <br />

        <lable>
          Pick your favorite flavor:
          <select value={this.state.selectValue} onChange={this.hadleSelectChange}>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </lable>
        <br />

        <lable>
          Is going : <input name="isGoing" type="checkbox" checked={this.state.isGoing} onChange={this.handleCommonChange} />
        </lable>
        <br />

        <lable>
          Selet type :
          <input name="type" type="radio" value="A" checked={this.state.type === 'A'} onChange={this.handleCommonChange} />A
          <input name="type" type="radio" value="B" checked={this.state.type === 'B'} onChange={this.handleCommonChange} />B
          <input name="type" type="radio" value="C" checked={this.state.type === 'C'} onChange={this.handleCommonChange} />C
        </lable>
        <br />

        <input type="submit" value="전송" />
      </form>
    );
  }
}

export default MainConcept9;
