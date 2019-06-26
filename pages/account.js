import React from 'react';
import axios from "axios";
import Header from '../components/organisms/Header';
import { Link, Router } from '../routes'
import getConfig from 'next/config'
import cookie from 'js-cookie'

const { publicRuntimeConfig } = getConfig()
const { API_URL } = publicRuntimeConfig

class Account extends React.Component {
  constructor(props) {
    super(props);

    this.handleSignOut = this.handleSignOut.bind(this);
  }

  static async getInitialProps() {
    console.log(cookie.get("auth_token"));
    return axios
      .get(`${API_URL}/v1/settings.json`, {
        "headers": { "X-AUTH-TOKEN": cookie.get("auth_token")}
      })
      .then(response => {
          return {
              profile: response.data.profile
          };
      });
  }

  handleSignOut(event) {
    event.preventDefault();
    cookie.remove("auth_token");
    Router.push("/");
  }

  render() {
    return <div>
      <Header/>
      <h2>Account #{this.props.profile.id} - {this.props.profile.name}</h2>
      <ul>
        <li key="1">{this.props.profile.id}</li>
        <li key="2">{this.props.profile.name}</li>
        <li key="3">{this.props.profile.email}</li>
        <li key="4">{this.props.profile.phone}</li>
      </ul>
      <a href="#" onClick={this.handleSignOut}>SignOut</a>
    </div>;
  }
}

export default Account;
