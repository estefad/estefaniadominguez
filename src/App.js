import foto from './foto.jpg';
import './App.css';
import Content from './Components/Content/Content'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Project from './Components/Project/Project';
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contact/Contact'
import ig from './fac.png'




function App() {
  return (
    <>
    <BrowserRouter>
    <div className="App">
      <header className="App-header">
        <div className='head'>
          <h1 className='nombre'>Estefania Dominguez</h1>
        </div>  
        <img src={foto} className="foto" alt="logo" />
      </header>
      {/* <Projects/> */}
    <Routes>
      <Route path='/' element={<Projects/>}/>
      <Route path='/Project' element={<Project/>}/>
      <Route path='/Content' element={<Content/>}/>
      <Route path='/Contact' element={<Contact/>}/>
    </Routes>
    </div>
    </BrowserRouter>
    <div>
      {/* <img src={ig} alt='ig'></img> */}
      <a href='https://www.instagram.com' target='blank'><img src={ig} alt='ig'></img></a>
    </div>
    </>
  );
}

export default App;
