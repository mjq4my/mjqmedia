import React from 'react'
import './highlight.css'
import me from '../../images/mq_antarctica.jpeg'
// import {MdWork} from 'react-icons/md'
import {ImList2} from 'react-icons/im'
import {HiMusicNote} from 'react-icons/hi'
import {GrYoutube} from 'react-icons/gr'

const Highlight = () => {
  return (
    <section id='highlight'>
      <h5>See My Stuff</h5>
      <h2>Highlights</h2>

      <div className='container highlight_container'>
        <iframe
        width="853"
        height="480"
        src={`https://www.youtube.com/embed/Y5ssq8rWnIo`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
      </div>

    </section>
  )
}

export default Highlight