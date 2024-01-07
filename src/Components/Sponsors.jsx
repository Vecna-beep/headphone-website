import React from 'react';
import image1 from '../assets/sponsor-1.png';
import image2 from '../assets/sponsor-2.png';
import image3 from '../assets/sponsor-3.png';
import image4 from '../assets/sponsor-4.png';

function Sponsors() {
  return (
    <main className='main'>
        <section className="sponsor section">
          <div className="sponsor--container container grid">
            <img src= { image1 } alt="image" className="sponsor--img" />
            <img src= { image2 } alt="image" className="sponsor--img" />
            <img src= { image3 } alt="image" className="sponsor--img" />
            <img src= { image4 } alt="image" className="sponsor--img" />
          </div>
        </section>
    </main>
  )
}

export default Sponsors