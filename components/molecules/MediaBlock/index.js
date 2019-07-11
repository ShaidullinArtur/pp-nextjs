/* eslint-disable no-nested-ternary */
import React from 'react';
import styled from 'styled-components';
import MediaBlockImage from '../../atoms/images/MediaBlockImage';

const MediaBlockWrapper = styled.div`
  opacity: 1;
  top: 0px;
  display: inline-block;
  margin: 0 0 40px;
  width: 100%;
  position: relative;

  @media (min-width: 1101px) {
    margin: 0 0 80px;
  }

  @media (min-width: 701px) {
    width: 50%;
  }

  &:nth-child(odd) {
    @media (min-width: 1101px) {
      padding-right: 40px;
    }
    @media (min-width: 701px) {
      float: left;
      padding-left: 0;
      padding-right: 20px;
    }
  }

  &:nth-child(even) {
    @media (min-width: 1101px) {
      padding-left: 40px;
    }

    @media (min-width: 701px) {
      float: right;
      padding-right: 0;
      padding-left: 20px;
    }
  }
`;

const MediaBlockContent = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  position: absolute;
  top: 0;
  left: 0;
  width: 80%;
  flex: 0 0 80%;
  padding: 20px;

  @media (min-width: 901px) {
    padding: 40px;
  }
  @media (min-width: 701px) {
    width: 80%;
    flex: 0 0 80%;
  }
  @media (min-width: 501px) {
    width: 100%;
    flex: 0 0 100%;
  }
`;

const MediaBlockLink = styled.a`
  position: relative;
  width: auto;
  overflow: hidden;
  display: flex;
`;

const ImageWrap = styled.div`
  opacity: 0.8;
  transition: transform 0.25s ease, -webkit-transform 0.25s ease;
  width: 100%;
`;

const srcSetsForLargeImage = {
  large: 'https://picsum.photos/800/800?random',
  medium: 'https://picsum.photos/500/500?random',
  small: 'https://picsum.photos/600/600?random',
};

const srcSetsForMediumImage = {
  large: 'https://picsum.photos/800/600?person',
  medium: 'https://picsum.photos/500/375?person',
  small: 'https://picsum.photos/600/450?person',
};

const srcSetsForSmallImage = {
  large: 'https://picsum.photos/800/300?person',
  medium: 'https://picsum.photos/600/300?person',
  small: 'https://picsum.photos/600/200?person',
};

const MediaBlock = ({ size, children }) => (
  <MediaBlockWrapper>
    <MediaBlockLink>
      <ImageWrap>
        <MediaBlockImage
          srcSets={
            size === 'large'
              ? srcSetsForLargeImage
              : size === 'medium'
              ? srcSetsForMediumImage
              : srcSetsForSmallImage
          }
        />
      </ImageWrap>
      <MediaBlockContent>{children}</MediaBlockContent>
    </MediaBlockLink>
  </MediaBlockWrapper>
);

export default MediaBlock;
