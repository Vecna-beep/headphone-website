import React, { useState, useEffect } from 'react';
import { RiArrowUpSLine } from "react-icons/ri";
import ScrollReveal from 'scrollreveal';

function Scroll() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    let sr;  // Declare a local variable

    const handleScroll = () => {
      setShowScroll(window.scrollY >= 350);
    };

    // Add event listener for scroll
    window.addEventListener('scroll', handleScroll);

    // Initialize ScrollReveal after a delay
    const revealTimeout = setTimeout(() => {
      sr = ScrollReveal({
        origin: 'top',
        distance: '60px',
        duration: 2500,
        delay: 300,
        reset: true, // Animation Repeat
      });

      // Your reveal effects
      sr.reveal(`.home--social, .new--container, .sponsor--container, .footer`);
      sr.reveal('.home--title span', { origin: 'left', opacity: 1 });
      sr.reveal('.home--title2 span', { origin: 'right', opacity: 1 });
      sr.reveal('.home--tooltip, .home--button', { origin: 'bottom' });
      sr.reveal('.about--data', { origin: 'left' });
      sr.reveal('.about--img ', { origin: 'right' });
      sr.reveal('.model--tooltip ', { origin: 'right' });
      sr.reveal('.model--button ', { origin: 'bottom' });
      // sr.reveal('.model--tooltip-2, .model--tooltip-3, .model--tooltip-1, .model--tooltip-4 ', { origin: 'rightt' });

    }, 500); // Adjust the delay as needed

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(revealTimeout);
    };
  }, []);

  const scrollUp = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <a href="#" className={`scrollup ${showScroll ? 'show-scroll' : ''}`} id="scroll-up" onClick={scrollUp}>
      <RiArrowUpSLine />
    </a>
  );
}

export default Scroll;









