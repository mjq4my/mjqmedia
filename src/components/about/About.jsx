import React from 'react'
import './about.css'
import me from '../../images/about.jpeg'
// import {MdWork} from 'react-icons/md'
import {ImList2} from 'react-icons/im'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {HiMusicNote} from 'react-icons/hi'
import {GrYoutube} from 'react-icons/gr'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about_container'>
        <div className='about_me'>
          <div className='about_me-image'>
            <img src={me} alt="About Image" />
          </div>
        </div>

        <div className='about_content'>
          <div className='about_cards'>

            <a href='#experience'>
              <article className='about_card'>
                <ImList2 className='about_icon'/>
                <h5>Experience</h5>
                <small>Click On Me</small>
              </article>
            </a>

            <a href='https://linkedin.com/in/michael-quinn33' target="_blank">
              <article className='about_card'>
                <BsLinkedin className='about_icon'/>
                <h5>LinkedIn</h5>
                <small>Click On Me</small>
              </article>
            </a>

            <a href='https://instagram.com/vibe.ratingz' target="_blank">
              <article className='about_card'>
                <HiMusicNote className='about_icon'/>
                <h5>Music Blog</h5>
                <small>Click On Me</small>
              </article>
            </a>

            <a href='https://github.com/mjq4my' target="_blank">
              <article className='about_card'>
                <BsGithub className='about_icon'/>
                <h5>GitHub</h5>
                <small>Click On Me</small>
              </article>
            </a>

            <a href='https://youtube.com/migsfigs' target="_blank">
              <article className='about_card'>
                <GrYoutube className='about_icon'/>
                <h5>YouTube</h5>
                <small>Click On Me</small>
              </article>
            </a>

          </div>
        </div>
      </div>

      <div className='whoiam'>
        <p>
          Hi! I'm Michael Quinn and this is my personal website!
          I built this using React, Github, and referencing online tutorials and AI. I want to use it
          to showcase my hobbies, as well as a means for communication. It is always a work
          in progress, and I hope you find what you're looking for!
        </p>
      </div>

    </section>
  )
}

export default About