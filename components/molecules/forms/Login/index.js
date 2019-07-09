import React from "react";
import styled from "styled-components";
import { ReactComponent as ArrowRight } from "../../../../static/images/icons/arrow_right.svg";
import Button from "../../../atoms/buttons/Button";

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
`;

const Input = styled.input`
  background-color: transparent;
  color: rgb(255, 255, 255);
  font-size: 1.375rem;
  font-weight: bold;
  height: 3.75rem;
  width: 100%;
  padding: 20px;
  border-radius: 0px;
  border-width: 2px;
  border-style: solid;
  border-color: rgb(255, 255, 255);
  border-image: initial;

  @media (min-width: 501px) {
    width: calc(100% - 120px);
    border-right: 0px;
  }
`;

const StyledLink = styled.a`
  text-align: center;
  display: block;
  margin-top: 20px;

  @media (min-width: 901px) {
    text-align: left;
    margin-left: 20px;
  }
`;

const Login = () => (
  <LoginForm>
    <LoginFormInner>
      <Input />
      <Input />
      <Button>
        <ArrowRight />
      </Button>
    </LoginFormInner>

    <StyledLink>Forgot Password?</StyledLink>
  </LoginForm>
);

export default Login;
