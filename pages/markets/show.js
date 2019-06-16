import React from 'react';
import axios from "axios";
import Header from '../../components/header';
import { Link } from '../../routes'
import getConfig from 'next/config'

const { publicRuntimeConfig } = getConfig()
const { API_URL } = publicRuntimeConfig

class Market extends React.Component {
  static async getInitialProps({ query, res }) {
    return axios
      .get(`${API_URL}/v1/markets/${query.id}.json`)
      .then(response => {
          return {
              market: response.data
          };
      });
  }

  render() {
    return <div>
      <Header/>
      <h2>Market - {this.props.market.name}</h2>
      <ul>
        <li key="1">{this.props.market.id}</li>
        <li key="2">{this.props.market.name}</li>
        <li key="3">
          <Link route='markets/locations/show' params={{market_id: this.props.market.id, location_id: 55}}>
            <a>Location</a>
          </Link>
        </li>
      </ul>
    </div>;
  }
}

export default Market;
