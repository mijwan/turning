import React from 'react'
import"./about.css"

const About = () => {
  return (
    <>
<section id="about" className="section-small about-main-background">
	
  <div className="container-fluid about-background" id='about-page' data-aos="fade-up">
    <div className="row">
      <div className="col-lg-6 about-header">
         <div className='about-content'>
             <h3 className='manage'>Procurement Management <span className='dot'>.</span></h3>
             <h1 className='make'>Make Procurement Quick, Transpatent, and Hassle-free</h1>
          <p className='order'>collaborate and close purchase orders in jiffy</p>
          <button type="button" class="btn btn-primary">Request a Demo</button>
         </div>
      </div>
      <div className="col-lg-5 about-image">
            <img src='Images/Procurement_management.png' alt='about Image' />
    </div>
      </div>
      </div>

</section>
    </>
  )
}

export default About