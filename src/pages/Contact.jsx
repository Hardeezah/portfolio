import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css'

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_tsbq8hm', 'template_15nw5e2', form.current, 'Up3Tipkvge8lP53TR')
      .then((result) => {
          alert("Message Sent")
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };
  return (
    <div className='text-center '>
      <h2 className='text-2xl font-bold mt-10'>Contact Me</h2>
      
       <form ref={form} onSubmit={sendEmail}  className="form flex flex-col w-9/12 m-auto p-5 gap-10 justify-center ">
      
      <input type="text" name="user_name" placeholder='Enter your name' className='pt-3 pb-3 bg-transparent '  />
      
      <input type="email" name="user_email" placeholder='Enter your email' className='pt-3 pb-3 bg-transparent '/>
      
      <textarea name="message" rows="5" placeholder='Enter your message' className='pt-3 pb-3 bg-transparent'/>
      <input type="submit" value="Send"  className='submit' />
    </form>
    </div>
  )
}
