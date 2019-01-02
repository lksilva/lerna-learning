import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 54px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px;
  background-color: #2196f3;
  color: #ffffff;
`;

const Title = styled.h1`
  font-size: 20px;
  font-weight: normal;
`;

export default class Header extends React.PureComponent {
  render() {
    const { children } = this.props;

    return (
      <Container>
        <Title>{children}</Title>
      </Container>
    );
  }
}
