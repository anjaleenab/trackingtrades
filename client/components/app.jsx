import React from 'react';
import Header from './header';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      trades: []
    };
  }
  render() {
    return (
      <React.Fragment>
        <Header />
        <div>Testing 123</div>
      </React.Fragment>

    );
  }
}
