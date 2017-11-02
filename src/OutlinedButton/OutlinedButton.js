import React, { Component } from 'react';
import styled from 'styled-components';
import {LightenDarkenColor} from '../utils';

const OutlinedButton = styled.div`
  display: inline-block;
  text-decoration: none;
  border-radius: 5px;
  padding: 4px 14px 4px 14px;
  border: 1.5px solid ${props => props.color ? props.color : 'black'};
  color: ${props => props.color || '#000'};
  font-family: "Raleway", sans-serif;
  font-weight: 400;
  font-size: 1em;
  &:hover {
    border: 1.5px solid ${props => LightenDarkenColor(props.color || '#000', -40)};
    color: ${props => LightenDarkenColor(props.color || '#000', -40)};
    cursor: pointer;
  }
`;

export default OutlinedButton;
