import React from 'react'
import logo from "../assets/img/streamVibeLogo.png"
import { Link, NavLink } from 'react-router-dom'
import { IoIosSearch } from "react-icons/io";
import { IoIosNotificationsOutline } from "react-icons/io";


const Header = () => {

  const scrollTop = () =>{
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}
  return (
    <>

        <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between px-5">
          <div className="col-12 col-sm-6 col-md-3 mb-2 mb-md-0">
            <a href="/" className="d-inline-flex link-body-emphasis text-decoration-none">
             <img src={logo}/>
            </a>
          </div>
          <ul className="nav col-12 col-sm-6 col-md-3 mb-2 justify-content-center mb-md-0 design">

            <NavLink to="/" className="nav-link px-2 text-light">
            {({isActive})=> (
            <li onClick={scrollTop} className={`${isActive ? 'active' : ''}`}>Home</li>

            )}
            </NavLink>
            <NavLink to="/movies" className="nav-link px-2 text-light">
            {({isActive}) => (
              <li onClick={scrollTop} className={`${isActive ? 'active' : ''}`}>Movies</li>
            )}
            </NavLink>

            <NavLink to="/support" className="nav-link px-2 text-light">
            {({isActive}) => (
              <li onClick={scrollTop} className={`${isActive ? 'active' : ''}`}>Support</li>
            )}
            </NavLink>
            
            <NavLink to="/subscriptions" className="nav-link px-2 text-light">
            {({isActive}) => (
              <li onClick={scrollTop} className={`${isActive ? 'active' : ''}`}>Subscription</li>
            )}
            
            </NavLink>

          </ul>
          <div className="col-12 col-sm-6 col-md-3 text-end">
            <button type="button" className="btn me-2"><IoIosSearch style={{width: "30px", height:"30px"}}/></button>
            <button type="button" className="btn "><IoIosNotificationsOutline style={{width: "30px", height:"30px"}}/></button>
          </div>
        </header>

    </>
  )
}

export default Header