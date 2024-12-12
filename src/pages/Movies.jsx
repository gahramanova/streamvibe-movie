import React from 'react'
import moviesBackground from "../assets/img/moviesBackground.png"
import { IoIosVolumeHigh } from "react-icons/io";
import { BiLike, BiPopsicle } from "react-icons/bi";
import PopularMovies from '../components/PopularMovies';
import TopMovies from '../components/TopMovies';
import TVShows from '../components/TVShows';
import sectionBackground from "../assets/img/sectionBackground.png"


const Movies = () => {
  return (
    <>
      <section className='movies-section-one'>
      </section>
      <section className='movies-section-two'>
        <div className='container-fluid px-5'>
          <div id="carouselExampleIndicators" className="carousel slide">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={1} aria-label="Slide 2" />
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={2} aria-label="Slide 3" />
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className='carousel-main'>
                  <img src={moviesBackground} className="d-block w-100"/>
                  <div className='content'>
                    <h1 className='text-light'>Avengers:End Game</h1>
                    <span>With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos's actions and undo the chaos to the universe, no matter what consequences may be in store, and no matter who they face... Avenge the fallen.</span>
                    <div className='py-3'>
                      <button className='btn play-now'>Play now</button>
                      <button className='btn volume mx-3'><IoIosVolumeHigh style={{color:"white", width:"25px", height:"25px"}}/></button>
                      <button className='btn like'><BiLike style={{color:"white", width:"25px", height:"25px"}}/></button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <img src="..." className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src="..." className="d-block w-100" alt="..." />
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="visually-hidden">Next</span>
            </button>
          </div>

        </div>
      </section>

      <section className='movies-section-three'>
        <div className='container-fluid px-5 py-3'>
          <h3 className='text-light'>Popular Movies in Recent Times</h3>
          <PopularMovies/>
        </div>
      </section>

      <section className='movies-section-four'>
        <div className='container-fluid px-5 py-3'>
          <h3 className='text-light'>Top Rated Movies</h3>
          <TopMovies/>
        </div>
      </section>
      <section className='movies-section-five'>
        <div className='container-fluid px-5 py-3'>
          <h3 className='text-light'>Top Rated TV-Shows</h3>
          <TVShows/>
        </div>
      </section>
      <section className='movies-section-six'>
        <div className='container-fluid px-5 '>
          <div className='section-backgorund-part py-5'>
            <img src={sectionBackground} style={{ width: "100%", height: "auto" }} />
            <div className='container-fluid px-5 text'>
              <div className='d-flex justify-content-between align-items-center'>
                <div>
                  <h2 className='text-light'>Start your free trial today</h2>
                  <span>This is a clear and concise call to action that encourages users to sign up for a free trial of StreamVibe.</span>
                </div>
                <div>
                  <button className='btn free-trial'>Start Free Trial</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Movies