import React from 'react';

function Howitwork() {
  return (
    <div className='how-it-works'>
        <div className='container'>
            <h2>How it Works</h2>
            <div className='flex'>

                <div>
                    <span className='fas fa-home'></span>
                    <h4>Find a Property</h4>
                    <p>Here you can search for a Property</p>
                </div>

                <div>
                    <span className='fas fa-dollar-sign'></span>
                    <h4>Buy a Property</h4>
                    <p>Here you can Buy a Property</p>
                </div>

                <div>
                    <span className='fas fa-chart-line'></span>
                    <h4>Invest in Property</h4>
                    <p>Here you can Invest &amp; Share a Property</p>
                </div>

            </div>
        </div>
      
    </div>
  )
}

export default Howitwork;
