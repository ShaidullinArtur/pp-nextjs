import React, { Component } from "react";
import axios from "axios";
import Header from "../components/organisms/Header";
import { Link } from "../routes";

class Markets extends Component {
  static async getInitialProps() {
    return axios
      .get(`${process.env.API_URL}/v1/markets.json`)
      .then(response => {
        return {
          markets: response.data.markets
        };
      });
  }

  render() {
    const { markets } = this.props;

    return (
      <div>
        <Header />
        <h2>List of markets</h2>
        <ul>
          {markets.map(market => (
            <li key={market.id}>
              <Link route="markets/show" params={{ id: market.id }}>
                <a>{market.name}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Markets;
