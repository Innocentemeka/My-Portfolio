import React from 'react';
  //REACT FONTAWESOME IMPORT
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
   <section className='home' id='home'>
    <div className='container text-center'>
      <div className='row'>
        <div className='col-lg-7'>
          <h1 className=' text-white'>I AM <span className='fw-bolder' style={{ color: '#0000FF' }}> INNOCENT </span> EMEKA</h1>
          <p className=' text-white fs-4 fw-lighter'>I'am a Web Developer from Nigeria</p>
          <div className='social mt-2 mb-4'>
            <a href='#' style={{ marginRight: '10px', fontSize: '22px' }} >
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href='#' style={{ marginRight: '10px', fontSize: '22px' }}>
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href='#' style={{ fontSize: '22px' }}>
              <FontAwesomeIcon icon={faFacebook} />
            </a>
          </div>
          <button className='btn downloadbtn'>Download CV <FontAwesomeIcon icon={faDownload} />
          </button>
          <button className='btn hirebtn'>Hire Me Now</button>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Header


