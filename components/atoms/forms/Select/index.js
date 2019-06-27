import React from 'react';
import styled from 'styled-components';

import arrowDown from '../../../../static/images/icons/arrow_down.svg';

const Select = styled.select`
  cursor: pointer;
  text-indent: 0.01px;
  text-overflow: "";
  background: url(${arrowDown}) center left 10px no-repeat;
  background-size: calc(20px - 5px) calc(20px - 5px);
  padding-left: calc((20px * 2) - 5px);
  background-color: #fff;
  border: 0;
  width: 100%;
`;

const SearchInput = () => (
  <Select />
);

export default SearchInput;
