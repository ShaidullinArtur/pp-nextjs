import React from 'react';
import Header from '../../organisms/Header';
import Footer from '../../organisms/Footer';

const MainTemplate = ({ children }) => (
  <div>
    <Header />
    <div>
      {children}
    </div>
    <Footer />
  </div>
);

export default MainTemplate;
