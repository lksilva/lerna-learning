import React, { PureComponent } from 'react';
import { Header } from 'elements';
import { HomePage } from './features/home/home-page';

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <Header>React Template</Header>
        <HomePage />
      </div>
    );
  }
}
