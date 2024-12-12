import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
import axios from "axios"
import config from "../../config.js";

const TopMovies = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await axios.get(`${config.BASE_URL}/movie/top_rated`, {
                    params: { api_key: config.API_KEY },
                });
                setMovies(response.data.results);
                // console.log(response.data.results)

            } catch (error) {
                console.error("Error fetching movies:", error);
            }
        };
        fetchMovies();
    }, []);

    var settings = {
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 500,
        arrows: true,
        accessibility: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    autoplay: true,
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    autoplay: true,
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    autoplay: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                }
            }
        ]
    };

    return (
        <>
            <div className='container'>
                <div className="carousel-main popular-movies-carousel">
                    <div className="slider-container">
                        <Slider {...settings}>
                            {movies.map((item, index) => (
                                <>
                                    <div className="card">
                                        <img style={{ width: "100%", height: "300px", objectFit: "contain" }} src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} alt={item.title} />
                                        <div className="card-body">
                                            <h5 className="card-title text-light">{item.title.slice(0, 20)}...</h5>
                                            <p className="card-text text-secondary">{item.overview.slice(0, 50)}...</p>
                                            <button className="btn about-movies">About Movie</button>
                                        </div>
                                    </div>
                                </>



                            ))}

                        </Slider>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TopMovies