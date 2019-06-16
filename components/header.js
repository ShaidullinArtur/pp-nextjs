import React from 'react';
import { Link, Router } from '../routes'
import cookie from 'js-cookie'

class Header extends React.Component {
  render() {
    return <ul>
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        {cookie.get("auth_token") ? (
          <Link href="/account">
            <a>My Account</a>
          </Link>
        ) : (
          <Link href="/signin">
            <a>Signin</a>
          </Link>
        )}
      </li>
      <li>
        <Link href="/test">
          <a>Test</a>
        </Link>
      </li>
      <li>
        <Link href="/locations">
          <a>Locations</a>
        </Link>
      </li>
      <li>
        <Link href="/markets">
          <a>Markets</a>
        </Link>
      </li>
    </ul>;
  }
}

export default Header;
