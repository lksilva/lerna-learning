import React from 'react';
import { Header, FlatButton } from 'elements';
export class HomePage extends React.Component {
  handleButton = () => {
    console.log('Já deu certo pivete doido');
  };

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
        <FlatButton onClick={this.handleButton}>vdc</FlatButton>
      </div>
    );
  }
}
