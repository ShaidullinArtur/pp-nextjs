import React from 'react';
import axios from "axios";
import Header from '../components/organisms/Header';
import { Link } from '../routes'
import getConfig from 'next/config'

const { publicRuntimeConfig } = getConfig()
const { API_URL } = publicRuntimeConfig

class Locations extends React.Component {
  static async getInitialProps() {
    return axios
      .get(`${API_URL}/v1/locations.json`)
      .then(response => {
          return {
              locations: response.data.locations
          };
      });
  }

  render() {
    return <div>
      <Header/>
      <h2>List of locations</h2>
      <ul>
        {this.props.locations.map(location => (
          <li key={location.id}>
            <Link route='locations/show' params={{id: location.id}}>
              <a>{location.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>;
  }
}

export default Locations;
