import React from 'react'
import './about.css'
import headshot from '../../images/grandcanyon01.jpeg'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about_container'>
        <div className='about_me'>
          <div className='about_me-image'>
            <img src={headshot} alt="About Image" />
          </div>
        </div>

        <div>
          <p>
            Hello, my name is Michael Quinn and welcome to my personal website!
            I built this using React and by following online tutorials. I want to
            showcase my hobbies, as well as use it as a way to get in contact with
            me. It is always a work in progress, and I hope you find what you're
            looking for!
          </p>
        </div>

      </div>
    </section>
  )
}

export default About