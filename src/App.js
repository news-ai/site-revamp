import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import PricingPage from './PricingPage';
import Home from './Home';
import Slider from './Slider';

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

            <div className='logo hide-wide'> 
              <p> NewsAI </p> 
            </div> 

            <div className='hide-narrow'> 
              <nav id='scrollnav'> 
                <ul id='left-scroll'>
                  <li className='left-list logo-3'><Link to='/' style={{textDecoration: 'none'}}> NewsAI </Link></li> 
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
                    fontFamily: "'Raleway', sans-serif",
                    fontWeight: 200,
                    fontSize: '1em',
                  }} > Login </a>
                </ul>  
              </nav> 
            </div> 
          </div>

          <Route exact path='/' component={Home} />
          <Route path='/pricing' component={PricingPage} />
          
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
