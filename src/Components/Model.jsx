import React from 'react';
import specsImg from '../assets/specs.png';
import tooltipImg from '../assets/tooltip-right.svg';
import { RiPlayCircleFill } from "react-icons/ri";


function Model() {
  return (
    <div className='main'>
        <section className="model section" id="model">
            <h2 className="section--title" >
                MODEL SPECIFICATIONS
            </h2>

            <div className="model--container container grid">
                <div className="model--content">
                    <img src= { specsImg } 
                    alt="image" className="model--img" />

                    <div className="model--tooltip model--tooltip-1">
                        <img src= { tooltipImg } alt="" className="model--tooltip-img" />
                        <h4 className="model--tooltip-text">Noise Canceling</h4>
                    </div>

                    <div className="model--tooltip model--tooltip-2">
                        <img src={ tooltipImg } alt="" className="model--tooltip-img" />
                        <h4 className="model--tooltip-text">Rapid Charge</h4>
                    </div>

                    <div className="model--tooltip model--tooltip-3">
                        <img src={ tooltipImg } alt="" className="model--tooltip-img" />
                        <h4 className="model--tooltip-text">Stay-Aware Mode</h4>
                    </div>

                    <div className="model--tooltip model--tooltip-4">
                        <img src={ tooltipImg } alt="" className="model--tooltip-img" />
                        <h4 className="model--tooltip-text">Adjustable Sensory Bass</h4>
                    </div>
                </div>

                <a href="#" className="model--button button">
                    Buy Now <RiPlayCircleFill className='buy-icon'/>
                </a>
            </div>
        </section>
    </div>
  )
}

export default Model