import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Projects from '../Projects/Projects'
import git from '../../github.png'
import link from '../../link.png'
import './Contact.css'


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_djkmk7i', 'template_x123i4d', form.current, '3CcngCSxg71f-0jHI')
      .then((result) => {
          console.log(result.text);
          form.current.reset();
      }, 
      (error) => {
          console.log(error.text);
      });
  };

  // const handleClick= () =>{
  //   return(
  //     <h2>Thanks for your message! I will response you soon</h2>
  //   )
  // }

  return (
    <>
      <Projects/>
    <h3 className='contact'>CONTACT ME</h3>
    <div className='redes'>
      <a href='https://github.com/estefad' target='blank'><img className='red' src={git} alt='github'></img></a>
      <a href='https://www.linkedin.com/in/estefania-dominguez-b344ab99/' target='blank'><img className='red' src={link} alt='linkedn'></img></a>
    </div>
    <form ref={form} onSubmit={sendEmail} className='form'>
      <label>Name</label>
      <input type="text" name="user_name" className='form_text' required/>
      <label>Email</label>
      <input type="email" name="user_email" className='form_text' required/>
      <label>Your Message</label>
      <textarea name="message" className='form_area' required/>
      <input type="submit" value="Send" className='envia'/>
    </form>
    </>
    
  );
}
export default Contact

