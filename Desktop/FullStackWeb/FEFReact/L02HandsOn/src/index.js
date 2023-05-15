import React from 'react';
import ReactDOM from 'react-dom';

class State extends React.Component {
  stateInfo = () => {
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>State</th>
              <th>Population</th>
              <th>Capital</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Idaho</td>
              <td></td>
              <td>Boise</td>
            </tr>
            <tr>
              <td>Tennessee</td>
              <td>6.651 million</td>
              <td>Nashville</td>
            </tr>
            <tr>
              <td>Maine</td>
              <td>1.331 million</td>
              <td>Augusta</td>
            </tr>
            <tr>
              <td>Wisconsin</td>
              <td>5.779 million</td>
              <td>Madison</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  };

  render() {
    return this.stateInfo();
  }
}
ReactDOM.render(<State />, document.getElementById('root'));