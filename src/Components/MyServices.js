import React from 'react';
import MyServiceIcon from '../Components/Image/icon.png';

const MyServices = () => {
  return (
    <section id='service'>
  <h2 className='m-5 text-center fw-bold' >MY <span className='fw-bolder' style={{color: '#0000FF'}}>SERVICES</span></h2>
  <div className='container'>
    <div className='row g-3'>
      <div className='col-12 col-md-6 col-lg-4'>
      <div className='card'>
        <div className='d-flex justify-content-center'>
        <img src={MyServiceIcon} className='card-img-top w-50'/>
        </div>
        <div className='card-body'>
          <h5 className='card-title text-center fw-bolder fs-4'>Website Design</h5>
          <p className='card-text fw-medium'>A personal portfolio website is a professional website that provides information about what you do, what services you
          may offer, and how to contact you or your company. Portfolio websites are an easy way to promote yourself, your brand,
          or your business.</p>
        </div>
      </div>
      </div>
      <div className='col-12 col-md-6 col-lg-4'>
        <div className='card'>
          <div className='d-flex justify-content-center'>
          <img src={MyServiceIcon} className='card-img-top w-50' />
          </div>
          <div className='card-body'>
            <h5 className='card-title text-center fw-bolder fs-4'>Website Design</h5>
            <p className='card-text fw-medium'>A personal portfolio website is a professional website that provides information about what
              you do, what services you
              may offer, and how to contact you or your company. Portfolio websites are an easy way to promote yourself, your
              brand,
              or your business.</p>
          </div>
        </div>
      </div>
      <div className='col-12 col-md-6 col-lg-4'>
        <div className='card'>
          <div className='d-flex justify-content-center'>
          <img src={MyServiceIcon} className='card-img-top w-50' />
          </div>
          <div className='card-body'>
            <h5 className='card-title text-center fw-bolder fs-4'>Website Design</h5>
            <p className='card-text fw-medium'>A personal portfolio website is a professional website that provides information about what
              you do, what services you
              may offer, and how to contact you or your company. Portfolio websites are an easy way to promote yourself, your
              brand,
              or your business.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}

export default MyServices