import React from 'react';
import Header from './header';
import LoginPage from './login';

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
        <LoginPage></LoginPage>
      </React.Fragment>
    );
  }
}
