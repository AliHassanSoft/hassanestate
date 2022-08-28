import React from 'react'
import aboutImage from '../images/hero.png'

function About() {
  return (
    <div className='about'>
        <div className='about-model'>
            <img src={aboutImage} alt="about image" />
        </div>
        <div className='about-text'>
            <h2>We Are The Best <br />Real Estate Company</h2>
            <p>Feel free to Connect with us, We Have Thousands of
                Satisfied customers. You can Also Check &amp; read their
                reviews about us &amp; you can also give your FeedBack to
                help us to improve more.</p>
                <button>Click for more Details</button>
        </div>
    </div>
  )
}

export default About