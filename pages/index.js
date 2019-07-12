/* eslint-disable no-nested-ternary */
import React from 'react';
import styled from 'styled-components';
import { Link } from '../routes';
import MainTemplate from '../components/templates/MainTemplate';
import NewsletterSubscription from '../components/molecules/forms/NewsletterSubscription';
import Carousel from '../components/molecules/Carousel';
import MediaBlock from '../components/molecules/MediaBlock';
import Button from '../components/atoms/buttons/Button';
import { ReactComponent as ArrowRight } from '../static/images/icons/arrow_right.svg';

const MediaBlocksContainer = styled.section`
  @media (min-width: 901px) {
    padding-top: 80px;
  }

  padding: 40px 20px 0 20px;
  margin: 0 auto;
  width: 100%;
  position: relative;
  max-width: 97.5rem;
`;

const MediaBlocksGridContainer = styled.div`
  display: block;
  height: auto;
  grid-template-rows: auto;
  grid-column-gap: 20px;
  grid-row-gap: 80px;

  @media (min-width: 501px) {
    padding: 0 20px;
  }

  @media (min-width: 901px) {
    grid-column-gap: 40px;
  }
`;

const MediaBlockTitle = styled.h2`
  color: var(--white);
  margin-bottom: 20px;
`;

const MediaBLockTitleSmall = styled.h3`
  color: var(--white);
  margin-bottom: 20px;
`;

const HighlightText = styled.span`
  margin: 0 10px;
  color: ${props =>
    props.yellow
      ? 'var(--tertiary)'
      : props.primary
      ? 'var(--primary)'
      : 'var(--white)'};
`;

const StyledLink = styled.a`
  color: var(--white);
  text-decoration-line: underline;
  font-size: var(--font-size-xs);

  &:focus,
  :hover,
  :active {
    color: var(--white);
`;

const Home = () => {
  return (
    <MainTemplate>
      <Carousel />
      <MediaBlocksContainer>
        <MediaBlocksGridContainer>
          <MediaBlock size="small">
            <MediaBLockTitleSmall>
              FREE order of hush puppies. Plus 50% off parking.
            </MediaBLockTitleSmall>
            <Link href="/">
              <StyledLink>Details</StyledLink>
            </Link>
          </MediaBlock>
          <MediaBlock size="medium">
            <MediaBlockTitle>So many ways to park.</MediaBlockTitle>
            <Button>
              <span>Explore products</span>
              <ArrowRight />
            </Button>
          </MediaBlock>
          <MediaBlock size="large">
            <MediaBlockTitle>
              Upcoming events, hotels, restaurants and other popular
              destinations.
            </MediaBlockTitle>
            <Button>
              <ArrowRight />
            </Button>
          </MediaBlock>
          <MediaBlock size="large">
            <MediaBlockTitle>
              Management solutions designed for control and growth.
            </MediaBlockTitle>
            <Button>
              <ArrowRight />
            </Button>
          </MediaBlock>
          <MediaBlock size="medium">
            <MediaBlockTitle>
              <HighlightText primary>$15 Parking.</HighlightText>
              Taylor Swift at the MB Superdome.
            </MediaBlockTitle>
            <Button>
              <ArrowRight />
            </Button>
          </MediaBlock>
          <MediaBlock size="large">
            <MediaBlockTitle>
              <HighlightText primary>Plan ahead.</HighlightText>
              Reserve parking in advance.
            </MediaBlockTitle>
            <Button>
              <ArrowRight />
            </Button>
          </MediaBlock>
          <MediaBlock size="large">
            <MediaBlockTitle>
              We were born in New Orleans
              <HighlightText yellow>Hospitality is in our DNA</HighlightText>
            </MediaBlockTitle>
            <Button>
              <span>Curbside Concierge</span>
              <ArrowRight />
            </Button>
          </MediaBlock>
        </MediaBlocksGridContainer>
      </MediaBlocksContainer>
      <NewsletterSubscription />
    </MainTemplate>
  );
};

export default Home;
