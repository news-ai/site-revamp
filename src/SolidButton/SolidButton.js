import React, { Component } from 'react';
import styled from 'styled-components';
import {LightenDarkenColor} from '../utils';
const BASERED = '#ff0000';

const SolidButton = styled.div`
  display: inline-block;
  text-decoration: none;
  transition: background 0.5s ease;
  font-weight: 400;
  color: #FFFFFF;
  background: ${props => props.color || BASERED};
  border-radius: 6px;
  padding: 0.7em 1em;
  font-size: 1em;

  &:hover {
    background: ${props => LightenDarkenColor(props.color || BASERED, -30)};
    cursor: pointer;
  }
`;

export default SolidButton;
