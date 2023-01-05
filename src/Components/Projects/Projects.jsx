import React from 'react'
import { Link } from 'react-router-dom'
import './Projects.css'
import 'animate.css';

const Projects = () => {
  return (
    <>
    <div className='nav animate__animated animate__zoomIn'>
        <div className="container-fluid">
        <Link to={`/`} className='navbar-brand nav-link' href='"#"'>HOME
        </Link>
        </div>

        {/* solo con link alcanza, ya que sino lo toma como <a> con hijo <a> y eso no se puede */}

        <div className="container-fluid">
        <Link to={`/Project`} className='navbar-brand nav-link' href='"#"'>PROJECTS
        </Link>
        </div>

        <div className="container-fluid">
        <Link to={`/Content`} className='navbar-brand nav-link' href='"#"'>ABILITIES
        </Link>
        </div>

        <div className="container-fluid">
        <Link to={`/Contact`} className='navbar-brand nav-link' href='"#"'>CONTACT
        </Link>
        </div>

    </div>
    </>
    
  )
}

export default Projects