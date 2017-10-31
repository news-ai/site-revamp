import React, { Component } from 'react';
import Slider from './Slider';

import airplane1Img from './images/airplane-2.png';
import airplane2Img from './images/airplane-1.png';
import cloudImg from './images/cloud.png';
import boatImg from './images/boat.png';
import birdImg from './images/bird-mobile.png';
import foxImg from './images/fox-mobile.png';
import snailImg from './images/snail-mobile.png';
import collaborateImg from './images/collaborate-mobile.png';
import prDailyLogo from './images/pr_daily.png';

const BASEBLUE = '#384083';
const BASERED = '#ff0000';
const BASEGREEN = '#488209';

const OutlineButton = ({children, color, style}) => (
  <button
  style={Object.assign({}, {
    textDecoration: 'none',
    background: 'Transparent',
    color: color || 'black',
    borderRadius: 5,
    padding: '4px 14px 4px 14px',
    border: `1.5px solid ${color || 'black'}`,
    listStyleType: 'none',
    fontFamily: "'Raleway', sans-serif",
    fontWeight: 200,
    fontSize: '1em',
  }, style)}
  > {children} </button>
  );

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

          <div style={{
            display: 'flex',
            justifyContent: 'space-around',
            flexFlow: 'row wrap',
            marginTop: 20
          }} >
            <div style={{
              flexBasis: 500,
              background: '#F8F8F8',
              margin: '10px 0',
              padding: 10,
            }} >
              <h4>Freelancer/Small Agency</h4>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                padding: 3,
              }} >
                <div>THIS IS A FEATURE LINE</div>
                <div>THIS IS A FEATURE LINE</div>
                <div>THIS IS A FEATURE LINE</div>
                <div>THIS IS A FEATURE LINE</div>
                <div>THIS IS A FEATURE LINE</div>
              </div>
              <div style={{marginTop: 20}} >
                <button
                style={{
                  textDecoration: 'none',
                  background: 'Transparent',
                  color: BASERED,
                  borderRadius: 5,
                  padding: '4px 14px 4px 14px',
                  border: `1.5px solid ${BASERED}`,
                  listStyleType: 'none',
                  fontFamily: "'Raleway', sans-serif",
                  fontWeight: 200,
                  fontSize: '1em',
                }}
                > 7-Day Free Trial </button>
              </div>
            </div>
            <div style={{
              flexBasis: 500,
              background: '#F8F8F8',
              margin: '10px 0',
              padding: 10,
            }} >
              <h4>Mid-size/Large Agency</h4>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                padding: 3,
              }} >
                <div>THIS IS A FEATURE LINE</div>
                <div>THIS IS A FEATURE LINE</div>
                <div>THIS IS A FEATURE LINE</div>
                <div>THIS IS A FEATURE LINE</div>
                <div>THIS IS A FEATURE LINE</div>
              </div>
              <div style={{marginTop: 20, display: 'flex', flexDirection: 'row', justifyContent: 'center'}} >
                <OutlineButton color={BASEGREEN} style={{margin: '0 5px'}} >Learn More</OutlineButton>
                <OutlineButton color={BASERED} style={{margin: '0 5px'}} >Book a Demo</OutlineButton>
              </div>
            </div>
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
                <img alt='collaborate background image' src={collaborateImg} /> 
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


          <div className='flex-center' style={{margin: '30px 0'}} > 
            <div style={{background: '#fff'}} >
              <div className='feature-title'>
                <p> Trusted by Many </p> 
              </div> 
              <Slider
              containerStyle={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                maxWidth: 800,
                minHeight: 250,
                minWidth: 650,
                padding: 15,
              }} slidesToShow={3} >
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
      
        </div> 

      </div> 
    );
}

export default Home;
