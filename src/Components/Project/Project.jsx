import React from 'react'
import Projects from '../Projects/Projects'
import pic from '../../1.png'
import pic2 from '../../2.png'
import pic3 from '../../3.png'
import './Project.css'

const Project = () => {

  const videos=[
    {src: "https://tienda-eyestronomy.netlify.app", pic: pic},
    {src: "https://eyestronomy-ecommerce.netlify.app", pic: pic2},
    {src: "https://eyestronomy.netlify.app", pic: pic3}
  ]
  return (
    <>
    <Projects/>
    <div>
      <h2 className='check'>CHECK MY PROJECTS!</h2>
    <ul className='myList'>
      {videos.map((item, index) => <li key={index} className='list'><a href={item.src} target='blank' aria-hidden='false'>
      <img className='pages' src={item.pic} alt='tienda'/></a></li>)}
    </ul>
    </div>
    </>
    
  )
}

export default Project