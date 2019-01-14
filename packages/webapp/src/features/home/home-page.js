import React from 'react';
import { Header, FlatButton } from 'elements';
export class HomePage extends React.Component {
  handleButton = () => {
    console.log('Logar usuário');
  };

  render() {
    const styles = {
      content: {
        padding: 8
      }
    };

    return (
      <div style={styles.content}>
        <Header>Header Compartilhados</Header>
        <FlatButton onClick={this.handleButton}>Login</FlatButton>
      </div>
    );
  }
}
