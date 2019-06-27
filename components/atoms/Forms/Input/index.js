import React from 'react';
import styled from 'styled-components';

const InputField = styled.input`
  width: 100%;
  border: 1px solid #adadad;
  padding: 20px;
  -webkit-appearance: none;
  border-radius: .1875rem;
  outline: 0;
  font-size: 14px;
  
  &::placeholder {
    color: #aaa;
  }
`;

const Input = ({ type, name, placeholder }) => (
  <InputField type={type} name={name} placeholder={placeholder} />
);

export default Input;
