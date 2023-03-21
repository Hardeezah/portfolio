import React from 'react'
import aboutImg from '../images/undraw_about_me_re_82bv.svg'
import './about.css'
export default function About() {
  return (
    <div className='m-10 '>
      <h2 className='text-center text-2xl font-bold'>About Me</h2>
      <div className="grid lg:grid-cols-2 mt-5 lg:md:p-10 gap-12">
        <img src={aboutImg} alt="" className=''/>
        <div className="text-content p-2 text-xl lg:md:pl-10 lg:md0pr-10">
          <p>My Name is Hadiza Mohammed. I am a confident, 
            energetic, and skilled web developer with a variety of 
            abilities, traits, and skills that ensure I will do well
             in any capacity
          </p>
          <h3 className='skills text-3xl mt-10 mb-5'>Skills</h3>
          <div className="skills-bar text-center ">
            <div className="flex justify-between text-center">
              <div className="skill">
                <div className="inner firebase"></div>
            </div>
            <p className='inner-text'>Firebase</p>
            </div>
            <div className="flex justify-between mt-7">
            <div className="skill">
              <div className="inner react"></div>
            </div>
            <p className='inner-text'>React</p>
            </div>
            <div className="flex justify-between mt-7">
              <div className="skill">
                <div className="inner css"></div>
            </div>
            <p className='inner-text'>CSS</p>
            </div>
            <div className="flex  justify-between mt-7">
              <div className="skill"><div className="inner api"></div>
            </div>
            <p className='inner-text'>APIs</p>
            </div>
          </div>
          <button className='b-cv '><a href="https://drive.google.com/file/d/1ngTbhjKroW4f1AqC0l1OebV1_jFwtKBw/view" className='text-xl'>View my CV</a></button>
          

        </div>
      </div>
    </div>
  )
}
