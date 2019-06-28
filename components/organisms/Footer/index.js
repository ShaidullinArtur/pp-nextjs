import React from "react";
import styled from "styled-components";

import FooterNavigation from "../../molecules/FooterHavigation";
import FooterSlim from "../../molecules/FooterSlim";

const Wrapper = styled.footer`
  background-color: #f3f3f3;
  padding: 80px 20px 20px;
  margin-top: auto;
  border-top: 1px solid #adadad;
`;

const Footer = () => {
  return (
    <Wrapper>
      <FooterNavigation />
      <FooterSlim />
    </Wrapper>
  );
};

export default Footer;
