import React from 'react';
import aboutImg from '../assets/about-img.png';
import { RiInformationFill } from "react-icons/ri";


function About(props) {
  return (
    <main className="main">
    <section className="about section" id="about">
    <div className="about--container container grid">
        <div className="about--data">
            <h2 className="section--title">
                MORE ABOUT US
            </h2>
            <p className="about--description">   
            {props.description}                
            </p>
            <a href="#" className="button">
                Know More <RiInformationFill className='info-icon' />
            </a>
        </div>
        <img src={ aboutImg } alt="About-Image" className="about--img" />
    </div>
</section>
</main>
  )
}

export default About