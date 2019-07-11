import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from 'next/router';
import Header from '../../../components/organisms/Header';

class Location extends Component {
  static async getInitialProps({ query }) {
    return axios
      .get(`${process.env.API_URL}/v1/locations/${query.location_id}.json`)
      .then(response => {
        return {
          location: response.data,
        };
      });
  }

  render() {
    const { location, router } = this.props;
    const { query } = router;
    return (
      <div>
        <Header />
        <h2>
          Market #{query.market_id}, Location - {location.name}
        </h2>
        <ul>
          <li key="1">{location.id}</li>
          <li key="2">{location.name}</li>
          <li key="3">{location.market_time_zone}</li>
        </ul>
      </div>
    );
  }
}

export default withRouter(Location);
