import React from 'react';

export default class TradeInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <tr className="data-row-input">
        <input></input>
        <input></input>
        <input></input>
        <input></input>
        <input></input>
        <input></input>
      </tr>
    );
  }
}
