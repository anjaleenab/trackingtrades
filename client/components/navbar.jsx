import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  return (
    <div>
      <Link to="/dashboard"><button>Dashboard</button></Link>
      <Link to="/tradeLog"><button>Trade Log</button></Link>
      <Link to="/"><button>Log Out</button></Link>
    </div>
  );
}
