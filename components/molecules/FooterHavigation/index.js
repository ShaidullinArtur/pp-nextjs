import React from "react";
import styled from "styled-components";
import { Link } from "../../../routes";

const Navigation = styled.div`
  max-width: 78.75rem;
  margin: 0 auto;
  width: 100%;
  display: grid;
  grid-template-rows: auto;
  grid-row-gap: 40px;

  @media screen and (min-width: 901px) {
    grid-column-gap: 40px;
    grid-template-columns: repeat(5, 1fr);
  }

  @media screen and (max-width: 901px) {
    grid-column-gap: 20px;
    grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
  }
`;

const Item = styled.div``;

const Title = styled.h5`
  padding-bottom: 10px;
`;

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const ListItem = styled.li`
  margin-top: 10px;

  @media screen and (max-width: 768px) {
    margin-top: 0;
  }
`;

const ListLink = styled.a`
  font-size: var(--font-size-xs);

  &:hover {
    color: #d21115;
  }
`;

const FooterNavigation = () => (
  <Navigation>
    <Item>
      <Title>Parking</Title>
      <List>
        <ListItem>
          <Link href="/parking_map">
            <ListLink>Parking Map</ListLink>
          </Link>
        </ListItem>
        <ListItem>
          <Link href="/location_list">
            <ListLink>Location List</ListLink>
          </Link>
        </ListItem>
        <ListItem>
          <Link href="/reservations">
            <ListLink>Reservations</ListLink>
          </Link>
        </ListItem>
        <ListItem>
          <Link href="/monthly_parking">
            <ListLink>Monthly Parking</ListLink>
          </Link>
        </ListItem>
        <ListItem>
          <Link href="/premium_parking_app">
            <ListLink>Premium Parking App</ListLink>
          </Link>
        </ListItem>
        <ListItem>
          <Link href="/premium_textpay">
            <ListLink>Premium TextPay</ListLink>
          </Link>
        </ListItem>
        <ListItem>
          <Link href="/validations">
            <ListLink>Validations</ListLink>
          </Link>
        </ListItem>
        <ListItem>
          <Link href="/star_spaces">
            <ListLink>Star Spaces</ListLink>
          </Link>
        </ListItem>
        <ListItem>
          <Link href="/valet">
            <ListLink>Valet</ListLink>
          </Link>
        </ListItem>
        <ListItem>
          <Link href="/pay_machines">
            <ListLink>Pay Machines</ListLink>
          </Link>
        </ListItem>
        <ListItem>
          <Link href="/occupancy">
            <ListLink>Occupancy</ListLink>
          </Link>
        </ListItem>
      </List>
    </Item>

    <Item>
      <Title>City Guides</Title>
      <List>
        <ListItem>
          <Link href="/">
            <ListLink>Austin</ListLink>
          </Link>
        </ListItem>
      </List>
    </Item>

    <Item>
      <Title>Company</Title>
      <List>
        <ListItem>
          <Link href="/about">
            <ListLink>About Us</ListLink>
          </Link>
        </ListItem>
        <ListItem>
          <Link href="/blog">
            <ListLink>Blog</ListLink>
          </Link>
        </ListItem>
        <ListItem>
          <Link href="/careers">
            <ListLink>Careers</ListLink>
          </Link>
        </ListItem>
        <ListItem>
          <Link href="/press">
            <ListLink>Press</ListLink>
          </Link>
        </ListItem>
        <ListItem>
          <Link href="/partners">
            <ListLink>Partners</ListLink>
          </Link>
        </ListItem>
        <ListItem>
          <Link href="/terms_conditions">
            <ListLink>Terms & Conditions</ListLink>
          </Link>
        </ListItem>
      </List>
    </Item>

    <Item>
      <Title>Mgmt Solutions</Title>
      <List>
        <ListItem>
          <Link href="/glideparcs">
            <ListLink>GLIDEparcs</ListLink>
          </Link>
        </ListItem>
        <ListItem>
          <Link href="/curbside_concierge">
            <ListLink>Curbside Concierge</ListLink>
          </Link>
        </ListItem>
        <ListItem>
          <Link href="/customer_parking_only">
            <ListLink>Customer Parking Only</ListLink>
          </Link>
        </ListItem>
        <ListItem>
          <Link href="/customer_service_center">
            <ListLink>Customer Service Center</ListLink>
          </Link>
        </ListItem>
        <ListItem>
          <Link href="/industries">
            <ListLink>Industries</ListLink>
          </Link>
        </ListItem>
      </List>
    </Item>

    <Item>
      <Title>Contact Us</Title>
      <List>
        <ListItem>
          <Link href="/phone">
            <ListLink>Phone</ListLink>
          </Link>
        </ListItem>
        <ListItem>
          <Link href="/email">
            <ListLink>Email</ListLink>
          </Link>
        </ListItem>
        <ListItem>
          <Link href="/office_address">
            <ListLink>Office Address</ListLink>
          </Link>
        </ListItem>
        <ListItem>
          <Link href="/office_hours">
            <ListLink>Office Hours</ListLink>
          </Link>
        </ListItem>
        <ListItem>
          <Link href="/contact_form">
            <ListLink>Contact Form</ListLink>
          </Link>
        </ListItem>
        <ListItem>
          <Link href="/faq">
            <ListLink>FAQ</ListLink>
          </Link>
        </ListItem>
        <ListItem>
          <Link href="/boot_appeals">
            <ListLink>Boot Appeals</ListLink>
          </Link>
        </ListItem>
      </List>
    </Item>
  </Navigation>
);

export default FooterNavigation;
