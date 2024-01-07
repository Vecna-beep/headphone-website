import React from 'react';
import heroImg from '../assets/home-img.png';
import tooltip from '../assets/tooltip-right.svg';
import { RiPlayCircleFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa"; 


function Main() {

  return (
    <main className="main">
        <section className="home section" id="home">
            <div className="home--container container grid">
                <div className="home--content">
                    <img src= { heroImg }
                     alt="image" className="home--img" />

                     <h1 className="home--title">
                        <span>S</span>
                        <span>K</span>
                        <span>U</span>
                        <span>L</span>
                        <span>L</span>
                     </h1>
                     <h1 className="home--title2">
                        <span>C</span>
                        <span>A</span>
                        <span>N</span>
                        <span>D</span>
                        <span>Y</span>
                     </h1>

                     <div className="home--tooltip">
                        <img src= { tooltip }
                        alt='' className='home--tooltip-img'/>
                        <h4 className="home--tooltip-text">₹64,999</h4>
                     </div>
                </div>

                <a href="#" className="home--button button">
                    Buy Now <RiPlayCircleFill className='buy-icon' />
                </a>
            </div>
        </section>
    </main>
  )
}

export default Main;


