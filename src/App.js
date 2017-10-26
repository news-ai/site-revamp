import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import logo from './logo.svg';
import './css/stylesheet.css';
import './css/stylesheet-medium.css';
import './css/stylesheet-wide.css';
import './css/stylesheet-wider.css';

class App extends Component {
  render() {
    return (
      <div id="wrapper"> 
        <div id="landing" className="grey-font">
          <div className="logo hide-wide"> 
            <p> NewsAI </p> 
          </div> 
          <div className="hide-narrow"> 
            <nav id="scrollnav"> 
              <ul id="left-scroll">
                <li className="left-list logo-3"> NewsAI </li> 
                <li className="left-list"> Pricing </li> 
                <li className="left-list"> Blog </li> 
              </ul> 
              <ul id="right-scroll"> 
                <li className="right-list"> Free Trial </li> 
                <li className="right-list"> Request a Demo </li> 
              </ul> 
            </nav> 
            <nav id="navbar">   
              <div className="logo-2"> 
                <p> NewsAI </p> 
              </div> 
              <ul className="right-nav"> 
                <li className="link-nav"> Pricing </li> 
                <li className="link-nav"> Blog </li> 
                <li className="link-nav login-nav"> Login </li> 
              </ul>  
            </nav> 
          </div> 

          <div id="airplane-1"> 
            <img src="assets/images/airplane-2.png" /> 
          </div> 

          <div id="cloud"> 
            <img src="assets/images/cloud.png" /> 
          </div> 

          <div className="flex-center"> 
            <div id="subtitle"> Send personalized pitches with less work </div> 
          </div>

          <div className="flex-center"> 
            <div id="subsubtitle"> A list building and email distribution tool for PR professionals </div> 
          </div>

          <div id="airplane-2"> 
            <img src="assets/images/airplane-1.png" /> 
          </div>

          <div id="demo-landing"> 
            <div id="demo-email">
              <input type="text" name="email" placeholder="email@company.com" />
            </div> 
            <div id="request-demo-button"> 
              <p> Request a Demo </p>
            </div> 
          </div>
        </div> 
        
          <div id="content"> 
            <div id="boat"> 
              <img src="assets/images/boat.png" /> 
            </div> 
            <div className="flex-center"> 
              <div id="tagline"> Streamline your workflow with tools made for public relations professionals.</div> 
            </div> 
            <div className="flex-center"> 
              <div className="feature"> 
                <div className="feature-image">
                  <img src="assets/images/bird-mobile.png" /> 
                </div> 
                <div className="description description-margin"> 
                  <div className="feature-title left-align"> 
                    <p> Personalize Your Pitch </p> 
                  </div> 
                  <div className="feature-description">
                    <p> Effortlessly send personalized pitches to anyone on your media lists and monitor your pitch success.</p> 
                  </div> 
                  <div className="feature-learn-more">
                    <p> Learn more </p> 
                  </div> 
                </div> 
              </div>
            </div> 
            <div className="flex-center"> 
              <div className="feature"> 
                <div className="feature-image switch-image">
                  <img src="assets/images/fox-mobile.png" /> 
                </div> 
                <div className="description switch-description"> 
                  <div className="feature-title left-align">
                    <p> Do it All On One Platform </p> 
                  </div> 
                  <div className="feature-description"> 
                    <p> Centralize and easily manage your media lists on a single platform.  </p> 
                  </div> 
                  <div className="feature-learn-more">
                    <p> Learn more </p> 
                  </div> 
                </div> 
              </div>
            </div> 
            <div className="flex-center"> 
              <div className="feature"> 
                <div className="feature-image">
                  <img src="assets/images/snail-mobile.png" /> 
                </div> 
                <div className="description description-margin"> 
                  <div className="feature-title left-align"> 
                    <p> Stay Up to Date with Influencers </p> 
                  </div> 
                  <div className="feature-description">
                    <p> Painlessly stay up to date with what contacts on your media lists are posting on social media. </p> 
                  </div> 
                  <div className="feature-learn-more">
                    <p> Learn more </p> 
                  </div> 
                </div> 
              </div>
            </div> 
            <div className="flex-center"> 
              <div className="feature"> 
                <div className="feature-image switch-image">
                  <img src="assets/images/collaborate-mobile.png" /> 
                </div> 
                <div className="description switch-description"> 
                  <div className="feature-title left-align">
                    <p> Bring it All Together </p> 
                  </div> 
                  <div className="feature-description"> 
                    <p> Consolidate your agency’s contacts by sharing and collaborating on media lists. </p> 
                  </div> 
                  <div className="feature-learn-more">
                    <p> Learn more </p> 
                  </div> 
                </div> 
              </div>
            </div> 
            <div className="flex-center"> 
              <div id="seen-in"> 
                <div className="feature-title">
                  <p> As Seen In </p> 
                </div> 
                <div className="logos"> 
                  <img src="assets/images/pr_daily.png" /> 
                </div> 
              </div> 
            </div> 
            <div className="flex-center"> 
              <div id="request-demo"> 
                <div className="feature-title">
                  <p> Request a Live Demo </p> 
                </div> 
                <div className="feature-description-2"> 
                  <p> Get a one on one product walkthrough with us !</p> 
                </div> 
                <div className="demo-2">
                  <input type="text" name="email" placeholder="Email Address" />
                </div> 
                <div className="demo-2">
                  <input type="text" name="email" placeholder="Name" />
                </div> 
                <div id="request-demo-button-2"> 
                  <p> Request a Demo</p>
                </div> 
              </div> 
            </div> 
          </div> 
        <div id="footer"> 
          <img className="social-media-image" src="assets/images/facebook.png" />
          <img className="social-media-image" src="assets/images/linkedin.png" />
          <img className="social-media-image" src="assets/images/medium.png" />
          <img className="social-media-image" src="assets/images/twitter.png" />
        </div> 
      </div> 
    );
  }
}

export default App;
