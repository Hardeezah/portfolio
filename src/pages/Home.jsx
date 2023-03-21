import React from 'react'
import image from '../images/undraw_woman_ffrd (1).svg'
import './home.css'
import twitter from '../images/icons8-twitter.svg'
import github from '../images/icons8-github.svg'
import instagram from '../images/icons8-instagram.svg'
import facebook from '../images/icons8-facebook.svg'

export default function Home() {
  return (
    <div className='grid lg:md:grid-cols-2'>
      <img src={image} alt="" className='w-96 h-96 m-auto 
            lg:h-fit lg:mr-3'/>
      <div className="lg:text-left text-center pt-7 text m-auto lg:ml-7">
        <h2 className='big-text'>Hi!, My name is Hadiza Mohammed</h2>
        <p className='small-text'>Welcome to my portfolio</p>
        <div className="icons w-48 m-auto lg:m-0 ">
          <ul className='flex justify-between mt-2'>
            <a href="https://twitter.com/Hadiza84630741" className='p-1 alink'>
              <img src={twitter} alt="" />
              </a>
            <a href='https://www.instagram.com/hardeezae/' className='p-1 alink'>
              <img src={instagram} alt="" />
            </a><a href='https://www.facebook.com/hadiza.mohammed.58118774' className='p-1 alink'>
              <img src={facebook} alt="" />
            </a><a href='https://github.com/Hardeezah' className='p-1 alink'>
              <img src={github} alt="" />
            </a>
          </ul>
          <button className="cta mt-5 lg:mt-3"> <a className='cta-a ' href="/">Hire Me</a></button>
          
        </div>
      </div>
    </div>
  )
}
