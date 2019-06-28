import React from "react";
import styled from "styled-components";

import Input from "../../atoms/forms/Input";
import ButtonArrow from "../../atoms/buttons/ButtonArrow";

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
`;

const CarouselWrapper = styled.div`
  height: calc(100vh - 90px);
`;

const Image = styled.div`
  height: 100%;
  background-image: url("https://picsum.photos/id/299/1300/700");
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
`;

const InputWrapper = styled.div`
  width: 100%;
  margin-right: 5px;

  input {
    border: 0;
    border-radius: 0;
  }
`;

const Carousel = () => (
  <Wrapper>
    <Content>
      <Title>Park and explore your city.</Title>
      <Form>
        {/* <Select /> */}
        <InputWrapper>
          <Input
            type="search"
            name="search"
            placeholder="Destination or Loaction #"
          />
        </InputWrapper>
        <ButtonArrow />
      </Form>
    </Content>
    <CarouselWrapper>
      <Image />
    </CarouselWrapper>
  </Wrapper>
);

export default Carousel;
