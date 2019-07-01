import React from "react";
import styled from "styled-components";

import Header from "../../organisms/Header";
import Footer from "../../organisms/Footer";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Main = styled.main`
  z-index: 0;
`;

const MainTemplate = ({ children }) => (
  <Wrapper>
    <Header />
    <Main>{children}</Main>
    <Footer />
  </Wrapper>
);

export default MainTemplate;
