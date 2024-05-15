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
                <h4>Git</h4>
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
                <h4>PySpark</h4>
              </div>
            </article>

            <article className='experience_details'>
              <HiBadgeCheck className='experience_details-icon'/>
              <div>
                <h4>ETL</h4>
              </div>
            </article>
          </div>
        </div>

        <div className='experience_certification'>
          <h3>Certifications</h3>
          <div className='experience_content'>

            <article className='experience_details'>
              <HiBadgeCheck className='experience_details-icon'/>
              <div>
                <a target="_blank" href='https://www.credly.com/badges/d4c1434d-1f12-4b8b-8d13-86cbfe69f582/public_url'>AWS SAA</a>
              </div>
            </article>

            <article className='experience_details'>
              <HiBadgeCheck className='experience_details-icon'/>
              <div>
                <a target="_blank" href='https://www.credly.com/badges/7e07a339-ae08-45b6-8f1a-939c43606820/public_url'>AWS CCP</a>
              </div>
            </article>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Experience