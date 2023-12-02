import React from 'react';
import aboutMe from '../Components/Image/inn.png';

const AboutMe = () => {
  return (
    <section id='about' className='p-5'>
    <div className='container' data-aos='zoom-in-down'>
      <div className='row'>
          <h2 className='fw-bold fs-1 text-center my-5'><span className='fw-bolder' style={{color: '#0000FF'}} >ABOUT</span> ME</h2>
        <div className='d-xl-flex justify-content-center'>
          <div className='w-auto' data-aos='zoom-in-up'>
          <img className='w-100' src={aboutMe}/>
          </div>
          <div className='p-3' data-aos='zoom-in-down'>
            <h3 className='fw-bolder'><span className='fw-bold' style={{color: '#0000FF'}}>INN0CENT</span> EMEKA</h3>
            <p>A personal portfolio website is a professional website that provides information about what you do, what services you
            may offer, and how to contact you or your company. Portfolio websites are an easy way to promote yourself, your brand,
            or your business.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default AboutMe