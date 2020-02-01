import React, { useState } from 'react';
import Header from './header';
import Dashboard from './dashboard';

export default function LoginPage(props) {
  const [loggedIn, setloggedIn] = useState(false);
  if (!loggedIn) {
    return (
      <React.Fragment>
        <Header status={loggedIn}/>
        <div className="login">
          <div className="login-image">
          </div>
          <div className="loginNecessities">
            <div className="login-section">
              <div className="login-input1">
                <label>Username:</label>
                <input></input>
              </div>
              <div className="login-input2">
                <label>Password:</label>
                <input></input>
              </div>
            </div>
            <button
              className="login-btn"
              onClick={() => setloggedIn(!loggedIn)}
            >Log In</button>
          </div>
        </div>
      </React.Fragment>

    );
  } else {
    return (
      <React.Fragment>
        <Header status={loggedIn} />
        <Dashboard trades={props.trades} stateUpdate={props.stateUpdate}
          deleteTrades={props.deleteTrades} setTradesForDelete={props.setTradesForDelete}
          tradesToDelete={props.tradesToDelete} addTrade={props.addTrade}/>
      </React.Fragment>
    );
  }
}
