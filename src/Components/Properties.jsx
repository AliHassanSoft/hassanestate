import React from 'react';
import Bproperty from './Bproperty';
import pimage1 from '../images/p1.png';
import pimage2 from '../images/p2.png';
import pimage3 from '../images/p3.png';

function Properties() {
  return (
    <div className='product'>
        <div className='p-heading'>
            <h3>Properties</h3>
            <p>Here You can see the secion of Properties, Choose you like the most.</p>
        </div>
        
        <div className='product-container'>
            <Bproperty image={pimage1} name='Al-Haram Tower' price='$240,000'></Bproperty>
            <Bproperty image={pimage2} name='Al-Hafiz' price='$300,000'></Bproperty>
            <Bproperty image={pimage3} name='Al-Raheem' price='$330,000'></Bproperty>
        </div>
    </div>
  )
}

export default Properties;
