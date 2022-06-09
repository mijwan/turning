import React from 'react'
import "./client.css"

const Client = () => {
  return (
    <>
    <div className='container main-client'>
        <div className='client'>
            <p>Our Clients</p>
        </div>
        <div className='row our-client'>
        <span className=""><img src='Images/Skechers1.png' alt=''/></span>
        <span className=""><img src='Images/vmart6.png' alt=''/></span>
        <span className=""><img src='Images/Columbia.png' alt=''/></span>
        <span className=""><img src='Images/brothers.png' alt=''/></span>
        <span className=""><img src='Images/HS.png' alt=''/></span>
        <span className=""><img src='Images/style-baazar.png' alt=''/></span>
        <span className=""><img src='Images/Gurram-Brothers.png' alt=''/></span>
        <span className=""><img src='Images/ethnicity.png' alt=''/></span>
        <span className="more"> & More</span>
        </div>
        </div>
    </>
  )
}

export default Client