import React from 'react';
import '../src/styles.css';
import '../src/breakpoints.css'
import Navbar from './Components/Navbar';
import Main from './Components/Main';
import About from './Components/About';
import Slider from './Components/Slider';
import Model from './Components/Model';
import Sponsors from './Components/Sponsors';
import Footer from './Components/Footer';
import Scroll from './Components/Scroll';


function App(props) {
  return (
    <div>
      <Navbar />
      <Main />
      <About 
       description="Skullcandy, a leading lifestyle audio brand, is renowned for seamlessly blending
       advanced technology with stylish design to create premium audio products. 
       Their products feature cutting-edge audio technology, providing users with an
       immersive sound experience and emphasizing wireless freedom for on-the-go lifestyles."
       />
      <Slider />
      <Model />
      <Sponsors />
      <Footer />
      <Scroll />
    </div>
  )
}

export default App;