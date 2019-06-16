import React, { useState } from 'react';
import axios from "axios";
import Header from '../components/header';
import { Link, Router } from '../routes'
import getConfig from 'next/config'
import cookie from 'js-cookie'

const { publicRuntimeConfig } = getConfig()
const { API_URL } = publicRuntimeConfig

function Signin() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handleSubmit (event) {
    event.preventDefault();

    return axios
      .post(`${API_URL}/v1/signin.json`, {
        profile: {
          login: login,
          password: password
        }
      })
      .then(response => {
        cookie.set("auth_token", response.data.profile.auth_token, { expires: 365 })
        Router.push("/account");
      })
      .catch(error => {
        setError(error.response.data.error);
      });
  }

  return (
    <div>
      <Header/>
      <form onSubmit={handleSubmit}>
        <input
          value={login}
          onChange={e => setLogin(e.target.value)}
          placeholder="Login"
          type="text"
          name="login"
          required
        />
        <br/>
        <input
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder="Password"
          type="password"
          name="lastName"
          required
        />
        <br/>
        {error &&
          <strong>{error}</strong>
        }
        <br/>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Signin;
