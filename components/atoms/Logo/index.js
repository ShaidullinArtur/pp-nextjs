import React from 'react';
import Link from 'next/Link'

const Logo = props => (
  <Link href="/">
    <a>
      {props.children}
    </a>
  </Link>
);

export default Logo;
