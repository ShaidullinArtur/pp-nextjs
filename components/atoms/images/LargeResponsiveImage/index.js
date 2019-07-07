import React from 'react';

const large = 'https://picsum.photos/800/800?random';
const medium = 'https://picsum.photos/500/500?random';
const small = 'https://picsum.photos/600/600?random';

const LargeResponsiveImage = () => (
  <picture>
    <source media="(min-width: 1100px)" srcSet={large} />
    <source media="(min-width: 700px)" srcSet={medium} />
    <source media="(min-width: 500px)" srcSet={small} />
    <img alt="media" src={medium} />
  </picture>
);

export default LargeResponsiveImage;
