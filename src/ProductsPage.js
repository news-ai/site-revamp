import React, { Component } from 'react';

const DEFAULT_BACKGROUND_GREY = '#ECECEC';
const LIGHTER_BACKGROUND_GREY = '#F8F8F8';
const GREYFONT = '#E2E3DD';

const LeftBlock = () => (
  <div>
    
  </div>
  );

const RightBlock = () => (
  <div></div>
  );


const PersonalizeYourPitch = () => (
  <div>
    <div>Simple Smooth Workflow for Campaigns</div>
    Draft -> Merge -> Edit -> Send
    <div>
      <div>Draft Templates</div>
      <p>Build and manage your press release/campaign/content in our full-page editor</p>
    </div>
    <div>
      <div>Build List and Merge</div>
      <p>Upload your lists and merge your fields</p>
    </div>
    <div>
      <div>Preview and Edit</div>
      <p>Have a few emails you want to pay special attention to? We generate a preview of all the emails you are sending and you can edit them on the spot!</p>
    </div>
    <div>
      <div>Deliver Emails</div>
      <p>Schedule a future date, switch client email that you are using, and then click send! Next step, check how your emails performed by going to ANALYTICS LINK HERE.</p>
    </div>
    <div>
      Try It for Yourself
    </div>
  </div>
  );

const ProductsPage = props => (
  <div style={{
    position: 'relative',
    padding: '50px 0',
    background: DEFAULT_BACKGROUND_GREY,
  }} >
    <div className='horizontal-center' style={{margin: '10px 0'}} >
      <span style={{fontSize: '2.2em'}} >Tagline here meet here</span>
    </div>
    <div className='horizontal-center' style={{margin: '20px 0'}} >
      <span style={{fontSize: '1.8em'}} >Organize your contacts blah blah blah taglineeeeeeee</span>
    </div>
    <div className='horizontal-center'>
      <div style={{width: 800, height: 500, border: '5px solid green'}} > PRODUCT IMAGE PLACEHOLDER HERE</div>
    </div>
    <div className='horizontal-center'>
      <PersonalizeYourPitch />
    </div>
  </div>
  );

export default ProductsPage;