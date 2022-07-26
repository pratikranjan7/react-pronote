import React from 'react';
// import HigherOrderFunctions from './components/hof/HigherOrderFunctions';
import './App.css';

class Main extends React.Component {

  constructor(props) {
    super(props);
    // to bind the method with event handler without (). 
    // this.handleChange = this.handleChange.bind(this);

    this.state =
    {
      value: ''
    };
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  render() {
    return <>
      <div className="container">
        <div className="input">
          <h3>Input</h3>
          <textarea className="input-text" onChange={(event)=> this.handleChange(event)} defaultValue={this.state.value} />
        </div>
        <div className="output">
          <h3>Pro Note</h3>
          <div className="output-text">{this.state.value}</div>
        </div>
      </div>
    </>
  }
}

export default Main