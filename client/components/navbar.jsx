import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  const [show, setShow] = useState(false);
  let component;
  if (!show) {
    component = <button className="nav-btn"
      onClick={() => setShow(true)}>&#9776;</button>;
  } else {
    component = <div className="nav">
      <button className="nav-btn" onClick={() => setShow(false)}>X</button>;
      <span>
        <h1 style={{ margin: '0' }}>Tracking Trades</h1>
      </span>
      <span className="navLinks">
        <Link to="/dashboard"><button className="link-btn">Dashboard</button></Link>
        <Link to="/tradeLog"><button className="link-btn">Trade Log</button></Link>
        <Link to="/"><button className="link-btn">Log Out</button></Link>
      </span>
    </div>;
  }
  return (
    component
  );
}
