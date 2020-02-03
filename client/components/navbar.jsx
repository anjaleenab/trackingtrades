import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  const [show, setShow] = useState(false);
  let component;
  if (!show) {
    component = <button onClick={() => setShow(true)}>&#9776;</button>;
  } else {
    component = <div className="nav">
      <Link to="/dashboard"><button>Dashboard</button></Link>
      <Link to="/tradeLog"><button>Trade Log</button></Link>
      <Link to="/"><button>Log Out</button></Link>
    </div>;
  }
  return (
    component
  );
}
