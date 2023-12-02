import React from 'react';
import Myportfolio1 from '../Components/Image/web-1.png';
import Myportfolio2 from '../Components/Image/web-2.png';
import Myportfolio3 from '../Components/Image/web-3.png';
import Myportfolio4 from '../Components/Image/web-4.png';
import Myportfolio5 from '../Components/Image/web-5.png';
import Myportfolio6 from '../Components/Image/web-6.png';

const MyPortfolio = () => {
  return (
    <section id='portfolio' style={{backgroundColor: 'black'}}>
      <div className='row d-flex flex-column'>
        <h2 className='fw-bolder text-white text-center my-5' data-aos='fade-down'>MY <span className='fw-bolder' style={{color: '#0000FF'}}>PORTFOLIO</span></h2>
        <div className='gallery' data-aos='zoom-in-up'>
          <img src={Myportfolio1}/>
          <img src={Myportfolio2}/>
          <img src={Myportfolio3}/>
          <img src={Myportfolio4}/>
          <img src={Myportfolio5}/>
          <img src={Myportfolio6}/>
        </div>
      </div>
  </section>

  )
}

export default MyPortfolio