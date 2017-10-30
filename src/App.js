import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import {Motion, TransitionMotion, spring} from 'react-motion';
import airplane1Img from './images/airplane-2.png';
import airplane2Img from './images/airplane-1.png';
import cloudImg from './images/cloud.png';
import boatImg from './images/boat.png';
import birdImg from './images/bird-mobile.png';
import foxImg from './images/fox-mobile.png';
import snailImg from './images/snail-mobile.png';
import collarborateImg from './images/collaborate-mobile.png';
import prDailyLogo from './images/pr_daily.png';
import facebookLogo from './images/facebook.png';
import linkedinLogo from './images/linkedin.png';
import mediumLogo from './images/medium.png';
import twitterLogo from './images/twitter.png';
import './css/stylesheet.css';
import './css/stylesheet-medium.css';
import './css/stylesheet-wide.css';
import './css/stylesheet-wider.css';

class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 0
    };
    this.onNext = _ => this.state.currentPage + 1 < Math.ceil(this.props.children.length / (this.props.slidesToShow || 1)) ? this.setState({currentPage: this.state.currentPage + 1}) : null;
    this.onPrev = _ => this.state.currentPage > 0 ? this.setState({currentPage: this.state.currentPage - 1}) : null;
  }

  render() {
    const {children, slidesToShow} = this.props;
    const {currentPage} = this.state;
    let configs = [];

    const numSlidesPerView = slidesToShow || 1;
    const setSize = Math.ceil(children.length / numSlidesPerView);
    const bottomIndex = currentPage * setSize;
    const topIndex = (currentPage + 1) * setSize;
    const showingChildren = children.filter((_, i) => i >= bottomIndex && i < topIndex);

    // 8
    console.log('bottomIndex', bottomIndex);
    console.log('topIndex', topIndex);
    console.log(currentPage);

    return (
      <div style={{padding: 5, display: 'flex', alignItems: 'center'}} >
        <i className='fa fa-arrow-left' style={{color: 'red', cursor: 'pointer'}} onClick={this.onPrev} aria-hidden='true' />
        {showingChildren.map((child, i) => <div key={`photo-${i}`} >{child}</div>)}
        <i className='fa fa-arrow-right' style={{color: 'red', cursor: 'pointer'}} onClick={this.onNext} aria-hidden='true' />
      </div>
      );
  }
}

const Home = props => {
  return (
      <div id='landing'>
        <div>
          <div id='airplane-1'> 
            <img alt='airplane background image' src={airplane1Img} /> 
          </div> 

          <div id='cloud'> 
            <img alt='cloud background image' src={cloudImg} /> 
          </div> 

          <div className='flex-center'> 
            <div id='subtitle'> Send personalized pitches with less work </div> 
          </div>

          <div className='flex-center'> 
            <div id='subsubtitle'> A list building and email distribution tool for PR professionals </div> 
          </div>

          <div id='demo-landing' > 
            <div id='demo-email'>
              <input type='text' name='email' placeholder='email@company.com' />
            </div> 
            <div id='request-demo-button'> 
              <p> Request a Demo </p>
            </div> 
          </div>

          <div id='airplane-2'> 
            <img alt='second airplane background image' src={airplane2Img} /> 
          </div>
        </div> 
        

        <div id='content'> 
          <div id='boat'> 
            <img alt='boat background image' src={boatImg} /> 
          </div> 
          <div className='flex-center'> 
            <div id='tagline'> Streamline your workflow with tools made for public relations professionals.</div> 
          </div> 
          <div className='flex-center'> 
            <div className='feature'> 
              <div className='feature-image'>
                <img alt='bird background image' src={birdImg} /> 
              </div> 
              <div className='description description-margin'> 
                <div className='feature-title left-align'> 
                  <p> Personalize Your Pitch </p> 
                </div> 
                <div className='feature-description'>
                  <p> Effortlessly send personalized pitches to anyone on your media lists and monitor your pitch success.</p> 
                </div> 
                <div className='feature-learn-more'>
                  <p> Learn more </p> 
                </div> 
              </div> 
            </div>
          </div> 
          <div className='flex-center'> 
            <div className='feature'> 
              <div className='feature-image switch-image'>
                <img alt='fox background image' src={foxImg} /> 
              </div> 
              <div className='description switch-description'> 
                <div className='feature-title left-align'>
                  <p> Do it All On One Platform </p> 
                </div> 
                <div className='feature-description'> 
                  <p> Centralize and easily manage your media lists on a single platform.  </p> 
                </div> 
                <div className='feature-learn-more'>
                  <p> Learn more </p> 
                </div> 
              </div> 
            </div>
          </div> 
          <div className='flex-center'> 
            <div className='feature'> 
              <div className='feature-image'>
                <img alt='snail background image' src={snailImg} /> 
              </div> 
              <div className='description description-margin'> 
                <div className='feature-title left-align'> 
                  <p> Stay Up to Date with Influencers </p> 
                </div> 
                <div className='feature-description'>
                  <p> Painlessly stay up to date with what contacts on your media lists are posting on social media. </p> 
                </div> 
                <div className='feature-learn-more'>
                  <p> Learn more </p> 
                </div> 
              </div> 
            </div>
          </div> 
          <div className='flex-center'> 
            <div className='feature'> 
              <div className='feature-image switch-image'>
                <img alt='collaborate background image' src={collarborateImg} /> 
              </div> 
              <div className='description switch-description'> 
                <div className='feature-title left-align'>
                  <p> Bring it All Together </p> 
                </div> 
                <div className='feature-description'> 
                  <p> Consolidate your agency’s contacts by sharing and collaborating on media lists. </p> 
                </div> 
                <div className='feature-learn-more'>
                  <p> Learn more </p> 
                </div> 
              </div> 
            </div>
          </div> 
          <div className='flex-center'> 
            <div id='seen-in'> 
              <div className='feature-title'>
                <p> As Seen In </p> 
              </div> 
              <div className='logos'> 
                <img alt='airplane background image' src={prDailyLogo} /> 
              </div> 
            </div> 
          </div> 

            <div className='feature-title'>
              <p> Trusted by Many </p> 
            </div> 
          <div className='flex-center' style={{margin: '50px 0'}} > 
            <div style={{padding: 10, maxWidth: 800, background: '#fff'}} >
              <Slider slidesToShow={3} >
                <div>
                  <a className='navbar-brand' target='_mstudio' href='https://mdidit.com/'>
                    <img width='200px' src='https://s3.us-east-2.amazonaws.com/www.newsai.co/images/customers/mstudio.png' alt='M Studio' />
                  </a>
                </div>
                <div>
                  <a className='navbar-brand' target='_inventpr' href='https://www.inventpr.com/'>
                    <img width='200px' src='https://s3.us-east-2.amazonaws.com/www.newsai.co/images/customers/inventpr.png' alt='Invent PR' />
                  </a>
                </div>
                <div>
                  <a className='navbar-brand' target='_allenmc' href='https://www.allenmc.co/'>
                    <img width='100px' src='https://s3.us-east-2.amazonaws.com/www.newsai.co/images/customers/allenmc.gif' alt='Allen MC' />
                  </a>
                </div>
                <div>
                  <a className='navbar-brand' target='_tripwhisperer' href='http://www.tripwhisperer.nyc/'>
                    <img width='200px' src='https://s3.us-east-2.amazonaws.com/www.newsai.co/images/customers/tripwhisperer.png' alt='Trip Whisperer' />
                  </a>
                </div>
                <div>
                  <a className='navbar-brand' target='_oasispr' href='http://www.oasis-pr.com/'>
                    <img width='200px' src='https://s3.us-east-2.amazonaws.com/www.newsai.co/images/customers/oasispr.png' alt='Oasis PR' />
                  </a>
                </div>
                <div>
                  <a className='navbar-brand' target='_statepr' href='http://statepr.com'>
                    <img width='150px' src='https://s3.us-east-2.amazonaws.com/www.newsai.co/images/customers/statepr.jpg' alt='State PR' />
                  </a>
                </div>
                <div>
                  <a className='navbar-brand' target='_sowrdandthescript' href='https://www.swordandthescript.com/'>
                    <img width='250px' src='https://www.swordandthescript.com/wp-content/uploads/2016/05/header-new-1.jpg' alt='Sword and The Script' />
                  </a>
                </div>
                <div>
                  <a className='navbar-brand' target='_prchicago' href='https://www.prchicago.com'>
                    <img width='100px' src='https://s3.us-east-2.amazonaws.com/www.newsai.co/images/customers/prchicago.jpg' alt='PR Chicago' />
                  </a>
                </div>
              </Slider>
            </div> 
          </div> 
      
         
          <div className='flex-center'> 
            <div id='request-demo'> 
              <div className='feature-title'>
                <p> Request a Live Demo </p> 
              </div> 
              <div className='feature-description-2'> 
                <p> Get a one on one product walkthrough with us !</p> 
              </div> 
              <div className='demo-2'>
                <input type='text' name='email' placeholder='Email Address' />
              </div> 
              <div className='demo-2'>
                <input type='text' name='email' placeholder='Name' />
              </div> 
              <div id='request-demo-button-2'> 
                <p> Request a Demo</p>
              </div> 
            </div> 
          </div> 
        </div> 


      </div> 
    );
}

const PricingPage = props => (
  <div>PRICING</div>
  );

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
                  <li className='link-nav login-nav'> Login </li> 
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
