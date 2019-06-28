import React from "react";
import axios from "axios";
import Header from "../components/organisms/Header";
import { Link } from "../routes";

class Locations extends React.Component {
  static async getInitialProps() {
    return axios
      .get(`${process.env.API_HOST}/v1/locations.json`)
      .then(response => {
        return {
          locations: response.data.locations
        };
      });
  }

  render() {
    const { locations } = this.props;
    return (
      <div>
        <Header />
        <h2>List of locations</h2>
        <ul>
          {locations.map(location => (
            <li key={location.id}>
              <Link route="locations/show" params={{ id: location.id }}>
                <a>{location.name}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Locations;
