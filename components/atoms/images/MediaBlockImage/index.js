import React from 'react';

const LargeResponsiveImage = ({ srcSets }) => (
  <picture>
    <source media="(min-width: 1100px)" srcSet={srcSets.large} />
    <source media="(min-width: 700px)" srcSet={srcSets.medium} />
    <source media="(min-width: 500px)" srcSet={srcSets.small} />
    <img alt="media" src={srcSets.medium} />
  </picture>
);

export default LargeResponsiveImage;
