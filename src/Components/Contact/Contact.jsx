import React from 'react'
import Projects from '../Projects/Projects'
import git from '../../github.png'
import link from '../../link.png'
import './Contact.css'


const Contact = () => {
  return (
    <>
    <Projects/>
    <h3 className='contact'>CONTACT ME</h3>
    <div className='redes'>
      <a href='https://github.com/estefad' target='blank'><img className='red' src={git} alt='github'></img></a>
      <a href='https://www.linkedin.com/in/estefania-dominguez-b344ab99/' target='blank'><img className='red' src={link} alt='linkedn'></img></a>
    </div>
    </>
    
  )
}

export default Contact