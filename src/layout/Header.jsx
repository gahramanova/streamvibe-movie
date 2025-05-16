import React, { useEffect, useState } from 'react'
import logo from "../assets/img/streamVibeLogo.png"
import { Link, NavLink } from 'react-router-dom'
import { IoIosSearch } from "react-icons/io";
import { IoIosNotificationsOutline } from "react-icons/io";
import { TiThMenu } from "react-icons/ti";
import axios from 'axios';
import config from '../../config';
import slugify from 'slugify';


const Header = () => {

  const [search, setSearch] = useState([]);
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);



  useEffect(() => {
    const fetchSearchResults = async () => {
      if (!query.trim()) {
        setSearchResults([]);
        return;
      }

      try {
        const response = await axios.get(`${config.BASE_URL}/search/multi`, {
          params: {
            api_key: config.API_KEY,
            query: query,
          },
        });
        setSearchResults(response.data.results);
      } catch (error) {
        console.error("Error fetching search results:", error);
      }
    };

    const delayDebounce = setTimeout(() => {
      fetchSearchResults();
    }, 500); // yazıdan 500ms sonra axtarış başlasın (debounce)

    return () => clearTimeout(delayDebounce);
  }, [query]);



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
            <button type="button" className="btn" data-bs-toggle="modal" data-bs-target="#searchModal">
              <IoIosSearch style={{ width: "30px", height: "30px", color: "white" }} />
            </button>
            {/* Modal */}
            <div
              className="modal"
              id="searchModal"
              tabIndex={-1}
              aria-labelledby="searchModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title text-dark" id="searchModalLabel">Search results</h5>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    />
                  </div>
                  <div className="modal-body">
                    <div className="input-group mb-3">
                      <input
                        onChange={(e) => setQuery(e.target.value)}
                        type="text"
                        className="form-control"
                        placeholder="Enter movie name"
                      />
                      <IoIosSearch />
                    </div>
                    <ul className="list-group">
                      {searchResults.length === 0 && query
                        ? <li className="list-group-item">No results found.</li>
                        : searchResults.map((item, index) => (
                          <Link

                            onClick={() => {
                              const modalElement = document.getElementById('searchModal');
                              const modalInstance = window.bootstrap?.Modal.getInstance(modalElement);
                              modalInstance?.hide();
                              setQuery("");
                              setSearchResults([])

                              const inputElement = modalElement?.querySelector('input');
                              if (inputElement) inputElement.value = ''; //inputu bosaltmaq
                            }}
                            to={`/movies/${slugify(item.title || item.name)}/${item.id}`}
                            key={index}
                          >
                            <li className="list-group-item d-flex align-items-center">
                              <img
                                src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                                alt={item.title || item.name}
                                className="me-3"
                                style={{ width: "60px", height: "60px", objectFit: "cover" }}
                              />
                              <span>{item.title || item.name}</span>
                            </li>
                          </Link>
                        ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>




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