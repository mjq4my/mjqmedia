import React from 'react'
import './experience.css'
import {HiBadgeCheck} from 'react-icons/hi'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I have</h5>
      <h2>My Experience</h2>

      <div className='container experience_container'>

        <div className='experience_software'>
          <h3>Software Skills</h3>
          <div className='experience_content'>

            <article className='experience_details'>
              <HiBadgeCheck className='experience_details-icon'/>
              <div>
                <h4>Python</h4>
                {/* <small className='text-light'>Experienced</small> */}
              </div>       
            </article>     

            <article className='experience_details'>
              <HiBadgeCheck className='experience_details-icon'/>
              <div>
                <h4>Terraform</h4>
              </div>
            </article>

            <article className='experience_details'>
              <HiBadgeCheck className='experience_details-icon'/>
              <div>
                <h4>AWS</h4>
              </div>
            </article>

            <article className='experience_details'>
              <HiBadgeCheck className='experience_details-icon'/>
              <div>
                <h4>React.js</h4>
              </div>
            </article>

          </div>
        </div>

        <div className='experience_data'>
          <h3>Data Skills</h3>
          <div className='experience_content'>

            <article className='experience_details'>
              <HiBadgeCheck className='experience_details-icon'/>
              <div>
                <h4>Python</h4>
                {/* <small className='text-light'>Experienced</small> */}
              </div>
            </article>

            <article className='experience_details'>
              <HiBadgeCheck className='experience_details-icon'/>
              <div>
                <h4>SQL</h4>
              </div>
            </article>

            <article className='experience_details'>
              <HiBadgeCheck className='experience_details-icon'/>
              <div>
                <h4>Apache Spark</h4>
              </div>
            </article>

            <article className='experience_details'>
              <HiBadgeCheck className='experience_details-icon'/>
              <div>
                <h4>AWS Glue</h4>
              </div>
            </article>

          </div>
        </div>

      </div>


    </section>
  )
}

export default Experience