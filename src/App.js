import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import PricingPage from './PricingPage';
import ProductsPage from './ProductsPage';
import Home from './Home';

import facebookLogo from './images/facebook.png';
import linkedinLogo from './images/linkedin.png';
import mediumLogo from './images/medium.png';
import twitterLogo from './images/twitter.png';

import './css/stylesheet.css';
import './css/stylesheet-medium.css';
import './css/stylesheet-wide.css';
import './css/stylesheet-wider.css';

const BASEBLUE = '#384083';
const BASERED = '#ff0000';

class App extends Component {
  render() {
    return (
      <Router>
        <div id='wrapper'> 
          <div id='landing' className='grey-font'>
            <div className='clouds'>
              <svg className='cloud small' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlnsXlink='http://www.w3.org/1999/xlink' x='0px' y='0px' width='762px' height='331px' viewBox='0 0 762 331' enable-background='new 0 0 762 331' xmlSpace='preserve'>
                <path fill='#FFFFFF' d='M715.394,228h-16.595c0.79-5.219,1.201-10.562,1.201-16c0-58.542-47.458-106-106-106 c-8.198,0-16.178,0.932-23.841,2.693C548.279,45.434,488.199,0,417.5,0c-84.827,0-154.374,65.401-160.98,148.529 C245.15,143.684,232.639,141,219.5,141c-49.667,0-90.381,38.315-94.204,87H46.607C20.866,228,0,251.058,0,279.5 S20.866,331,46.607,331h668.787C741.133,331,762,307.942,762,279.5S741.133,228,715.394,228z' />
              </svg>
              <svg className='cloud smaller' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlnsXlink='http://www.w3.org/1999/xlink' x='0px' y='0px' width='762px' height='331px' viewBox='0 0 762 331' enable-background='new 0 0 762 331' xmlSpace='preserve'>
                <path fill='#FFFFFF' d='M715.394,228h-16.595c0.79-5.219,1.201-10.562,1.201-16c0-58.542-47.458-106-106-106 c-8.198,0-16.178,0.932-23.841,2.693C548.279,45.434,488.199,0,417.5,0c-84.827,0-154.374,65.401-160.98,148.529 C245.15,143.684,232.639,141,219.5,141c-49.667,0-90.381,38.315-94.204,87H46.607C20.866,228,0,251.058,0,279.5 S20.866,331,46.607,331h668.787C741.133,331,762,307.942,762,279.5S741.133,228,715.394,228z' />
              </svg>
            </div>

            <div className='logo hide-wide'> 
              <p> NewsAI </p> 
            </div> 

            <div className='hide-narrow'> 
              <nav id='scrollnav'> 
                <ul id='left-scroll'>
                  <li className='left-list logo-3'><Link to='/' style={{textDecoration: 'none'}}> NewsAI </Link></li> 
                  <li className='left-list'><Link to='/products' style={{textDecoration: 'none'}}> Products </Link></li> 
                  <li className='left-list'><Link to='/pricing' style={{textDecoration: 'none'}}> Pricing </Link></li> 
                  <li className='left-list'><a href='https://www.newsai.co/blog/' style={{textDecoration: 'none', color: 'white'}}> Blog </a></li> 
                </ul> 
                <ul id='right-scroll'> 
                  <li className='right-list'> Free Trial </li> 
                  <li className='right-list'> Request a Demo </li> 
                </ul> 
              </nav> 
              <nav id='navbar'>   
                <Link to='/'>
                  <div className='logo-2'> 
                    <p> NewsAI </p> 
                  </div>
                </Link>
                <ul className='right-nav'> 
                  <Link to='/products' style={{textDecoration: 'none', color: 'white'}}><li className='link-nav'> Products </li></Link>
                  <Link to='/pricing' style={{textDecoration: 'none', color: 'white'}}><li className='link-nav'> Pricing </li></Link>
                  <li className='link-nav'><a href='https://www.newsai.co/blog/' style={{textDecoration: 'none', color:'white'}}> Blog </a></li> 
                  <a
                  href='https://tabulae.newsai.co'
                  className='link-nav'
                  style={{
                    textDecoration: 'none',
                    color: '#fff',
                    borderRadius: 5,
                    padding: '4px 14px 4px 14px',
                    border: '1.5px solid #fff',
                    listStyleType: 'none',
                    fontFamily: '"Raleway", sans-serif',
                    fontWeight: 200,
                    fontSize: '1em',
                  }} > Login </a>
                </ul>  
              </nav> 
            </div> 
          </div>

          <Route exact path='/' component={Home} />
          <Route path='/pricing' component={PricingPage} />
          <Route path='/products' component={ProductsPage} />
          
          <div id='footer'> 
            <img alt='facebook logo' className='social-media-image' src={facebookLogo} />
            <img alt='linkedin logo' className='social-media-image' src={linkedinLogo} />
            <img alt='medium logo' className='social-media-image' src={mediumLogo} />
            <img alt='twitter logo' className='social-media-image' src={twitterLogo} />
          </div> 
        </div>
      </Router>

    );
  }
}

export default App;
