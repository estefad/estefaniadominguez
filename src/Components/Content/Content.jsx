import React, {useState, useEffect} from 'react'
import db from '../../Services/Index'
import { useParams } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';
import './Content.css'
import Projects from '../Projects/Projects';
import { BeatLoader } from 'react-spinners';


const Content = () => {

    const [items, setItems]= useState([]);

    const {id} = useParams();
  
    useEffect(() => {
      const getData = async()=>{
        const data= collection(db, 'imagenes')
        const col=await getDocs(data)
        const res= col.docs.map((doc)=> doc.data())
        // const res= col.docs.map((doc)=> doc={id:doc.id, ...doc.data()})
        // const resFinal = category ? res.filter(e=> e.category === category) : res
        setItems(res)
      }
      getData()
    
      return () => {
        
      }
    }, [id])




  return (
    <>
    <Projects/>
    <main className='contain'>
    <div className='text'>
            Hi!, i'm Frontend Developer, my job is to make your page sustainable, 
            interactive and user friendly. I have been in the world of development 
            for a couple of years, and always in continuous growth. On my landing you 
            can see my work as a developer.
    </div>
        {!!items.length ?  items.map((item, id) => <div className='content' key={id}><img className='img' src={item.src} alt={item.alt}/></div>) : 
        <spinner className='spin'><BeatLoader color="#000000"/></spinner>}
    </main>
        
    </>
  )
}

export default Content