import React from 'react'

const ContantMe = () => {
  return (
    <section id="contant" className="contant">
  <h2 className="text-center m-5 fw-bold"><span className="fw-bolder" style={{color: '#0000FF'}}>CONTANT</span> ME</h2>

  <div className='container'>
    <div className='contant-form row'>
      <div className='form-field col-lg-6'>
        <input className='input-text' type='text' id='name' />
        <label for='name' className='label'>name</label>
      </div>
      <div className='form-field col-lg-6'>
        <input className='input-text' type='text' id='message' />
        <label for='message' className='label'>message</label>
      </div>
      <div className='form-field col-lg-6'>
        <input className='input-text' type='email' id='email' />
        <label for='email' className='label'>email</label>
      </div>
      <div className='form-field col-lg-12'>
        <input className='submit-btn' type='submit' value='submit' />
      </div>
    </div>
  </div>
</section>
  )
}

export default ContantMe