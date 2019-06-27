import React from 'react';
import styled from 'styled-components';

import SocialLinks from '../SocialLinks';
import Logo from '../../atoms/Logo';
import { ReactComponent as RedLogo } from '../../../static/images/icons/logo.svg';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 80px;
  
  @media screen and (max-width: 768px) {
    flex-wrap: wrap;
    margin-top: 50px;
  }
`;

const Text = styled.p`
  width: calc(100% / 3);
  padding-right: 25px;
  
  @media screen and (max-width: 768px) {
    width: 100%;
    text-align: center;
  }
`;

const Links = styled.div`
  width: calc(100% / 3);
  
  @media screen and (max-width: 768px) {
    width: 100%;
    margin-top: 10px;
  }
`;

const LogoWrapper = styled.div`
  width: calc(100% / 3);
  
  @media screen and (max-width: 768px) {
    width: 100%;
    margin-top: 20px;
  }
  
  a {
    width: 40px;
    height: 40px;
    display: block;
    float: right;
    
    @media screen and (max-width: 768px) {
      float: none;
      margin: 0 auto;
    }
  }
`;

const FooterSlim = () => (
  <Wrapper>
    <Text>© 2017 Premium Parking. All rights reserved.</Text>
    <Links>
      <SocialLinks />
    </Links>
    <LogoWrapper>
      <Logo>
        <RedLogo />
      </Logo>
    </LogoWrapper>
  </Wrapper>
);

export default FooterSlim;
