import React from 'react';
import axios from "axios";
import Index from '../../components/organisms/Header';
import getConfig from 'next/config'

const { publicRuntimeConfig } = getConfig()
const { API_URL } = publicRuntimeConfig

class Location extends React.Component {
  static async getInitialProps({ query, res }) {
    return axios
      .get(`${API_URL}/v1/locations/${query.id}.json`)
      .then(response => {
          return {
              location: response.data
          };
      });
  }

  render() {
    return <div>
      <Index/>
      <h2>Location - {this.props.location.name}</h2>
      <ul>
        <li key="1">{this.props.location.id}</li>
        <li key="2">{this.props.location.name}</li>
        <li key="3">{this.props.location.market_time_zone}</li>
      </ul>
    </div>;
  }
}

export default Location;
