import React from 'react'
import logo from "../assets/img/streamVibeLogo.png"
import { Link } from 'react-router-dom'


const Footer = () => {
  return (
    <>
      <footer>
        <div className='container-fluid px-5 py-5'>
          <div className='row'>
            <div className="col-12 col-sm-6 col-md-3 col-lg-3">
              <a href="/" className="d-flex align-items-center link-body-emphasis text-decoration-none">
                <img src={logo} />
              </a>
            </div>
            <div className="col-12 col-sm-6 col-md-3 col-lg-3">
              <h5 className='text-light'>Section</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2"><Link to={"/"} className="nav-link p-0 text-light">Home</Link></li>
                <li className="nav-item mb-2"><Link to={"/movies"} className="nav-link p-0 text-light">Moives & Shows</Link></li>
                <li className="nav-item mb-2"><Link to={"/subscriptions"} className="nav-link p-0 text-light">Subscriptions</Link></li>
                <li className="nav-item mb-2"><Link to={"/support"} className="nav-link p-0 text-light">Support</Link></li>
              </ul>
            </div>
            <div className="col-12 col-sm-6 col-md-3 col-lg-3">
              <h5 className='text-light'>Section</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2"><Link to={"/movies"} className="nav-link p-0 text-light">Gernes</Link></li>
                <li className="nav-item mb-2"><Link to={"/movies"} className="nav-link p-0 text-light">Trending</Link></li>
                <li className="nav-item mb-2"><Link to={"/movies"} className="nav-link p-0 text-light">New Release</Link></li>
                <li className="nav-item mb-2"><Link to={"/movies"} className="nav-link p-0 text-light">Popular</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>

    </>
  )
}

export default Footer