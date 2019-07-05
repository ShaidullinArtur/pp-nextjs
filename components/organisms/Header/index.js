import React, { Component } from "react";
import styled from "styled-components";
import MenuButton from "../../atoms/buttons/MenuButton";
import Logo from "../../atoms/Logo";
import { ReactComponent as SignInIcon } from "../../../static/images/icons/signin_small_icon.svg";

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: transparent;
  padding: 15px 20px;
  position: absolute;
  z-index: 2;
  top: 0;
  width: 100%;
`;

const HeaderRight = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const SignInWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-right: 40px;
  justify-content: flex-start;
  white-space: nowrap;

  @media (max-width: 501px) {
    margin-right: 0.9375rem;
    flex-direction: column;
  }
`;

const SignInButton = styled.button`
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
  color: #fff;
  font-size: var(--font-size-xs);
  margin-left: 10px;
  font-weight: bold;
  text-transform: uppercase;

  @media (max-width: 501px) {
    margin-top: 5px;
  }
`;

const LogoIcon = styled.span`
  background: url(/static/images/icons/logo_full.svg) no-repeat center;
  display: block;
  width: 153px;
  height: 46px;

  @media (max-width: 501px) {
    width: 46px;
    background: url(/static/images/icons/logo_white.svg) no-repeat center;
  }
`;

class Header extends Component {
  openPrimaryNavigation = () => {
    document.getElementById("overlay").style.height = "100%";
  };

  render() {
    return (
      <StyledHeader>
        <Logo>
          <LogoIcon />
        </Logo>
        <HeaderRight>
          <SignInWrapper>
            <SignInIcon />
            <SignInButton>Sign in</SignInButton>
          </SignInWrapper>
          <MenuButton onClick={this.openPrimaryNavigation} />
        </HeaderRight>
      </StyledHeader>
    );
  }
}

export default Header;
