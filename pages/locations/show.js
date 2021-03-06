import React from 'react';
import axios from 'axios';
import Header from '../../components/organisms/Header';

class Location extends React.Component {
  static async getInitialProps({ query }) {
    return axios
      .get(`${process.env.API_URL}/v1/locations/${query.id}.json`)
      .then(response => {
        return {
          location: response.data,
        };
      });
  }

  render() {
    const { location } = this.props;
    return (
      <div>
        <Header />
        <h2>Location - {location.name}</h2>
        <ul>
          <li key="1">{location.id}</li>
          <li key="2">{location.name}</li>
          <li key="3">{location.market_time_zone}</li>
        </ul>
      </div>
    );
  }
}

export default Location;
