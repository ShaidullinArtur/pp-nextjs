import React from 'react';
import axios from "axios";
import Header from '../../../components/header';
import getConfig from 'next/config'
import { withRouter } from 'next/router'

const { publicRuntimeConfig } = getConfig()
const { API_URL } = publicRuntimeConfig

class Location extends React.Component {
  static async getInitialProps({ query, res }) {
    return axios
      .get(`${API_URL}/v1/locations/${query.location_id}.json`)
      .then(response => {
          return {
              location: response.data
          };
      });
  }

  render() {
    return <div>
      <Header/>
      <h2>Market #{this.props.router.query.market_id}, Location - {this.props.location.name}</h2>
      <ul>
        <li key="1">{this.props.location.id}</li>
        <li key="2">{this.props.location.name}</li>
        <li key="3">{this.props.location.market_time_zone}</li>
      </ul>
    </div>;
  }
}

export default withRouter(Location);
