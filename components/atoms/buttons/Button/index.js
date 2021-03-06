import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-size: 0.8125rem;
  padding: 0.9375rem 1.25rem 0.8125rem;
  line-height: 1.2;
  color: #fff;
  cursor: pointer;
  transition: all 0.5s ease;
  overflow: hidden;
  text-transform: uppercase;
  border: none;
  font-weight: 600;
  outline: 0;
  text-align: left;
  background: linear-gradient(to right, #a30d10 50%, #d21115 50%);
  background-size: 300% 150%;
  background-position: right 0 bottom 0;

  &:hover {
    background-position: left 0 bottom 0;
  }

  svg {
    width: 30px;
  }

  span {
    margin-right: 10px;
  }
`;

const Button = ({ children, onClick }) => (
  <StyledButton type="button" onClick={onClick}>
    {children}
  </StyledButton>
);

export default Button;
