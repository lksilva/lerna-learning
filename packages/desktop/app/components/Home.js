// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FlatButton } from 'elements';
import routes from '../constants/routes';
import styles from './Home.css';

type Props = {};

export default class Home extends Component<Props> {
  props: Props;

  handleClick = () => {
    console.log('Clicando na parada...');
  };

  render() {
    return (
      <div className={styles.container} data-tid="container">
        <h2>Electron APP</h2>
        <Link to={routes.COUNTER}>
          <FlatButton onClick={this.handleClick}>Navegar</FlatButton>
        </Link>
      </div>
    );
  }
}
