import React, { Component } from 'react';
import styled from 'styled-components';
import MultiToggle from './MultiToggle';
import {LightenDarkenColor} from './utils';
import {grey600, grey700, grey800} from 'material-ui/styles/colors';

const DEFAULT_BACKGROUND_GREY = '#ECECEC';
const LIGHTER_BACKGROUND_GREY = '#F8F8F8';
const GREYFONT = '#E2E3DD';

const StandardDiv = styled.div.attrs({
  className: props => props.className
})`
  padding: 5px 10px;
`;

const pricingToggleOptions = [
  {displayName: 'Monthly', value: 'monthly'},
  {displayName: 'Annually', value: 'annually'},
];

const VerticalBlock = ({title, price}) => (
  <div
  style={{
    width: 180,
    height: 400,
    background: LIGHTER_BACKGROUND_GREY,
    margin: '0 8px',
    padding: '15px 5px',
    display: 'flex',
    flexDirection: 'column',
  }} >
    <div className='horizontal-center vertical-center' style={{height: 50}} >
      <span style={{fontWeight: 400, fontSize: '1.1em'}} >{title}</span>
    </div>
    <StandardDiv>Item 1</StandardDiv>
    <StandardDiv>Item 1</StandardDiv>
    <StandardDiv>Item 1</StandardDiv>
    <StandardDiv>Item 1</StandardDiv>
    <div
    className='vertical-center horizontal-center'
    style={{
      margin: '20px 10px',
      marginTop: 'auto',
      padding: '10px 0',
      background: '#fff',
      border: `1px solid ${grey700}`,
    }} >
      <span style={{color: grey700}} >$</span>
      <span style={{fontSize: '1.6em', color: grey700}} >{price}</span>
      <span style={{fontSize: '0.9em', color: grey700}} > /month</span>
    </div>
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
    const {discountToggle} = this.state;
    return (
      <div style={{
        position: 'relative',
        padding: '50px 0',
        background: DEFAULT_BACKGROUND_GREY,
      }} >
        <div className='horizontal-center' style={{margin: '20px 0'}} >
          <span style={{color: grey800, fontSize: '1.3em'}} >Simple and Flexible Pricing</span>
        </div>
        <div className='horizontal-center' style={{margin: '20px 0'}} >
          <MultiToggle
          options={pricingToggleOptions}
          selectedOption={discountToggle}
          onSelectOption={value => this.setState({discountToggle: value})}
          />
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
          <VerticalBlock title='Tier 0' price={discountToggle === 'monthly' ? '15.99' : '18.99'} />
          <VerticalBlock title='Tier 1' price={discountToggle === 'monthly' ? '15.99' : '18.99'} />
          <VerticalBlock title='Tier 2' price={discountToggle === 'monthly' ? '15.99' : '18.99'} />
          <VerticalBlock title='Tier 3' price={discountToggle === 'monthly' ? '15.99' : '18.99'} />
        </div>
      </div>
      );
  }
}

export default PricingPage;
