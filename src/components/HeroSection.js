import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import Find from './Find';
function HeroSection() {
  
  return (
    <div className='hero-container'>
      <p>Best Voip Phone 
        Systems for 
        Small Business
      </p>
      {/* <p>Unlimited Business Benefits with UnifiedRing</p> */}
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          14-Day free Trial
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          // onClick={console.log('hey')}
        >
          Plan Purchase
          <i className='far fa-play-circle' />
        </Button>
     
      </div>
      {/* <Find/> */}
    </div>  
  );
}

export default HeroSection;