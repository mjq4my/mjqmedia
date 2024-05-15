import React from 'react'
import resume from '../../assets/resume.pdf'

// ########### CTA = Call to Action ###########

const CTA = () => {
  return (
    <div className='cta'>
        <a href = "#contact" className='btn'>Let's Talk</a>
        {/* <a href = {resume} download className='btn btn-primary'>Download Resume</a> */}
    </div>
  )
}

export default CTA