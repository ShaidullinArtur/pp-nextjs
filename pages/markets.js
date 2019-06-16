import React from 'react';
import axios from "axios";
import Header from '../components/header';
import { Link } from '../routes'

class Markets extends React.Component {
  static async getInitialProps() {
    return axios
      .get("http://localhost:5000/v1/markets.json")
      .then(response => {
          return {
              markets: response.data.markets
          };
      });
  }

  render() {
    return <div>
      <Header/>
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
