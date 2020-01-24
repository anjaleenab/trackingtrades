import React, { useState } from 'react';
import Dashboard from './dashboard';

export default function LoginPage(props) {
  const [loggedIn, setloggedIn] = useState(false);
  if (!loggedIn) {
    return (

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
    );
  } else if (loggedIn) {
    return (
      <Dashboard/>
    );
  }
}
