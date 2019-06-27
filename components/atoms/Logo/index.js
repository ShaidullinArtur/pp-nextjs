import React from 'react';
import { Link, Router } from '../../../routes';

const Logo = props => (
  <Link href="/">
    <a>
      {props.children}
    </a>
  </Link>
);

export default Logo;
