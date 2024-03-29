import React, { Component } from 'react';
import Slider from './Slider';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import Dialog from 'material-ui/Dialog';
import SolidButton from './SolidButton';
import OutlinedButton from './OutlinedButton';
import HoverCard from './HoverCard';
import FontIcon from 'material-ui/FontIcon';
import {LightenDarkenColor} from './utils';

import airplane1Img from './images/airplane-2.png';
import airplane2Img from './images/airplane-1.png';
import cloudImg from './images/cloud.png';
import boatImg from './images/boat.png';
import birdImg from './images/bird-mobile.png';
import foxImg from './images/fox-mobile.png';
import snailImg from './images/snail-mobile.png';
import collaborateImg from './images/collaborate-mobile.png';
import prDailyLogo from './images/pr_daily.png';
import macbookHomeMockup from './images/mockup_homepage_on_macbook.png';
import macbookListMockup from './images/mockup_listpage_on_macbook.png';

const BASEBLUE = '#384083';
const BASERED = '#ff0000';
const BASEGREEN = '#488209';
const DEFAULT_BACKGROUND_GREY = '#ECECEC';
const LIGHTER_BACKGROUND_GREY = '#F8F8F8';
const RoundedInput = styled.input`
  border: none;
  font-family: 'Raleway', sans-serif;
  font-size: 1.15em;
  color: #676363;
  background: #E6E6E6;
  border-radius: 6px;
  padding: 0.5em; 
`;

const v1LandingContent = {
  subtitle: 'The Best CRM and Emailing Tool for PR',
  subsubtitle: 'Easily Manage Your List Building and Email Distribution'
};


const content = {
  features: [
    {
      name: 'Organize Your Lists',
      tagline: 'Got duplicates among many media lists?',
      blurb: 'Easy upload, tagging, and advanced search through your many lists'
    },
    {
      name: 'Email An Entire List and Smart Mail Merge',
      tagline: 'Got duplicates among many media lists?',
      blurb: 'Easy upload, tagging, and advanced search through your many lists'
    },
    {
      name: 'Email Tracking',
      tagline: 'Got duplicates among many media lists?',
      blurb: 'Easy upload, tagging, and advanced search through your many lists'
    },
    {
      name: 'Build List from Anywhere',
      tagline: 'Constantly Adding New Contacts to Lists?',
      blurb: 'Do it right on the page as you are researching the contact through our convenient Chrome extension'
    },
  ],
};

const Landing = ({content}) => (
    <div style={{
      display: 'flex',
      flexFlow: 'column',
      fontFamily: '"Raleway", sans-serif',
      color: '#E2E3DD',
      position: 'relative'
    }} >
      <div id='airplane-1'> 
        <img alt='airplane background image' src={airplane1Img} /> 
      </div> 

      <div id='cloud'> 
        <img alt='cloud background image' src={cloudImg} /> 
      </div> 

      <div className='flex-center'> 
        <div id='subtitle'> {content.subtitle} </div> 
      </div>

      <div className='flex-center'> 
        <div id='subsubtitle'> {content.subsubtitle} </div> 
      </div>

    {/*
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
      }} > 
        <form id='subForm' action='http://email3.newsai.co/t/d/s/pbjhr/' method='post'>
          <div style={{margin: '0 5px'}}>
            <RoundedInput type='text' id='fieldName' name='cm-name' />
          </div>
          <div style={{margin: '0 5px'}}>
            <RoundedInput required type='text' id='fieldEmail' name='cm-pbjhr-pbjhr' placeholder='email@company.com' />
          </div>
          <div style={{margin: '0 5px'}}>
            <SolidButton type='submit' > Request a Demo </SolidButton>
          </div>
        </form>
      </div>
    */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30,
      }} >
        <div className='vertical-center' style={{
          border: `3px solid ${BASERED}`,
          borderRadius: '0.3em',
          padding: '5px 12px'
        }}>
          <span style={{marginRight: 10, fontSize: '0.8em', fontWeight: 600}} >WATCH HOW IT WORKS</span>
          <FontIcon className='fa fa-play-circle' color='#fff' />
        </div>
      </div>

      <div id='airplane-2'> 
        <img alt='second airplane background image' src={airplane2Img} /> 
      </div>
    </div> 
  );

const FeatureCard = ({imgAlt, imgSrc, headline, description}) => (
  <div className='flex-center'> 
    <div className='feature'> 
      <div className='feature-image'>
        <img alt={imgAlt} src={imgSrc} /> 
      </div> 
      <div className='description description-margin'> 
        <div className='feature-title left-align'> 
          <p> {headline} </p> 
        </div> 
        <div className='feature-description'>
          <p> {description} </p> 
        </div> 
        <SolidButton color='#384083'> Learn More </SolidButton>
      </div> 
    </div>
  </div> 
  );



const Home = props => {
  return (
      <div>
        <Landing content={v1LandingContent} /> 
        <div id='content'> 
          <div id='boat'> 
            <img alt='boat background image' src={boatImg} /> 
          </div> 
          <div className='flex-center' style={{marginBottom: 30}} > 
            <div id='tagline'> Streamline your workflow with tools made for public relations professionals.</div> 
          </div> 

          <div className='horizontal-center'>
            <img height={550} src={macbookListMockup} />
          </div>

          <FeatureCard
          imgAlt='bird background image'
          imgSrc={birdImg}
          headline='Personalize Your Pitch'
          description='Effortlessly send personalized pitches to anyone on your media lists and monitor your pitch success.'
          />

          <FeatureCard
          imgAlt='snail background image'
          imgSrc={snailImg}
          headline='Do it All On One Platform'
          description='Centralize and easily manage your media lists on a single platform.'
          />
        
          <FeatureCard
          imgAlt='fox background image'
          imgSrc={foxImg}
          headline='Stay Up to Date with Influencers'
          description='Painlessly stay up to date with what contacts on your media lists are posting on social media.'
          />
      
          <FeatureCard
          imgAlt='collaborate background image'
          imgSrc={collaborateImg}
          headline='Bring it All Together'
          description='Consolidate your agency’s contacts by sharing and collaborating on media lists.'
          />

          <div style={{
            display: 'flex',
            justifyContent: 'space-around',
            flexFlow: 'row wrap',
            marginTop: 20,
          }} >
            <div style={{flexBasis: 600}}>
              <HoverCard>
                <div>
                  <span>Freelancer/Small Agency</span>
                </div>
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
                  <div style={{margin: '0 5px'}} >
                    <Link to='/products'>
                      <OutlinedButton color={BASEGREEN} > Learn More </OutlinedButton>
                    </Link>
                  </div>
                  <div style={{margin: '0 5px'}} >
                    <a href='https://tabulae.newsai.co' style={{textDecoration: 'none'}} >
                      <OutlinedButton color={BASERED} > Try it Now </OutlinedButton>
                    </a>
                  </div>
                </div>
              </HoverCard>
            </div>

            <div style={{flexBasis: 600}}>
              <HoverCard>
                <h4>Mid-size/Large Agency</h4>
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  padding: 3,
                }} >
                  <div>...everything in Freelancer tier</div>
                  <div>- Dedicated Account Support</div>
                  <div>- Team Collaborative Editing Feature</div>
                  <div>- Advanced Search Features</div>
                  <div>- Admin Control of Team Member Level of Access</div>
                  <div>- and more</div>
                </div>
                <div style={{marginTop: 20, display: 'flex', flexDirection: 'row', justifyContent: 'center'}} >
                  <div style={{margin: '0 5px'}} >
                    <OutlinedButton color={BASEGREEN} > Learn More </OutlinedButton>
                  </div>
                  <div style={{margin: '0 5px'}} >
                    <OutlinedButton color={BASERED} > Book a Demo </OutlinedButton>
                  </div>
                </div>
              </HoverCard>
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
                <p> Get a one-on-one product walkthrough with us !</p> 
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

          <div className='horizontal-center' style={{margin: '40px 0'}} >
            <div>
              <div style={{marginBottom: 10}} >
                <div >
                  <span style={{fontSize: '1.6em', fontWeight: 500}} >Not quite ready to dip your toe in but want to stay up-to-date on what's new?</span>
                </div>
                <div >
                  <span>Subscribe to Our Blog</span>
                </div>
              </div>
              <div>
                <RoundedInput placeholder='email' />
              </div>
            </div>
          </div>

          <div className='horizontal-center' style={{margin: '40px 0'}} >
            <div style={{padding: '20px 40px', background: LIGHTER_BACKGROUND_GREY}} >
              <div style={{marginBottom: 10}} >
                <div style={{textAlign: 'left'}} >
                  <span style={{fontSize: '0.8em'}} >Featured Blog Post</span>
                </div>
                <div style={{textAlign: 'left'}} >
                  <span style={{fontSize: '1.6em', fontWeight: 500}} >The Best Time To Pitch a Journalist</span>
                </div>
                <div style={{textAlign: 'left'}} >
                  <span>What does data say is the best time to pitch reporters?</span>
                </div>
              </div>
              <div className='vertical-center horizontal-center' style={{width: 700, height: 300, border: '4px solid red'}} >
                IMG CONTENTTTTT AND WORD
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
