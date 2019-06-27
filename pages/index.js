import React, { Component } from 'react';

import MainTemplate from '../components/templates/MainTemplate';
import NewsletterSubscription from '../components/molecules/Forms/NewsletterSubscription';
import Carousel from '../components/molecules/Carousel';

class Home extends Component {
  render() {
    return (
      <MainTemplate>
        <Carousel />

        <NewsletterSubscription />
      </MainTemplate>
    )
  }
}

export default Home;
