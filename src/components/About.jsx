import React from 'react'
import BasicExample from './AboutSectionCard'

const About = () => {
  return (
    <div className='py-5' >
      <h4 className='text-center'>Heading</h4>
      <h6 className='text-center text-secondary py-1'>Subheading</h6>
      <div className='d-flex flex-column align-items-center col-12 p-3'>
          <BasicExample/>
          <BasicExample/>
          <BasicExample/>
      </div>
    </div>
  )
}

export default About
