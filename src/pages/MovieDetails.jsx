import React, { useEffect, useState } from 'react';
import { IoIosVolumeHigh } from "react-icons/io";
import { BiLike } from "react-icons/bi";
import { useParams } from 'react-router-dom';
import axios from 'axios';
import config from "../../config.js";
import sectionBackground from "../assets/img/sectionBackground.png"
import { CiCalendar } from "react-icons/ci";
import { CiGlobe } from "react-icons/ci";
import { IoLanguageSharp } from "react-icons/io5";
import { MdStar } from "react-icons/md";
import { FaRegStar } from "react-icons/fa";
import PopularMovies from '../components/PopularMovies.jsx';


const MovieDetails = () => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState(null); 
  const [cast, setCast] = useState([]);

  // Fetch movie details


  useEffect(() => {
    const fetchMovieDetails = async () => {
// Fetch api for popular movies
      try {
        const response = await axios.get(`${config.BASE_URL}/movie/${id}`, {
          params: { api_key: config.API_KEY },
        });
        
        setMovieDetails(response.data);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }

// Fetch api for top rated movies
      try {
        const response = await axios.get(`${config.BASE_URL}/movie/top_rated${id}`, {
          params: { api_key: config.API_KEY },
        });
        setMovieDetails(response.data);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }

// Fetch api for top rated tv shows
      try {
        const response = await axios.get(`${config.BASE_URL}/tv/top_rated${id}`, {
          params: { api_key: config.API_KEY },
        });
        setMovieDetails(response.data);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };

    fetchMovieDetails();
  }, [id]);



  // Fetch cast details
  useEffect(() => {
    const fetchCast = async () => {
      try {
        const response = await axios.get(`${config.BASE_URL}/movie/${id}/credits`, {
          params: { api_key: config.API_KEY },
        });
        setCast(response.data.cast); // Save cast data
        console.log(response.data.cast)
      } catch (error) {
        console.error("Error fetching cast:", error);
      }
    };
    fetchCast();
  }, [id]);

  // Display loading state if data is not yet available
  if (!movieDetails) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {/* Section 1: Movie Header */}
      <section className='moviedetails-section-one'>
      </section>

      {/* Section 2: Movie Details */}
      <section className='moviedetails-section-two'>
        <div className='container-fluid px-5'>
          <div className='background-photo'>
            <img
              src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
              alt={movieDetails.title}
              style={{ width: "100%", height: "700px", objectFit: "contain" }}
            />
          </div>
        </div>
      </section>

      {/* Section 3: Description and Cast */}
      <section className='moviedetails-section-three'>
        <div className='container-fluid px-5'>
          <div className='row g-4'>
            <div className='col-12 col-sm-8 col-md-8 col-lg-8 py-4'>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title text-light">Description</h5>
                  <p className="card-text text-secondary">{movieDetails.overview}</p>
                </div>
              </div>

              <div className='row g-4'>
                <div className='col-12 col-sm-12 col-md-12 col-lg-12 py-4'>
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title text-light">Cast</h5>
                      <div className='d-flex justify-content-between'>
                        {cast.slice(0, 10).map((actor) => (
                          <div key={actor.id}>
                            <img className='cast-photos' src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`} />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Movie Info */}
            <div className='col-12 col-sm-4 col-md-4 col-lg-4 py-4'>
              <div className="card p-4">
                <div className='d-flex'>
                  <CiGlobe className='mx-1' style={{ width: "25px", height: "25px", color: "#6c757d" }} />
                  <h5 className='text-secondary'>Releasing Country</h5>
                </div>
                <span className='text-light pb-4 px-2'>{movieDetails.production_countries?.map(c => c.name).join(', ')}</span>

                <div className='d-flex'>
                  <CiCalendar className='mx-1' style={{ width: "23px", height: "23px", color: "#6c757d" }} />
                  <h5 className='text-secondary'>Released Year</h5>
                </div>
                <span className='text-light pb-4 px-2'>{movieDetails.release_date}</span>

                <div className='d-flex'>
                  <IoLanguageSharp className='mx-1' style={{ width: "23px", height: "23px", color: "#6c757d" }} />
                  <h5 className='text-secondary px-2'>Available Languages</h5>
                </div>
                <div className='d-flex '>
                  {movieDetails.spoken_languages.map((language, index) => (
                    <p className='languages' key={index}>{language.english_name}</p>
                  ))}
                </div>


                <div className='d-flex'>
                  <FaRegStar className='mx-1' style={{ width: "20px", height: "20px", color: "#6c757d" }}/>
                  <h5 className='text-secondary'>Ratings</h5>
                </div>
                <div className='pb-4'>
                  {[...Array(Math.round(movieDetails.vote_average))].map((_, index) => (
                    <MdStar key={index} style={{ color: "yellow" }} />
                  ))}
                </div>

                <h5 className='text-secondary'>IMDb</h5>
                <p className='text-light'>{movieDetails.vote_average} / 10</p>

                <h5 className='text-secondary'>Gernes</h5>
                <div className='d-flex'>
                  {movieDetails.genres.map((genre) => (
                    <p className='gernes' key={genre.id}>{genre.name}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Free Trial */}
      <section className='moviedetails-section-four'>
        <div className='container-fluid px-5 '>
          <div className='section-backgorund-part py-5'>
            <img src={sectionBackground} style={{ width: "100%", height: "auto" }} />
            <div className='container-fluid px-5 text'>
              <div className='d-flex justify-content-between'>
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

      <section className='moviedetails-section-five'>
        <div className='container-fluid px-5'>
          <h3 className='text-light'>Related movies</h3>
          <PopularMovies/>
        </div>
      </section>
    </>
  );
};

export default MovieDetails;
