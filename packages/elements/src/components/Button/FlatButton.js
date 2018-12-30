import React from 'react';
import '../../styles/css/button.css';

const FlatButton = ({ onClick, children }) => (
  <button className="btn" type="button" onClick={onClick}>
    <span>{children}</span>
  </button>
);

export default FlatButton;
