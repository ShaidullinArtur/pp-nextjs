import React, { Component } from 'react';
import MainTemplate from '../components/templates/MainTemplate';

import styled from 'styled-components';

const Title = styled.h1`
  color: red;
`;

class Home extends Component {
  render() {
    return (
      <MainTemplate>
        <Title>Hello world</Title>
      </MainTemplate>
    )
  }
}

export default Home;
