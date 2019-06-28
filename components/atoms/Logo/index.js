import React from "react";
import { Link } from "../../../routes";

const Logo = ({ children }) => (
  <Link href="/">
    <a>{children}</a>
  </Link>
);

export default Logo;
