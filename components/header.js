import React from 'react';
import { Link, Router } from '../routes'

class Header extends React.Component {
  render() {
    return <ul>
      <li>
        <Link prefetch href="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link prefetch href="/test">
          <a>Test</a>
        </Link>
      </li>
      <li>
        <Link prefetch href="/locations">
          <a>Locations</a>
        </Link>
      </li>
      <li>
        <Link prefetch href="/markets">
          <a>Markets</a>
        </Link>
      </li>
    </ul>;
  }
}

export default Header;
