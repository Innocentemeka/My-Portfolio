import React from 'react';
//REACT FONTAWESOME IMPORT
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import logo from '../Components/Image/logo.png';

const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-lg bg-black'>
      <div className='container-fluid'>
        <img src={logo} height='30' width='30' className='rounded-5'/>
        <button
         className='navbar-toggler shadow-none border-1 border-light'
         type='button'
         data-bs-toggle='collapse' 
         data-bs-target='#navbarNav'>
        <FontAwesomeIcon icon={faBars} style={{ color: '#fff' }} />
        </button>
        
        <div className='collapse navbar-collapse' id='navbarNav'>
          <ul className='navbar-nav justify-content-center flex-grow-1'>
            <li className='nav-item px-3'>
              <a className='nav-link active text-white' href='#home'>Home</a>
            </li>
            <li className='nav-item px-3'>
              <a className='nav-link text-white' href='#about'>About</a>
            </li>
            <li className='nav-item px-3'>
              <a className='nav-link text-white' href='#portfolio'>Portfolio</a>
            </li>
            <li className='nav-item px-3'>
              <a className='nav-link text-white' href='#service'>Services</a>
            </li>
            <li className='nav-item px-3'>
              <a className='nav-link text-white' href='#contant'>Contant Me</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar