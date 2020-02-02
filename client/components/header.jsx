import React from 'react';
import Navbar from './navbar';

export default function Header(props) {
  if (props.status) {
    return (
      <header style={{ fontSize: '1em', marginTop: '2em' }} className="header">
        <h1 className="heading">Tracking Trades</h1>
        <Navbar />
      </header>
    );
  } else {
    return (
      <header style={{ fontSize: '3.5em' }} className="header">
        <h1 className="heading">Tracking Trades</h1>
      </header>
    );
  }

}
