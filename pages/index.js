import React from "react";

import MainTemplate from "../components/templates/MainTemplate";
import NewsletterSubscription from "../components/molecules/forms/NewsletterSubscription";
import Carousel from "../components/molecules/Carousel";

const Home = () => {
  return (
    <MainTemplate>
      <Carousel />

      <NewsletterSubscription />
    </MainTemplate>
  );
};

export default Home;
