import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import { Card } from 'react-bootstrap';
function Cards() {
  return (
    <div className='cards'>
      <h1>Unlimited Business Benefits with UnifiedRing</h1>
      <p>Manage virtual teams with maximum effeciency.</p>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          {/* <ul className='cards__items'> */}
          {/* <CardItem
              src='images/img-1.jpg'
              text='Explore the hidden waterfall deep inside the Amazon Jungle'
              label='Adventure'
              path='/services'
            /> */}
          {/* <CardItem
              src='images/img-2.jpg'
              text='Travel through the Islands of Bali in a Private Cruise'
              label='Luxury'
              path='/services'
            /> */}
          {/* </ul> */}
          <ul className='cards__items'>
            <CardItem
              img src='images/img-2.jpg'
              text='No installation,no activation fee,and no set-up fee'
              label='Mystery'
              path='/services'
            />
            <CardItem
              src='images/img-3.jpg'
              text='Get auto-receptionist to handle calls with customized and information IVRs.'
              label='Adventure'
              path='/products'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Chat and collaborate effeciently with your remote teams'
              // label='Adrenaline'
              path='/sign-up'
            />
          </ul>
          <div className='cards__items'>
            <h1>Find the Right Plan your Communication</h1>
            {/* <h2>User Range</h2> */}
          </div>

          <div style={{ display: 'flex' }}>

            <Card className='card__size'>
              <p className='paint'>Starter</p>
              <>User/Monthly</>
              <button className='color'>Buy Now</button><br/>
              <p className='content'>14 days of trial</p>
              {/* <input type=''> 14 days of trial</input> */}
              <p className='paragraph'>Up to 20 users only Business phone or toll-free numbers Unlimited calls within the US/CA* Unlimited business SMS Voicemail-to-text Team messaging Document sharing.</p>
              
            </Card>

            <Card className='card__size'>
              <p className='paint'>Standard</p>
              <>User/Monthly</>
              <button className='color'>Buy Now</button>
              <p className='content'>14 days of trial</p>
              <p className='paragraph'>No limit on number of users Business phone numbers in over 100 countries Unlimited internet fax Unlimited audio conferencing Video meetings with up to 100 participants Up to 24-hour meeting duration Quality-of-service reports Popular integrations including Office 365, G Suite, Slack, and more 24/7 support.</p>
            </Card>

            <Card className='card__size'>
              <p className='paint'>Professional</p>
              <>User/Monthly</>
              <button className='color'>Buy Now</button>
              <p className='content'>14 days of trial</p>
              <p className='paragraph'>Automatic call recording Single Sign-on Multi-site admin and management Up to 8-digit extensions with site codes Hot desking Advanced call handling including whisper, barge, and more Video meetings with up to 200 participants Real-time analytics Popular CRM integrations with Salesforce, Zendesk, and more.</p>
            </Card> 

            <Card className='card__size'>
              <p className='paint'>Enterprise</p>
              <>User/Monthly</>
              <button className='color'>Buy Now</button>
              <p className='content'>14 days of trial</p>
              <p className='paragraph'>Device status reports Device status alerts Unlimited storage**.</p>
            </Card>         
          </div>
          <div>
            <h1 className='header' >ComparePlan</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Cards