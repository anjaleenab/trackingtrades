import React, { useState } from 'react';
import Header from './header';
import { Redirect } from 'react-router-dom';

export default function LoginPage(props) {
  const [loggedIn, setloggedIn] = useState(false);
  const [notSignedUp, setSignedUp] = useState(false);
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
            <div className="landing-buttons">
              <button
                className="login-btn"
                onClick={() => {
                  setloggedIn(!loggedIn);
                }}
              >Log In</button>
              <button
                className="sign-in-btn"
                onClick={() => {
                  setloggedIn(!notSignedUp);
                }}
              >Sign Up</button>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
    // } else if (notSignedUp) {

  // }
  } else {
    return (
      <React.Fragment>
        <Header />
        <Redirect to='/dashboard' status={loggedIn}/>
      </React.Fragment>
    );
  }
}
