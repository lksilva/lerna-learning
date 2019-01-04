import React, { PureComponent } from 'react';
import styled from 'styled-components';

const Button = styled.button`
  color: ${props => (props.disabled ? 'rgba(0, 0, 0, 0.26)' : '#713b9d')};
  border: 1px solid rgba(113, 59, 157, 0.5);
  padding: 8px 16px;
  font-size: 0.875rem;
  min-width: 64px;
  box-sizing: border-box;
  min-height: 36px;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  font-weight: 500;
  line-height: 1.5;
  border-radius: 4px;
  letter-spacing: 0.02857em;
  text-transform: uppercase;
  cursor: pointer;
  display: inline-flex;
  outline: none;
  align-items: center;
  user-select: none;
  text-decoration: none;
  background-color: ${props =>
    props.disabled ? 'rgba(0, 0, 0, 0.12)' : 'transparent'};
  vertical-align: middle;
  justify-content: center;
  pointer-events: ${props => (props.disabled ? 'none' : 'default')}
  :hover {
    border: 1px solid #713b9d;
    background-color: rgba(113, 59, 157, 0.08);
  }
`;

const Text = styled.span`
  width: 100%;
  display: inherit;
  align-items: inherit;
  justify-content: inherit;
`;

class FlatButton extends PureComponent {
  render() {
    const { onClick, children, disabled } = this.props;
    return (
      <Button onClick={onClick} disabled={disabled}>
        <Text>{children}</Text>
      </Button>
    );
  }
}

export default FlatButton;
