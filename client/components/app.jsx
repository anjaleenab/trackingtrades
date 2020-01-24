import React from 'react';
import LoginPage from './login';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      trades: [],
      loggedIn: false
    };
  }
  render() {
    return (
      <LoginPage></LoginPage>
    );
  }
}
