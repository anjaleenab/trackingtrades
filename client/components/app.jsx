import React from 'react';
import LoginPage from './login';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      trades: [],
      loggedIn: false,
      tradeLogMode: false
    };
  }
  render() {
    return (
      <LoginPage trades={this.state.trades}></LoginPage>
    );
  }
}
