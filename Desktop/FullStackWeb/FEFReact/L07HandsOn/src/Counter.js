import React from 'react';
import { connect } from 'react-redux';

class Counter extends React.Component {
  increment1 = () => {
    this.props.dispatch({
      type: 'Increment1'
    });
  };

  increment2 = () => {
    this.props.dispatch({
      type: 'Increment2'
    });
  };

  decrement1 = () => {
    this.props.dispatch({
      type: 'Decrement1'
    });
  };

  decrement2 = () => {
    this.props.dispatch({
      type: 'Decrement2'
    });
  };

  reset = () => {
    this.props.dispatch({
      type: 'Reset'
    });
  };

  render() {
    return (
      <div>
        <h2>Counter</h2>
        <div>
        <span>{this.props.count}</span><br></br>
          <button onClick={this.decrement1}>Decrease By 1</button><br></br>
          <button onClick={this.decrement2}>Decrease By 10</button><br></br>
          {/* <span>{this.props.count}</span> */}
          <button onClick={this.increment1}>Increase By 1</button><br></br>
          <button onClick={this.increment2}>Increase By 5</button>

          <br />
          <button onClick={this.reset}>Reset</button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    count: state.count
  };
}

export default connect(mapStateToProps)(Counter);