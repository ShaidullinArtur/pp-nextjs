import React from 'react';

const large = 'https://picsum.photos/800/600?person';
const medium = 'https://picsum.photos/500/375?person';
const small = 'https://picsum.photos/600/450?person';

const MediumResponsiveImage = () => (
  <picture>
    <source media="(min-width: 1100px)" srcSet={large} />
    <source media="(min-width: 700px)" srcSet={medium} />
    <source media="(min-width: 500px)" srcSet={small} />
    <img alt="media" src={medium} />
  </picture>
);

export default MediumResponsiveImage;
