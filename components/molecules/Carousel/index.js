import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import DestinationSearchForm from '../forms/DestinationSearchForm';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Wrapper = styled.section`
  position: relative;
`;

const Content = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 3;
  width: 100%;
  max-width: 78.75rem;
  text-align: center;
  padding: 40px 20px;
  margin: 0 auto;
`;

const Title = styled.h1`
  color: #fff;
`;

const CarouselWrapper = styled.div`
  height: calc(100vh - 90px);
  overflow: hidden;
  background-color: var(--secondary);
  div {
    height: 100%;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .slick-slider-dots .slick-dots {
    bottom: 10px;
  }

  .slick-slider-dots .slick-dots li {
    margin: 0;
  }

  .slick-slider-dots .slick-dots li button:before {
    color: white;
    font-size: 30px;
    opacity: 1;
  }

  .slick-slider-dots .slick-dots .slick-active button:before {
    opacity: 1;
    color: #d21115;
  }
`;

const Carousel = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    lazyLoad: true,
    adaptiveHeight: true,
    fade: true,
    className: 'slick-slider-dots',
    speed: 500,
  };

  return (
    <Wrapper>
      <Content>
        <Title>Park and explore your city.</Title>
        <DestinationSearchForm />
      </Content>
      <CarouselWrapper>
        <Slider {...settings}>
          <div>
            <img src="https://picsum.photos/id/290/1300/700" alt="" />
          </div>
          <div>
            <img src="https://picsum.photos/id/291/1300/700" alt="" />
          </div>
          <div>
            <img src="https://picsum.photos/id/292/1300/700" alt="" />
          </div>
        </Slider>
      </CarouselWrapper>
    </Wrapper>
  );
};

export default Carousel;
