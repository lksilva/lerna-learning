import React from 'react';
import { Header } from 'elements';
export class HomePage extends React.Component {
  render() {
    const styles = {
      content: {
        padding: 8
      }
    };

    return (
      <div style={styles.content}>
        <Header />
        <h1>Home Page</h1>
      </div>
    );
  }
}
