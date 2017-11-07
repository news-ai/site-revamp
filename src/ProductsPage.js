import React from 'react';
import {
  Route,
  Link
} from 'react-router-dom';
import OutlinedButton from './OutlinedButton';
import SolidButton from './SolidButton';
import HoverCard from './HoverCard';
import FontIcon from 'material-ui/FontIcon';
import macbookListMockup from './images/mockup_listpage_on_macbook.png';
import {grey700} from 'material-ui/styles/colors';

const DEFAULT_BACKGROUND_GREY = '#ECECEC';
const LIGHTER_BACKGROUND_GREY = '#F8F8F8';
const BASEGREEN = '#488209';
const GREYFONT = '#E2E3DD';

const SyncCommunicationsToContact = () => (
  <div>
    <div>
      <h4>Flexible List Building but Have Information All Go to One Place</h4>
    </div>
    <div style={{display: 'flex', justifyContent: 'center'}}>
      <div>
        <img height={200} src={macbookListMockup} />
      </div>
      <div>
        <div>One Place to Check for All Previous Communication</div>
        <div>
          <p>Create as many media lists with duplicates as you want, when you update the contact in one, we'll update the same contact in all other lists that it is on.</p>
        </div>
      </div>
    </div>
  </div>
  );

const DifferentEmailForDifferentClients = () => (
  <div>
    <div>Email Integrations</div>
    <div>
      <div>Different Email Address for Each Client</div>
      <p>Set up your multiple email addresses with our service and attach email signature to each one for easy switching when your workon different client's campaigns</p>
    </div>
    <div>
      <div>Gmail/Outlook/Private Email Server</div>
      <p>Easily integrate our platform to use your existing email provider to deliver your campaigns</p>
    </div>
    <div>
      <button>Try It for Yourself</button>
    </div>
  </div>
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
      <button>Try It for Yourself</button>
    </div>
  </div>
  );

const EmailAnalytics = () => (
  <div>
    <div>Understand Metrics, See Trends, Improve Results</div>
    <div>
      <div>Open/Click Rate Per Email</div>
      <p>See how many times a recepient opened your email and clicked on embedded links to gauge interest</p>
    </div>
    <div>
      <div>Campaign Breakdown</div>
      <p>A glance view of how a campaign performed</p>
    </div>
    <div>
      <div>Week-to-Week</div>
      <p>Track how your campaigns are being received over time</p>
    </div>
    <div>
      <button>Try It for Yourself</button>
    </div>
  </div>
  );

const ProductFeatureCard = ({title, tagline, to, textBlockPosition}) => (
    <div className='horizontal-center' style={{margin: '30px 0'}} >
      <HoverCard>
        <div style={{
          padding: '30px 20px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }} >
          <div style={{
            flex: 1,
            order: textBlockPosition === 'left' ? 1 : 0,
            display: 'flex',
            justifyContent: 'center'
          }} >
            <div style={{height: 100, width: 100, border: '3px solid red'}} ></div>
          </div>
          <div style={{
            flex: 2,
            padding: '0 15px'
          }} >
            <div>
              <span style={{fontSize: '1.3em'}} >{title}</span>
            </div>
            <div style={{
              margin: '20px 5px',
              color: grey700,
            }} >{tagline}</div>
            <div style={{
              display: 'flex',
              justifyContent: 'center'
            }} >
              <Link to={to} >
                <OutlinedButton color={BASEGREEN} >Learn More</OutlinedButton>
              </Link>
            </div>
          </div>
        </div>
      </HoverCard>
    </div>
  );

const ProductOverview = () => (
  <div>
    <div className='horizontal-center' style={{margin: '10px 0'}} >
      <span style={{fontSize: '2.2em'}} >Tagline here meet here</span>
    </div>
    <div className='horizontal-center' style={{margin: '20px 0'}} >
      <span style={{fontSize: '1.8em'}} >Organize your contacts blah blah blah taglineeeeeeee</span>
    </div>
    <div className='horizontal-center'>
      <div style={{width: 800, height: 500, border: '5px solid green'}} > PRODUCT IMAGE PLACEHOLDER HERE</div>
    </div>
    <ProductFeatureCard
    title='Flexible List-Making while Keeping Contacts Up-to-Date'
    tagline="No more duplicate information across multiple Excel sheets for the same contacts. We know that building media list is your bread-and-butter, but sync-ing information up-to-date across lists shouldn't be a pain."
    to='/products/organize'
    />
    <ProductFeatureCard
    textBlockPosition='left'
    title='PERSONALIZE YOUR PITCH'
    tagline="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    to='/products/personalize-pitch'
    />
    <ProductFeatureCard
    title='EMAIL ANALYTICS'
    tagline="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    to='/products/email-analytics'
    />
    <ProductFeatureCard
    textBlockPosition='left'
    title='DIFFERENT EMAILS'
    tagline="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    to='/products/different-emails'
    />
    <div className='horizontal-center' style={{margin: '40px 0', padding: 20, background: LIGHTER_BACKGROUND_GREY}} >
      <SolidButton color={BASEGREEN} >Try It for Yourself</SolidButton>
    </div>
  </div>
  );


const routes = [
  {
    exact: true,
    name: 'Overview',
    component: ProductOverview,
    path: '/products'
  },
  {
    name: 'Organize',
    component: SyncCommunicationsToContact,
    path: '/products/organize'
  },
  {
    name: 'Personalize Pitch',
    component: PersonalizeYourPitch,
    path: '/products/personalize-pitch'
  },
  {
    name: 'Email Analytics',
    component: EmailAnalytics,
    path: '/products/email-analytics'
  },
  {
    name: 'Email Integrations',
    component: DifferentEmailForDifferentClients,
    path: '/products/different-emails'
  },
];

const LinkLabel = ({to, children}) => (
  <Link style={{textDecoration: 'none'}} to={to}>
    <div className='vertical-center' style={{
      padding: 5,
      background: 'lightblue',
      color: 'red'
    }} >{children}</div>
  </Link>
  );

const ProductsPage = props => (
  <div style={{
    position: 'relative',
    padding: '50px 0',
    background: DEFAULT_BACKGROUND_GREY,
  }} >
    {routes.map((route, i) =>
      <div>
        <Route exact={route.exact} key={route.path} path={route.path} component={route.component} />
        <Route exact={route.exact} key={route.path + '-btns'} path={route.path} component={() => route.exact ? null : (
            <div style={{display: 'flex', justifyContent: 'space-around'}} >
            {i > 0 &&
              <LinkLabel to={routes[i-1].path}>
                <FontIcon className='fa fa-arrow-left' style={{fontSize: '0.9em', margin: '0 5px'}} />
                <span>Go to {routes[i-1].name}</span>
              </LinkLabel>}
            {i < routes.length-1 &&
              <LinkLabel to={routes[i+1].path}>
                <span>Go to {routes[i+1].name}</span>
                <FontIcon className='fa fa-arrow-right' style={{fontSize: '0.9em', margin: '0 5px'}} />
              </LinkLabel>}
            </div>
          )
        } />
      </div>
      )}
  </div>
  );

export default ProductsPage;