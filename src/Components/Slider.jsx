import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/swiper-bundle.css';
import model1 from '../assets/model1.png';
import model2 from '../assets/model2.png';
import model3 from '../assets/model3.png';
import model4 from '../assets/model4.png';


function Slider() {
    const [activeIndex, setActiveIndex] = useState(0);
    const spanTexts = [
        "Crusher® ANC 2 Sensory Bass",
        "Riff On-Ear Headphone",
        "Crusher® Evo Sensory Bass",
        "Hesh® Evo Wireless Headphones"
      ];
  
    const handleSlideChange = (swiper) => {
      setActiveIndex(swiper.realIndex);
    };
  
    return (
      <main className="main">
        <section className="new section" id="new">
          <h2 className="section--title">CHOOSE YOUR FAVOURITE</h2>
  
          <div className="new--container">
            <div className="new--swiper swiper">
              <Swiper
                loop={true}
                slidesPerView={2}
                centeredSlides={true}
                grabCursor={true}
                breakpoints={{
                  768: {
                    slidesPerView: 3,
                  },
                }}
                onSlideChange={handleSlideChange}
                className="swiper-wrapper"
              >
                {[model1, model2, model3, model4].map((model, index) => (
                  <SwiperSlide key={index}>
                    <article
                      className={`new--article ${
                        activeIndex === index % 4 ? 'active' : ''
                      }`}
                    >
                      <img src={model} alt={`image${index}`} className="new--img" />
                      <span className="new--model">{spanTexts[index]}</span>
                    </article>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </section>
      </main>
    );
  }
  
  export default Slider;
