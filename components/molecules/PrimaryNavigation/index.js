import React from 'react';
import styled from 'styled-components';
import { Link } from '../../../routes';
import { ReactComponent as CrossIcon } from '../../../static/images/icons/cross_icon.svg';
import Button from '../../atoms/buttons/Button';

const OverlayNav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${props => (props.isOpen ? '100vh' : 0)};
  width: 100%;
  position: fixed;
  z-index: 99;
  top: 0;
  left: 0;
  background-color: #d21115;
  opacity: 0.9;
  overflow-y: hidden;
  transition: 0.25s;

  @media screen and (max-height: 450px) {
    overflow-y: auto;
  }

  button {
    opacity: 1;
    visibility: visible;
    display: flex;
    position: absolute;
    right: 0;
    top: 0;
    width: 3.125rem;
    height: 3.125rem;
    flex-direction: column;
    justify-content: center;
  }
`;

const OverlayNavContent = styled.ul`
  text-align: center;
  margin: 0;
  padding: 0;
  list-style: none;
`;

const OverlayNavItem = styled.li`
  margin-top: 20px;
`;

const OverlayNavLink = styled.a`
  display: inline-block;
  line-height: 1.15;
  transition: 0.3s;
  font-size: var(--font-size-xl);
  color: #fff;
  letter-spacing: -0.035em;

  &:hover,
  &:focus,
  &:visited {
    color: #fff;
  }
`;

const PrimaryNavigation = ({ close, isOpen }) => {
  const closePrimaryNavigation = () => {
    close();
  };

  return (
    <OverlayNav isOpen={isOpen}>
      <Button onClick={closePrimaryNavigation}>
        <CrossIcon />
      </Button>
      <OverlayNavContent>
        <OverlayNavItem>
          <Link href="/find_parking">
            <OverlayNavLink>Find Parking.</OverlayNavLink>
          </Link>
        </OverlayNavItem>
        <OverlayNavItem>
          <Link href="/explore_products">
            <OverlayNavLink>Explore Products.</OverlayNavLink>
          </Link>
        </OverlayNavItem>
        <OverlayNavItem>
          <Link href="/management_solutions">
            <OverlayNavLink>Management Solutions.</OverlayNavLink>
          </Link>
        </OverlayNavItem>
        <OverlayNavItem>
          <Link href="/our_work">
            <OverlayNavLink>Our Work.</OverlayNavLink>
          </Link>
        </OverlayNavItem>
        <OverlayNavItem>
          <Link href="/blog">
            <OverlayNavLink>Blog.</OverlayNavLink>
          </Link>
        </OverlayNavItem>
        <OverlayNavItem>
          <Link href="/about_us">
            <OverlayNavLink>About us.</OverlayNavLink>
          </Link>
        </OverlayNavItem>
        <OverlayNavItem>
          <Link href="/careers">
            <OverlayNavLink>Careers.</OverlayNavLink>
          </Link>
        </OverlayNavItem>
        <OverlayNavItem>
          <Link href="/contact">
            <OverlayNavLink>Contact.</OverlayNavLink>
          </Link>
        </OverlayNavItem>
      </OverlayNavContent>
    </OverlayNav>
  );
};
export default PrimaryNavigation;
