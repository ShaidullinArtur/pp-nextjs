import React from 'react';
import styled from 'styled-components';

import Header from '../../organisms/Header';
import Footer from '../../organisms/Footer';
import PrimaryNavigation from '../../molecules/PrimaryNavigation';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
`;

const MainTemplate = ({ children }) => (
  <Wrapper>
    <PrimaryNavigation />
    <Header />
    <Main>{children}</Main>
    <Footer />
  </Wrapper>
);

export default MainTemplate;
