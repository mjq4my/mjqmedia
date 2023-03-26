import React from 'react'
import './contact.css'
import {MdEmail} from 'react-icons/md'
import {FaFacebookMessenger} from 'react-icons/fa'
import {BsFillTelephoneFill} from 'react-icons/bs'

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>
      <div className='container contact_container'>
        <div className='contact_options'>

          <article className='contact_option'>
          <MdEmail className='contact_option-icon'/>
            <h4>Email</h4>
            <h5>michael.quinn808@gmail.com</h5>
            <a href="mailto:michael.quinn808@gmail.com" target="_blank">Send a Message</a>
          </article>

          <article className='contact_option'>
          <BsFillTelephoneFill className='contact_option-icon'/>
            <h4>Phone</h4>
            <h5>(703)-674-6554</h5>
            <a href="mailto:michael.quinn808@gmail.com">Send a Message</a>
          </article>

          <article className='contact_option'>
          <FaFacebookMessenger className='contact_option-icon'/>
            <h4>Messenger</h4>
            <h5>Facebook</h5>
            <a href="https://m.me/michael.quinn.921" target="_blank">Send a Message</a>
          </article>

        </div>

        <form action="">
          <input type ="text" name='name' placeholder='Your Name' required></input>
          <input type ="email" name='email' placeholder='Your Email' required></input>
          <textarea name ="message" rows='7' placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>

      </div>
    </section>
  )
}

export default Contact