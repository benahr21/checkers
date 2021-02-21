import './App.css';
import Row from './components/Row';
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        [' ', 'o', ' ', 'o', ' ', 'o', ' ', 'o'],
        ['o', ' ', 'o', ' ', 'o', ' ', 'o', ' '],
        [' ', 'o', ' ', 'o', ' ', 'o', ' ', 'o'],
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
        ['O', ' ', 'O', ' ', 'O', ' ', 'O', ' '],
        [' ', 'O', ' ', 'O', ' ', 'O', ' ', 'O'],
        ['O', ' ', 'O', ' ', 'O', ' ', 'O', ' '],
      ],
      whiteTurn: true,
      history: [],
    };
  }
  render() {
    return (
      <table className='no-border'>
        <thead>
          <tr>
            <th></th>
            <th>a</th>
            <th>b</th>
            <th>c</th>
            <th>d</th>
            <th>e</th>
            <th>f</th>
            <th>g</th>
            <th>h</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {this.state.data.map((rowData, index) => {
            const number = this.state.data.length - index - 1;

            return (
              <Row
                key={number.toString()}
                number={number}
                data={rowData}
                gameState={this.state}
              />
            );
          })}
        </tbody>
        <tfoot>
          <tr>
            <th></th>
            <th>a</th>
            <th>b</th>
            <th>c</th>
            <th>d</th>
            <th>e</th>
            <th>f</th>
            <th>g</th>
            <th>h</th>
            <th></th>
          </tr>
        </tfoot>
      </table>
    );
  }
}
export default App;
