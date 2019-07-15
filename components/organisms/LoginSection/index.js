import React from 'react';
import styled from 'styled-components';
import LoginForm from '../../molecules/forms/Login';
import { ReactComponent as CrossIcon } from '../../../static/images/icons/cross_icon.svg';
import Button from '../../atoms/buttons/Button';

const LoginNavSection = styled.nav`
  display: flex;
  z-index: 10;
  background-color: #d21115;
  position: sticky;
  top: 0;
  left: 0;
  text-align: center;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  width: 100%;
  height: 0;
  max-height: 100vh;
  transition: max-height 0.25s ease-in-out;

  button:first-child {
    right: 10px;
    top: 10px;
    width: 3.125rem;
    height: 3.125rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
  }
`;

const LoginContent = styled.div`
  max-width: 56.25rem;
  margin: 40px auto 0;
  padding: 40px;
  width: 100%;
  position: relative;
  color: rgb(255, 255, 255) !important;
`;

const Title = styled.h3`
  font-size: var(--font-size-l);
  line-height: 1.25;
  letter-spacing: -0.035em;
`;

const LoginContentLinks = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 40px;

  @media (min-width: 901px) {
    flex-direction: row;
  }
`;

const StyledLink = styled.a`
  color: var(--white);
  text-decoration-line: underline;
  margin-top: 40px;

  @media (min-width: 901px) {
    margin-top: 0;

    &:last-child {
      margin-left: 40px;
    }
  }
`;

const LoginSection = () => {
  const closeLoginSection = () => {
    document.getElementById('loginSection').style.height = '0';
  };

  return (
    <LoginNavSection id="loginSection">
      <Button onClick={closeLoginSection}>
        <CrossIcon />
      </Button>
      <LoginContent>
        <Title>Sign in to manage hourly parking, subscriptions, reservations and vehicles.</Title>
        <LoginForm />
        <LoginContentLinks>
          <StyledLink>Create an account</StyledLink>
          <StyledLink>Login to previous Premium Account Manager (PAM)</StyledLink>
        </LoginContentLinks>
      </LoginContent>
    </LoginNavSection>
  );
};

export default LoginSection;
