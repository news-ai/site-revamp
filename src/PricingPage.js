import React, { Component } from 'react';
import styled from 'styled-components';
import {LightenDarkenColor} from './utils';

const DEFAULT_BACKGROUND_GREY = '#ECECEC';
const LIGHTER_BACKGROUND_GREY = '#F8F8F8';

const StandardDiv = styled.div.attrs({
  className: props => props.className
})`
  padding: 5px 10px;
`;

const VerticalBlock = ({title}) => (
  <div
  style={{
    width: 180,
    height: 400,
    background: LIGHTER_BACKGROUND_GREY,
    margin: '0 8px',
    padding: '15px 5px',
  }} >
    <div className='horizontal-center vertical-center' style={{height: 50}} >
      <span style={{fontWeight: 400, fontSize: '1.1em'}} >{title}</span>
    </div>
    <StandardDiv>Item 1</StandardDiv>
    <StandardDiv>Item 1</StandardDiv>
    <StandardDiv>Item 1</StandardDiv>
    <StandardDiv>Item 1</StandardDiv>
  </div>
  )

class PricingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      discountToggle: 'monthly'
    };
  }

  render() {
    console.log(LightenDarkenColor(DEFAULT_BACKGROUND_GREY, 15));
    return (
      <div style={{
        position: 'relative',
        padding: '50px 0',
        background: DEFAULT_BACKGROUND_GREY,
      }} >
        <div className='horizontal-center'>
          <div
          style={{margin: 10, padding: 10, border: '1px solid grey'}}
          onClick={() => this.setState({discountToggle: this.state.discountToggle === 'monthly' ? 'yearly' : 'monthly'})}>
          {this.state.discountToggle}
          </div>
        </div>
        <div className='horizontal-center'>
          <div style={{
            background: LightenDarkenColor(DEFAULT_BACKGROUND_GREY, 15),
            width: 180,
            height: 200,
            margin: '50px 8px 0 8px',
            padding: '15px 5px',
            display: 'flex',
            flexDirection: 'column',
          }} >
            <StandardDiv>Item 1</StandardDiv>
            <StandardDiv>Item 1</StandardDiv>
            <StandardDiv>Item 1</StandardDiv>
            <StandardDiv>Item 1</StandardDiv>
          </div>
          <VerticalBlock title='Tier 0' />
          <VerticalBlock title='Tier 1' />
          <VerticalBlock title='Tier 2' />
          <VerticalBlock title='Tier 3' />
        </div>
      </div>
      );
  }
}

export default PricingPage;
