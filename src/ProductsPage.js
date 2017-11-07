import React, { Component } from 'react';
import {
  Route,
  Link
} from 'react-router-dom';
import OutlinedButton from './OutlinedButton';
import FontIcon from 'material-ui/FontIcon';

const DEFAULT_BACKGROUND_GREY = '#ECECEC';
const LIGHTER_BACKGROUND_GREY = '#F8F8F8';
const GREYFONT = '#E2E3DD';

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

const ProductOverview = () => (
  <div>
    <div className='horizontal-center'>
      <div style={{padding: 20, background: 'lightblue'}} >
        <h4>Flexible List-Making while Keeping Contacts Up-to-Date</h4>
        <div>No more duplicate information across multiple Excel sheets for the same contacts. We know that building media list is your bread-and-butter, but sync-ing information up-to-date across lists shouldn't be a pain.</div>
        <div style={{margin: 10}} >
          <Link to='/products/organize'>
            <OutlinedButton>Learn More</OutlinedButton>
          </Link>
        </div>
      </div>
    </div>
    <div className='horizontal-center'>
      <div style={{padding: 20, background: 'lightblue'}} >
        <h4>PERSONALIZE YOUR PITCH</h4>
        <div>marketing stucfffff</div>
        <div style={{margin: 10}} >
          <Link to='/products/personalize-pitch'>
            <OutlinedButton>Learn More</OutlinedButton>
          </Link>
        </div>
      </div>
    </div>
    <div className='horizontal-center'>
      <div style={{padding: 20, background: 'lightblue'}} >
        <h4>EMAIL ANALYTICS</h4>
        <div>marketing stucfffff</div>
        <div style={{margin: 10}} >
          <Link to='/products/email-analytics'>
            <OutlinedButton>Learn More</OutlinedButton>
          </Link>
        </div>
      </div>
    </div>
    <div className='horizontal-center'>
      <div style={{padding: 20, background: 'lightblue'}} >
        <h4>DIFFERENT EMAILS</h4>
        <div>marketing stucfffff</div>
        <div style={{margin: 10}} >
          <Link to='/products/different-emails'>
            <OutlinedButton>Learn More</OutlinedButton>
          </Link>
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

const SyncCommunicationsToContact = () => (
  <div>
    <div>Flexible List Building but Have Information All Go to One Place</div>
    <div>
      <div>One Place to Check for All Previous Communication</div>
      <p>Create as many media lists with duplicates as you want, when you update the contact in one, we'll update the same contact in all other lists that it is on.</p>
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
    <div className='horizontal-center' style={{margin: '10px 0'}} >
      <span style={{fontSize: '2.2em'}} >Tagline here meet here</span>
    </div>
    <div className='horizontal-center' style={{margin: '20px 0'}} >
      <span style={{fontSize: '1.8em'}} >Organize your contacts blah blah blah taglineeeeeeee</span>
    </div>
    <div className='horizontal-center'>
      <div style={{width: 800, height: 500, border: '5px solid green'}} > PRODUCT IMAGE PLACEHOLDER HERE</div>
    </div>
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