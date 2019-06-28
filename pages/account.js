import React, { Component } from "react";
import axios from "axios";
import getConfig from "next/config";
import cookie from "js-cookie";
import Header from "../components/organisms/Header";
import { Router } from "../routes";

const { publicRuntimeConfig } = getConfig();
const { API_URL } = publicRuntimeConfig;

class Account extends Component {
  constructor(props) {
    super(props);

    this.handleSignOut = this.handleSignOut.bind(this);
  }

  static async getInitialProps() {
    console.log(cookie.get("auth_token"));
    return axios
      .get(`${API_URL}/v1/settings.json`, {
        headers: { "X-AUTH-TOKEN": cookie.get("auth_token") }
      })
      .then(response => {
        return {
          profile: response.data.profile
        };
      });
  }

  handleSignOut = event => {
    event.preventDefault();
    cookie.remove("auth_token");
    Router.push("/");
  };

  render() {
    const { profile } = this.props;
    return (
      <div>
        <Header />
        <h2>
          Account #{profile.id} - {profile.name}
        </h2>
        <ul>
          <li key="1">{profile.id}</li>
          <li key="2">{profile.name}</li>
          <li key="3">{profile.email}</li>
          <li key="4">{profile.phone}</li>
        </ul>
        <button type="button" onClick={this.handleSignOut}>
          SignOut
        </button>
      </div>
    );
  }
}

export default Account;
