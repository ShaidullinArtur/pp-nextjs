import React from "react";
import styled from "styled-components";
import Slider from "react-slick";

import Select from "../../atoms/forms/Select";
import Input from "../../atoms/forms/Input";
import ButtonArrow from "../../atoms/buttons/ButtonArrow";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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

const Form = styled.form`
  display: flex;
  justify-content: center;
  max-width: 37.5rem;
  margin: 0 auto;
  width: 100%;
  margin-top: 40px;

  @media screen and (max-width: 501px) {
    flex-wrap: wrap;
    justify-content: flex-start;
  }

  select {
    width: calc((100% - 79px) / 2);

    @media screen and (max-width: 501px) {
      width: 100%;
      margin-bottom: 10px;
    }
  }

  input {
    width: calc((100% - 79px) / 2);
    margin-left: 5px;
    margin-right: 10px;
    border: 0;
    border-radius: 0;

    @media screen and (max-width: 501px) {
      width: 100%;
      margin: 0 0 10px;
    }
  }
`;

const CarouselWrapper = styled.div`
  height: calc(100vh - 90px);
`;

const Carousel = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: false,
    fade: true,
    speed: 100
  };

  return (
    <Wrapper>
      <Content>
        <Title>Park and explore your city.</Title>
        <Form>
          <Select />
          <Input
            type="search"
            name="search"
            placeholder="Destination or Loaction #"
          />
          <ButtonArrow />
        </Form>
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
