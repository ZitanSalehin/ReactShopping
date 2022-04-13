import React from 'react';
import './Range.css';

function Range() {
  return (
    <div><p>Price Range:</p>

    <div>
      <input className='range' type="range" id="volume" name="volume"
             min="0" max="11"/>
      <label for="volume">Price</label>
    </div>
    
    {/* <div>
      <input className='range' type="range" id="cowbell" name="cowbell" 
             min="0" max="100" value="90" step="10"/>
      <label for="cowbell">Distance</label>
    </div> */}
    </div>
  )
}

export default Range