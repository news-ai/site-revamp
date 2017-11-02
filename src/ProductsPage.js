import React, { Component } from 'react';

const DEFAULT_BACKGROUND_GREY = '#ECECEC';
const LIGHTER_BACKGROUND_GREY = '#F8F8F8';
const GREYFONT = '#E2E3DD';

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
  </div>
  );

export default ProductsPage;