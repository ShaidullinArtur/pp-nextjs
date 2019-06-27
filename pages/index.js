import React, { Component } from 'react';
import styled from 'styled-components';

import MainTemplate from '../components/templates/MainTemplate';
import NewsletterSubscription from '../components/molecules/Forms/NewsletterSubscription';

const Title = styled.h1`
  color: red;
`;

class Home extends Component {
  render() {
    return (
      <MainTemplate>
        <Title>Hello world</Title>
        <NewsletterSubscription />
      </MainTemplate>
    )
  }
}

export default Home;
