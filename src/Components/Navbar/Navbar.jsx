import React from "react";
import "./navbar.css"

const Navbar = () =>{
    return(
 <>
 <div className="header-email-phone">
      <span>Call us +91 1234567890</span> &nbsp;
      <span> B2B Market Place</span> &nbsp;
      <span> Sign In</span> 
    </div>
<nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
  <a className="navbar-brand" href="#">Supplymint</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav ml-lg-auto">

      <li className="nav-item active">
        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
      </li>

      <li className="nav-item">
      <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Solutions</a>
      </li>

      <li className="nav-item">
        <a className="nav-link" href="#">Pricing</a>
      </li>

      <li className="nav-item">
        <a className="nav-link disabled" href="#">
        <button type="button" className="btn btn-dark nav-button">Get Demo</button>
        </a>
      </li>

    </ul>
  </div>
  </div>
</nav>
        </>
    )
}

export default Navbar;