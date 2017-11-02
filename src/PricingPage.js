import React, { Component } from 'react';
import styled from 'styled-components';
import MultiToggle from './MultiToggle';
import FontIcon from 'material-ui/FontIcon';
import {LightenDarkenColor} from './utils';
import {green400, grey200, grey400, grey500, grey600, grey700, grey800} from 'material-ui/styles/colors';
import SolidButton from './SolidButton';

const DEFAULT_BACKGROUND_GREY = '#ECECEC';
const LIGHTER_BACKGROUND_GREY = '#F8F8F8';
const GREYFONT = '#E2E3DD';

const StandardDiv = styled.div.attrs({
  className: props => props.className
})`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  border-bottom: 2px solid #fff;
`;

  // border-top: 1px solid red;

const pricingToggleOptions = [
  {displayName: 'Monthly', value: 'monthly'},
  {displayName: 'Annually', value: 'annually'},
];

const VerticalBlock = ({title, price, emailsPerDay, emailsSendFrom}) => (
  <div
  style={{
    width: 180,
    background: LIGHTER_BACKGROUND_GREY,
    margin: '0 8px',
    padding: '15px 5px',
    display: 'flex',
    flexDirection: 'column',
  }} >
    <div className='horizontal-center vertical-center' style={{height: 50}} >
      <span style={{fontWeight: 400, fontSize: '1.1em'}} >{title}</span>
    </div>
    <div
    className='vertical-center horizontal-center'
    style={{
      margin: '20px 10px',
      marginTop: 'auto',
      padding: '10px 0',
      background: '#fff',
      border: `1px solid ${grey400}`,
    }} >
      <span style={{color: grey700}} >$</span>
      <span style={{fontSize: '1.6em', color: grey700}} >{price}</span>
      <span style={{fontSize: '0.9em', color: grey700}} > /month</span>
    </div>
    <div className='horizontal-center'>
      <SolidButton color={green400} >Try It Free</SolidButton>
    </div>
    <StandardDiv><FontIcon className='fa fa-check' color='green' style={styles.featureCheck} /></StandardDiv>
    <StandardDiv><FontIcon className='fa fa-check' color='green' style={styles.featureCheck} /></StandardDiv>
    <StandardDiv><FontIcon className='fa fa-check' color='green' style={styles.featureCheck} /></StandardDiv>
    <StandardDiv><FontIcon className='fa fa-check' color='green' style={styles.featureCheck} /></StandardDiv>
    <StandardDiv><FontIcon className='fa fa-check' color='green' style={styles.featureCheck} /></StandardDiv>
    <StandardDiv><FontIcon className='fa fa-check' color='green' style={styles.featureCheck} /></StandardDiv>
    <StandardDiv>
      <span style={styles.featureDescription} >{emailsPerDay}</span>
    </StandardDiv>
    <StandardDiv>
      <span style={styles.featureDescription} >{emailsSendFrom}</span>
    </StandardDiv>
  </div>
  )

const styles = {
  featureName: {
    fontSize: '0.8em', color: grey800
  },
  featureDescription: {
    fontSize: '0.9em', color: grey800
  },
  featureCheck: {
    fontSize: '0.9em'
  },
};

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
        <div className='horizontal-center' style={{margin: '15px 0'}} >
          <span style={{color: grey800, fontSize: '2em'}} >Simple and Flexible Pricing</span>
        </div>
        <div className='horizontal-center' style={{margin: '20px 0'}} >
          <MultiToggle
          options={pricingToggleOptions}
          selectedOption={discountToggle}
          onSelectOption={value => this.setState({discountToggle: value})}
          />
        </div>
        <div className='horizontal-center' style={{marginBottom: 20}} >
          <span style={{fontSize: '0.8em'}}>20% off when you sign up annually</span>
        </div>
        <div className='horizontal-center'>
          <div style={{
            background: LightenDarkenColor(DEFAULT_BACKGROUND_GREY, 15),
            width: 250,
            margin: '164px 8px 0 8px',
            padding: '15px 5px',
            display: 'flex',
            flexDirection: 'column',
          }} >
            <StandardDiv>
              <span style={styles.featureName} >Unlimited Contacts / Media Lists</span>
            </StandardDiv>
            <StandardDiv>
              <span style={styles.featureName} >Email / Performance Tracking</span>
            </StandardDiv>
            <StandardDiv>
              <span style={styles.featureName} >Highly Customizable Mail Merge</span>
            </StandardDiv>
            <StandardDiv>
              <span style={styles.featureName} >Unlimited Templates</span>
            </StandardDiv>
            <StandardDiv>
              <span style={styles.featureName} >Search Your Contacts</span>
            </StandardDiv>
            <StandardDiv>
              <span style={styles.featureName} >Simple, Effective Tagging</span>
            </StandardDiv>
            <StandardDiv>
              <span style={styles.featureName} >Emails Send per Day</span>
            </StandardDiv>
            <StandardDiv>
              <span style={styles.featureName} >Email Addresses to Send From</span>
            </StandardDiv>
          </div>
          <VerticalBlock
          title='Tier 0'
          price={discountToggle === 'monthly' ? '15.99' : '18.99'}
          emailsPerDay='100'
          emailsSendFrom='1'
          />
          <VerticalBlock
          title='Tier 1'
          price={discountToggle === 'monthly' ? '28.99' : '34.99'}
          emailsPerDay='400'
          emailsSendFrom='2'
          />
          <VerticalBlock
          title='Tier 2'
          price={discountToggle === 'monthly' ? '34.99' : '41.99'}
          emailsPerDay='1000'
          emailsSendFrom='5'
          />
          <VerticalBlock
          title='Tier 3'
          price={discountToggle === 'monthly' ? '43.99' : '52.99'}
          emailsPerDay='2500'
          emailsSendFrom='10'
          />
        </div>
        <div className='horizontal-center' style={{margin: '60px 0 0 20px'}} >
          <span style={{fontSize: '2em', display: 'block'}}>Have a large team?</span>
        </div>
        <div className='horizontal-center' style={{margin: '15px 0 0 0'}} >
          <span style={{fontSize: '1.4em', display: 'block'}}>Our Agency/Enterprise tier might be better suited for your organization.</span>
        </div>
        <div className='horizontal-center' >
          <ul>
            <li>Dedicated onboarding sessions</li>
            <li>Assigned Account Rep</li>
            <li>Customized Product that suits your org's needs</li>
            <li>and more</li>
          </ul>
        </div>
        <div className='horizontal-center' style={{margin: '20px 0'}} >
          <SolidButton>Book a Demo</SolidButton>
        </div>
      </div>
      );
  }
}

export default PricingPage;
