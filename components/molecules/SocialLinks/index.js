import React from 'react';
import styled from 'styled-components';
import { ReactComponent as InstagramIcon } from '../../../static/images/icons/instagram.svg';
import { ReactComponent as FacebookIcon } from '../../../static/images/icons/facebook.svg';
import { ReactComponent as TwitterIcon } from '../../../static/images/icons/twitter.svg';
import { ReactComponent as YoutubeIcon } from '../../../static/images/icons/youtube.svg';
import { ReactComponent as LinkedinIcon } from '../../../static/images/icons/linkedin.svg';
import { ReactComponent as VimeoIcon } from '../../../static/images/icons/vimeo.svg';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 193px;
  margin: 0 auto;
`;

const Item = styled.a`
  width: 20px;
  
  svg {
    &:hover {
      fill: #d21115;
    }
  }
`;

const SocialLinks = () => (
  <Wrapper>
    <Item href="https://www.instagram.com/">
      <InstagramIcon />
    </Item>
    <Item href="">
      <FacebookIcon />
    </Item>
    <Item href="">
      <TwitterIcon />
    </Item>
    <Item href="">
      <YoutubeIcon />
    </Item>
    <Item href="">
      <LinkedinIcon />
    </Item>
    <Item href="">
      <VimeoIcon />
    </Item>
  </Wrapper>
);

export default SocialLinks;
