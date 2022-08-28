import React from 'react';
import Navbar from './Navbar';

function Header() {
  return (
    <div className='header'>
      <Navbar/>
      <div className='intro'>
        <p>Looking For a Property !</p>
        <h1><span>Buy </span>and<span> Sell</span> Properties</h1>
        <p className='details'>
          If you are interested to Buy New Property than you are at right place.
          And Don't worry if you wan't to Sell Your Property Its Easy than you think
          So what are you waiting for ?
        </p>
        <a href="#" className='header-btn' style={{width: "130px"}}>Proceed Now</a>
      </div>
    </div>
  )
}

export default Header;
