import React from 'react'
import { Link } from 'react-router-dom'
import './Projects.css'


const Projects = () => {
  return (
    <>
    <div className='nav'>
        <div className="container-fluid">
        <Link to={`/`}>
        <a className='navbar-brand nav-link' href='"#"'>HOME</a>
        </Link>
        </div>

        <div className="container-fluid">
        <Link to={`/Project`}>
        <a className='navbar-brand nav-link' href='"#"'>PROJECTS</a>
        </Link>
        </div>

        <div className="container-fluid">
        <Link to={`/Content`}>
        <a className='navbar-brand nav-link' href='"#"'>ABILITIES</a>
        </Link>
        </div>

        <div className="container-fluid">
        <Link to={`/Contact`}>
        <a className='navbar-brand nav-link' href='"#"'>CONTACT</a>
        </Link>
        </div>

    </div>
    </>
    
  )
}

export default Projects