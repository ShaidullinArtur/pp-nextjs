import React from 'react';
import { Link, Router } from '../../../routes';
import styled from 'styled-components';
import { ReactComponent as CrossIcon } from '../../../static/images/icons/cross_icon.svg';

const OverlayNav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 0%;
  width: 100%;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #d21115;
  opacity: 0.9;
  overflow-y: hidden;
  transition: 0.25s;
  
  @media screen and (max-height: 450px) {
    overflow-y: auto
  }
`;

const OverlayNavContent = styled.ul`
  text-align: center;
  margin: 0;
  padding: 0;
  list-style: none;
`;

const OverlayNavItem = styled.li`
  text-decoration: none;
  font-size: var(--font-size-xl);
  color: #fff;
  display: block;
  line-height: 1.15;
  transition: 0.3s;
  letter-spacing: -0.035em;
  margin-top: 20px
`;

const Button = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  position: absolute;
  &:active, &:hover, &:visited {
    background: none;
  }
  right: 0;
  top: 0;
  width: 5rem;
  height: 5rem;
`;

const PrimaryNavigation = () => {
  const handleClick = () => {
    document.getElementById('overlay').style.height = "0%"
  };

  return (
    <OverlayNav id='overlay'>
      <Button onClick={handleClick}>
        <CrossIcon/>
      </Button>
      <OverlayNavContent>
        <Link>
          <OverlayNavItem>Find Parking.</OverlayNavItem>
        </Link>
        <Link>
          <OverlayNavItem>Explore Products.</OverlayNavItem>
        </Link>
        <Link>
          <OverlayNavItem>Management Solutions.</OverlayNavItem>
        </Link>
        <Link>
          <OverlayNavItem>Our Work.</OverlayNavItem>
        </Link>
        <Link>
          <OverlayNavItem>Blog.</OverlayNavItem>
        </Link>
        <Link>
          <OverlayNavItem>About us.</OverlayNavItem>
        </Link>
        <Link>
          <OverlayNavItem>Careers.</OverlayNavItem>
        </Link>
        <Link>
          <OverlayNavItem>Contact.</OverlayNavItem>
        </Link>
      </OverlayNavContent>
    </OverlayNav>
  )
};
export default PrimaryNavigation;
