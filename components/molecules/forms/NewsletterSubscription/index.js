import React from 'react';
import styled from 'styled-components';

import Input from '../../../atoms/forms/Input';
import ButtonArrow from '../../../atoms/buttons/Button';
import { ReactComponent as ArrowRight } from '../../../../static/images/icons/arrow_right.svg';

const Wrapper = styled.section`
  background-color: #f3f3f3;
  text-align: center;
  padding: 80px 20px;
  margin: 0 auto;
  position: relative;
  width: 100%;
`;

const Title = styled.h5``;

const LetterForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: stretch;
  max-width: 25rem;
  margin: 20px auto 0;

  input {
    border-radius: 0;
    border-color: #000;
    margin-right: 10px;
    background-color: transparent;
    border-right: 0;
  }
`;

const NewsletterSubscription = () => (
  <Wrapper>
    <Title>Join our mailing list.</Title>
    <LetterForm>
      <Input type="email" name="email" placeholder="Your email address" />
      <ButtonArrow>
        <ArrowRight />
      </ButtonArrow>
    </LetterForm>
  </Wrapper>
);

export default NewsletterSubscription;
