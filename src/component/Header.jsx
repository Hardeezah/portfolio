import React, { useState } from 'react'
import './header.css'
import menu from '../images/icons8-menu (1).svg'
import { NavLink } from 'react-router-dom'
export default function Header() {
    const activeLink = 'bg-blue rounded-full'
    const inactiveLink = ''

    const [isMobile, setIsMobile] = useState(false);

    function handleClick(){
      setIsMobile(true);
    }
  return (
    <div className='m-5'>
      <nav className='flex flex-col text-center justify-between lg:ml-10 md:ml-6 sm:ml-3'>
        <h1 className='text-5xl font-bold '>Dee</h1>
        <img src={menu} className='h-8 mt-4 menu' alt="" onClick={handleClick} />

        <div  onClick={() => setIsMobile(false)} >
        <ul className={isMobile ? "mobile" : "nav-link"}>
            <NavLink to='/' exact activeClassName={activeLink} className={inactiveLink}><li >
                <a href="/" className={({isActive}) => isActive?activeLink:inactiveLink} >Home</a>
            </li> </NavLink>
            <NavLink to='/projects' exact activeClassName={activeLink} className={inactiveLink}><li >
                <a href="/" className={({isActive}) => isActive?activeLink:inactiveLink} >Projects</a>
            </li> </NavLink>
            <NavLink to='/about' exact activeClassName={activeLink} className={inactiveLink}><li >
                <a href="/" className={({isActive}) => isActive?activeLink:inactiveLink} >About</a>
            </li> </NavLink>
            <NavLink to='/contact' exact activeClassName={activeLink} className={inactiveLink}><li >
                <a href="/" className={({isActive}) => isActive?activeLink:inactiveLink} >Contact</a>
            </li> </NavLink>
        </ul>
        </div>
      </nav>
    </div>
  )
}
