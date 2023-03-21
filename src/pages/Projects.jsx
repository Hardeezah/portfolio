import React from 'react'
import './project.css'
import {projectData} from '../data/projectData'
import github from '../images/icons8-github2.svg'
import link from '../images/icons8-external-link.svg'
export default function Projects() {
  return (
    <div className='m-10'>
      <h2 className='text-center font-bold text-2xl m-5'>Projects</h2>
      <div className="projects grid lg:grid-cols-3 md:grid-cols-2 sm:grid-col-1 gap-10">
          {projectData.map((project) =>(
            <div className="project flex flex-col text-center" key={project.id}>
              <div className="top">
                <a href={project.link}><img src={project.image} alt="" /></a>
              <div className="bottom">
                <h3 className='font-bold text-3xl m-3 mb-0 sm:text-2xl'>{project.title}</h3>
                <div className="flex justify-between">
                  <div className="categories ml-3 flex gap-3">
                <span>{project.tagOne}</span>
                <span> {project.tagTwo} </span>
                <span> {project.tagThree} </span>
                  </div>
                  <div className="content flex justify-center">
                    <a href={project.sourceCode}><img className='mr-5 github' src={github} alt="" /></a>
                  </div>
              </div>
              </div>
              </div>
             
            </div>
          ))}
       </div>
    </div>
  )
}
