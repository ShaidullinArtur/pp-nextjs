import React from 'react';
import axios from "axios";
import Index from '../components/organisms/Header';
import { Link } from '../routes'
import getConfig from 'next/config'

const { publicRuntimeConfig } = getConfig()
const { API_URL } = publicRuntimeConfig

class Markets extends React.Component {
  static async getInitialProps() {
    return axios
      .get(`${API_URL}/v1/markets.json`)
      .then(response => {
          return {
              markets: response.data.markets
          };
      });
  }

  render() {
    return <div>
      <Index/>
      <h2>List of markets</h2>
      <ul>
        {this.props.markets.map(market => (
          <li key={market.id}>
            <Link route='markets/show' params={{id: market.id}}>
              <a>{market.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>;
  }
}

export default Markets;
