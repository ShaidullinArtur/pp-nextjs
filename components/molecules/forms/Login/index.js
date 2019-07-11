import React from 'react';
import styled from 'styled-components';
import { ReactComponent as ArrowRight } from '../../../../static/images/icons/arrow_right.svg';
import Button from '../../../atoms/buttons/Button';

const LoginForm = styled.form`
  text-align: left;
  margin-top: 40px;
  background-color: rgb(210, 17, 21);
  margin-bottom: 80px;
`;

const LoginFormInner = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: stretch;

  @media (min-width: 501px) {
    flex-direction: column;
    height: 7.5rem;
    justify-content: center;
  }

  button {
    border: 2px solid #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;

    @media (min-width: 501px) {
      margin: 0;
      width: 7.5rem;
      height: 100%;
      border-top: 2px solid #fff;
    }

    svg {
      width: 2.5rem;
    }
  }
`;

const Input = styled.input`
  padding: 20px;
  border-radius: 0;
  border: 2px solid #fff;
  background-color: transparent;
  color: #fff;
  font-size: 1.375rem;
  font-weight: bold;
  height: 3.75rem;
  width: 100%;

  @media (min-width: 501px) {
    width: calc(100% - 120px);
    border-right: 0px;
  }
`;

const StyledLink = styled.a`
  text-align: center;
  display: block;
  margin-top: 20px;
  text-decoration-line: underline;

  @media (min-width: 901px) {
    text-align: left;
    margin-left: 20px;
  }
`;

const Login = () => (
  <LoginForm>
    <LoginFormInner>
      <Input aria-label="Email" type="email" name="email" placeholder="Email" />
      <Input
        aria-label="Password"
        type="password"
        name="password"
        placeholder="Password"
      />
      <Button>
        <ArrowRight />
      </Button>
    </LoginFormInner>

    <StyledLink>Forgot Password?</StyledLink>
  </LoginForm>
);

export default Login;
