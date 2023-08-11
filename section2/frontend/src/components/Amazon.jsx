import React from 'react'
import Navbar from './Navbar';

const Amazon = () => {
  return (
     
    <nav>
       <div className='row bg-dark'>
           <button className='btn text-white'>
             <li className="nav-item">
               <a className="nav-link" href="#">
                  <img src="https://zeevector.com/wp-content/uploads/LOGO/Amazon-India-Logo-PNG-White.png" alt="" width={110} height={45} />
               </a>
             </li>
           
            <h6>Hello</h6>
            <h5>Select your Address</h5>
           </button>
          
       </div>
       <div className='row'>
       <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Link
          </a>
        </li>
        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdown"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Dropdown
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li>
              <a className="dropdown-item" href="#">
                Action
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Another action
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Something else here
              </a>
            </li>
          </ul>
        </li>
        <li className="nav-item">
          <a
            className="nav-link disabled"
            href="#"
            tabIndex={-1}
            aria-disabled="true"
          >
          </a>
        </li>
      </ul>
    </div>
  </div>
</nav>

       </div>


    </nav>
    

  )
}

export default Amazon;