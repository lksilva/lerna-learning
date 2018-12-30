import React from 'react';
import './button.css';

const FlatButton = ({ onClick, children }) => (
  <button className="btn" type="button" onClick={onClick}>
    <span>{children}</span>
  </button>
);

export default FlatButton;
