import React from 'react'
import '../App.css'
import heroimg from './5251.jpg'
const Hero = () => {

    return (
        <div>



   

       <section className="hero" id="ab">
        <div className="hero-text" data-aos="slide-left">
            <h1>The Creators Academy</h1>
            <h2>Changing the way of learning..</h2>
        </div>
    </section>
    <div className="bg" >
        <img src={heroimg} alt="img" />
    </div>  
    
   </div>
    );
}
   
export default Hero
