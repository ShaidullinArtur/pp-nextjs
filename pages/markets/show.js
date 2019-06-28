import React, { Component } from "react";
import axios from "axios";
import getConfig from "next/config";
import Header from "../../components/organisms/Header";
import { Link } from "../../routes";

const { publicRuntimeConfig } = getConfig();
const { API_URL } = publicRuntimeConfig;

class Market extends Component {
  static async getInitialProps({ query }) {
    return axios
      .get(`${API_URL}/v1/markets/${query.id}.json`)
      .then(response => {
        return {
          market: response.data
        };
      });
  }

  render() {
    const { market } = this.props;

    return (
      <div>
        <Header />
        <h2>Market - {market.name}</h2>
        <ul>
          <li key="1">{market.id}</li>
          <li key="2">{market.name}</li>
          <li key="3">
            <Link
              route="markets/locations/show"
              params={{ market_id: market.id, location_id: 55 }}
            >
              <a>Location</a>
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Market;
