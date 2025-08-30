import React from 'react'
import './Hero.css'
import Navbar from '../Navbar/Navbar'
import profile_pic from '../../assets/IMG-20250829-WA0091-Photoroom.png'
// import arrow_icon from '../../assets/arrow-icon.png'
import resume from '../../assets/OWAH- Digital Mkt_011154.pdf'
import '../../App'

const Hero = () => {
  return (
    <>
    <Navbar />

      <div className='intro' id='home-section'>

      <section id='intro'>

        <div className="introContent">  

          <span className="hello">Hello there,</span>

          <span className="introText">
            I'm <span className='introName'>Lovelyn </span><br />
          </span>
          <span className='introRole'>Business growth strategist <br /> and Copywriter</span>

          <p className="introPara"> 
            I focus on one thing: <br />helping businesses sell more and grow faster.</p>
          
          <a href={resume} download id='works-button' >
            <button className='more-button'>Download Resume'</button>
          </a>
          
        </div>

        <div className='image'>
          <img src={profile_pic} alt="profile picture" />
        </div>
      
      </section>
    </div>
    </>
  )
}

export default Hero
