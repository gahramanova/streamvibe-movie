import React, { useEffect } from 'react'
import logo from "../assets/img/streamVibeLogo.png"
import { Link, NavLink } from 'react-router-dom'
import { IoIosSearch } from "react-icons/io";
import { IoIosNotificationsOutline } from "react-icons/io";
import { TiThMenu } from "react-icons/ti";


const Header = () => {

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  useEffect(() => {
    document.querySelectorAll('.page').forEach(item => {
      item.addEventListener('click', () => {
        let offcanvas = document.querySelector('.offcanvas');
        let offcanvasInstance = bootstrap.Offcanvas.getInstance(offcanvas);
        if (offcanvasInstance) {
          offcanvasInstance.hide();
        }
      });
    });
  }, []);
  return (
    <>

      <div className='header-one'>
        <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between px-5 header">
          <div className="col-12 col-sm-6 col-md-3 mb-2 mb-md-0">
            <Link onClick={scrollTop} to={"/"} className="d-inline-flex link-body-emphasis text-decoration-none">
              <img src={logo} />
            </Link>
          </div>
          <ul className="nav col-12 col-sm-6 col-md-3 mb-2 justify-content-center mb-md-0 design">

            <NavLink to="/" className="nav-link px-2 text-light">
              {({ isActive }) => (
                <li onClick={scrollTop} className={`${isActive ? 'active' : ''}`}>Home</li>

              )}
            </NavLink>
            <NavLink to="/movies" className="nav-link px-2 text-light">
              {({ isActive }) => (
                <li onClick={scrollTop} className={`${isActive ? 'active' : ''}`}>Movies</li>
              )}
            </NavLink>

            <NavLink to="/support" className="nav-link px-2 text-light">
              {({ isActive }) => (
                <li onClick={scrollTop} className={`${isActive ? 'active' : ''}`}>Support</li>
              )}
            </NavLink>

            <NavLink to="/subscriptions" className="nav-link px-2 text-light">
              {({ isActive }) => (
                <li onClick={scrollTop} className={`${isActive ? 'active' : ''}`}>Subscription</li>
              )}

            </NavLink>

          </ul>
          <div className="col-12 col-sm-6 col-md-3 text-end">
            <button type="button" className="btn me-2"><IoIosSearch style={{ width: "30px", height: "30px", color: "white" }} /></button>
            <button type="button" className="btn "><IoIosNotificationsOutline style={{ width: "30px", height: "30px", color: "white" }} /></button>
          </div>
        </header>
      </div>

      <header className='header-two'>
        <div className='container-fluid'>
          <nav className="navbar">
           <div>
           <Link to={"/"} className="d-inline-flex link-body-emphasis text-decoration-none">
              <img src={logo} />
            </Link>
           </div>

         <div>
         <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="ffcanvasWithBothOptions" aria-expanded="false" aria-label="Toggle navigation">
              <TiThMenu style={{ width: "30px", height: "30px", color: "white" }} />
            </button>
            <div>
              <div className="offcanvas offcanvas-start" data-bs-scroll="true" tabIndex={-1} id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
                <div className="offcanvas-header bg-black">
                  <h5 className="offcanvas-title px-2" id="offcanvasWithBothOptionsLabel" style={{ color: "#880d0d" }}>Menu</h5>
                  <button type="button" className="btn-close bg-light" data-bs-dismiss="offcanvas" aria-label="Close" />
                </div>
                <div className="offcanvas-body bg-black">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <NavLink to="/" className="nav-link px-2 text-light page"><li>Home</li></NavLink>
                    <NavLink to="/movies" className="nav-link px-2 text-light page"><li>Movies</li></NavLink>
                    <NavLink to="/support" className="nav-link px-2 text-light page"><li>Support</li></NavLink>
                    <NavLink to="/subscriptions" className="nav-link px-2 text-light page"><li>Subscription</li></NavLink>
                  </ul>
                </div>
              </div>
            </div>
         </div>
          </nav>
        </div>

      </header>

    </>
  )
}

export default Header