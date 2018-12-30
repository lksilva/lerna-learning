import React, { PureComponent } from 'react';
import styles from './FlatButton.module.scss';

class FlatButton extends PureComponent {
  render() {
    const { onClick, children } = this.props;
    return (
      <button className={styles.btn} type="button" onClick={onClick}>
        <span>{children}</span>
      </button>
    );
  }
}

export default FlatButton;
