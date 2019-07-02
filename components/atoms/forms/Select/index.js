import React from "react";
import styled from "styled-components";

import arrowDown from "../../../../static/images/icons/arrow_down.svg";

const Select = styled.select`
  cursor: pointer;
  text-indent: 0.01px;
  text-overflow: "";
  background: url(${arrowDown}) center left 10px no-repeat;
  background-size: 15px 15px;
  padding-left: 35px;
  background-color: #fff;
  border: 0;
  border-radius: 0;
  width: 100%;
  padding: 20px 20px 20px 35px;
  outline: none;
  -webkit-appearance: none;
`;

const SearchInput = () => <Select />;

export default SearchInput;
