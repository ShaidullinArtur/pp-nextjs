import React, { Component } from 'react';
import styled from 'styled-components';

import Header from '../../organisms/Header';
import Footer from '../../organisms/Footer';
import PrimaryNavigation from '../../molecules/PrimaryNavigation';
import LoginSection from '../../organisms/LoginSection';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Main = styled.main`
  display: flex;
  position: relative;
  flex-direction: column;
`;

class MainTemplate extends Component {
  state = {
    loginSectionIsOpen: false,
    primaryNavigationIsOpen: false,
  };

  openLoginSection = () => {
    this.setState({
      loginSectionIsOpen: true,
    });
  };

  closeLoginSection = () => {
    this.setState({
      loginSectionIsOpen: false,
    });
  };

  openPrimaryNavigation = () => {
    this.setState({
      primaryNavigationIsOpen: true,
    });
  };

  closePrimaryNavigation = () => {
    this.setState({
      primaryNavigationIsOpen: false,
    });
  };

  render() {
    const { children } = this.props;
    const { loginSectionIsOpen, primaryNavigationIsOpen } = this.state;
    return (
      <Wrapper>
        <LoginSection isOpen={loginSectionIsOpen} close={this.closeLoginSection} />
        <PrimaryNavigation isOpen={primaryNavigationIsOpen} close={this.closePrimaryNavigation} />
        <Main>
          <Header openLoginSection={this.openLoginSection} openPrimaryNavigation={this.openPrimaryNavigation} />
          {children}
        </Main>
        <Footer />
      </Wrapper>
    );
  }
}

export default MainTemplate;
