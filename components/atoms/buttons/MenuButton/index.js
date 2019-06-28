import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
  &:active,
  &:hover,
  &:visited {
    background: none;
  }
`;

const HamburgerIcon = styled.div`
  width: 3.125rem;
  height: 3.125rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const HamburgerIconPart = styled.span`
  width: 1.5625rem;
  height: 0.25rem;
  background-color: #fff;
  margin-top: 0.3125rem;

  &:first-child {
    margin-top: 0;
  }
`;

const MenuButton = ({ onClick }) => {
  return (
    <StyledButton onClick={onClick}>
      <HamburgerIcon>
        <HamburgerIconPart />
        <HamburgerIconPart />
        <HamburgerIconPart />
      </HamburgerIcon>
    </StyledButton>
  );
};

export default MenuButton;
