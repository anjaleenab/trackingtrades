import React from 'react';

export default function LoginPage(props) {
  return (
    <div className="login">
      <div className="login-image"></div>
      <div className="login-section">
        <div>
          <label>Username:</label>
          <input></input>
        </div>
        <div>
          <label>Password:</label>
          <input></input>
        </div>
      </div>
    </div>
  );
}
