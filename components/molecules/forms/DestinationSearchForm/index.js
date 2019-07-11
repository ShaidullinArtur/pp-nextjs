import React from 'react';
import styled from 'styled-components';

import Select from '../../../atoms/forms/Select';
import Input from '../../../atoms/forms/Input';
import ButtonArrow from '../../../atoms/buttons/Button';
import { ReactComponent as ArrowRight } from '../../../../static/images/icons/arrow_right.svg';

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

const DestinationSearchForm = () => (
  <Form>
    <Select />
    <Input
      type="search"
      name="search"
      placeholder="Destination or Location #"
    />
    <ButtonArrow>
      <ArrowRight />
    </ButtonArrow>
  </Form>
);

export default DestinationSearchForm;
