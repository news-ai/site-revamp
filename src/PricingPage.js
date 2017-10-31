import React, { Component } from 'react';

const DEFAULT_BACKGROUND_GREY = '#ECECEC';

class PricingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      discountToggle: 'monthly'
    };
  }

  render() {
    return (
      <div style={{
        position: 'relative',
        padding: '50px 0',
        background: DEFAULT_BACKGROUND_GREY,
      }} >
        <div>Pricing</div>
        <div className='horizontal-center'>
          <div
          style={{margin: 10, padding: 10, border: '1px solid grey'}}
          onClick={() => this.setState({discountToggle: this.state.discountToggle === 'monthly' ? 'yearly' : 'monthly'})}>
          {this.state.discountToggle}
          </div>
        </div>
        <div className='horizontal-center'>
          <div style={{width: 180, height: 400, background: 'white', margin: '0 8px'}} ></div>
          <div style={{width: 180, height: 400, background: 'white', margin: '0 8px'}} ></div>
          <div style={{width: 180, height: 400, background: 'white', margin: '0 8px'}} ></div>
          <div style={{width: 180, height: 400, background: 'white', margin: '0 8px'}} ></div>
          <div style={{width: 180, height: 400, background: 'white', margin: '0 8px'}} ></div>
        </div>
      </div>
      );
  }
}

export default PricingPage;
