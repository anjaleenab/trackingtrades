import React from 'react';

export default function LoginPage(props) {
  return (
    <div className="login">
      <div className="login-image"></div>
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
        <button className="login-btn">Log In</button>
      </div>
    </div>
  );
}
