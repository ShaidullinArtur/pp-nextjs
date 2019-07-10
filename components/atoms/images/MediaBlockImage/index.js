import React from 'react';
import styled from 'styled-components';

const Image = styled.img`
  transition: 0.4s;

  &:hover,
  :focus {
    transform: scale(1.1);
  }
`;

const LargeResponsiveImage = ({ srcSets }) => (
  <picture>
    <source media="(min-width: 1100px)" srcSet={srcSets.large} />
    <source media="(min-width: 700px)" srcSet={srcSets.medium} />
    <source media="(min-width: 500px)" srcSet={srcSets.small} />
    <Image alt="media" src={srcSets.medium} />
  </picture>
);

export default LargeResponsiveImage;
