import React from 'react'
import smartphone from "../assets/img/smartphone.png"
import tablets from "../assets/img/smartphone.png"
import smarttv from "../assets/img/smartphone.png"
import laptops from "../assets/img/smartphone.png"
import gaming from "../assets/img/smartphone.png"
import vrHeadsets from "../assets/img/vrHeadsets.png"
import sectionBackground from "../assets/img/sectionBackground.png"
import { Link } from 'react-router-dom'
import action from "../assets/img/action.png"
import adventure from "../assets/img/adventure.png"
import comedy from "../assets/img/comedy.png"
import drama from "../assets/img/drama.png"
import { GoArrowRight } from "react-icons/go";
import Faq from '../components/Faq'

const Home = () => {
  return (
    <>
      <section className='herosection'> </section>
      <section className="section-two">
        <div className="px-4 py-5 text-center">
          <h1 className="display-5 fw-bold text-light">The Best Streaming Experience</h1>
          <div className="col-lg-6 mx-auto">
            <p className=" mb-4 text-light">StreamVibe is the best streaming experience for watching your favorite movies and shows on demand, anytime, anywhere. With StreamVibe, you can enjoy a wide variety of content, including the latest blockbusters, classic movies, popular TV shows, and more. You can also create your own watchlists, so you can easily find the content you want to watch.</p>
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
              <Link to={"/movies"}><button type="button" className="btn btn-lg px-4 watching" fdprocessedid="n0s3g">Start Watching Now</button></Link>
            </div>
          </div>
        </div>

      </section>

      <section className='section-three py-5'>
        <div className='container-fluid px-5'>
          <h3 className='text-light'>Explore our wide variety of categories</h3>
          <span className='text-light'>Whether you're looking for a comedy to make you laugh, a drama to make you think, or a documentary to learn something new</span>

          <div className='row g-4 py-3'>
            <div className='col-12 col-sm-6 col-md-3'>
             <Link to={"/movies"} style={{textDecoration: "none"}}>
             <div className="card">
              <img src={action} class="card-img-top" alt="..."/>
                <div className="card-body d-flex justify-content-between align-items-center">
                  <h5 className="card-title">Action</h5>
                  <GoArrowRight style={{color: "white", width:"25px", height:"25px"}}/>


                </div>
              </div>
             </Link>
            </div>
            <div className='col-12 col-sm-6 col-md-3'>
              <Link to={"/movies"} style={{textDecoration: "none"}}>
              <div className="card">
              <img src={adventure} class="card-img-top" alt="..."/>
              <div className="card-body d-flex justify-content-between align-items-center">
                  <h5 className="card-title">Adventure</h5>
                  <GoArrowRight style={{color: "white", width:"25px", height:"25px"}}/>


                </div>
              </div>
              </Link>
            </div>
            <div className='col-12 col-sm-6 col-md-3'>
           <Link to={"/movies"} style={{textDecoration: "none"}}>
           <div className="card">
              <img src={comedy} class="card-img-top" alt="..."/>
              <div className="card-body d-flex justify-content-between align-items-center">
                  <h5 className="card-title">Comedy</h5>
                  <GoArrowRight style={{color: "white", width:"25px", height:"25px"}}/>


                </div>
              </div>
           </Link>
            </div>
            <div className='col-12 col-sm-6 col-md-3'>
              <Link to={"/movies"} style={{textDecoration: "none"}}>
              <div className="card">
              <img src={drama} class="card-img-top" alt="..."/>
              <div className="card-body d-flex justify-content-between align-items-center">
                  <h5 className="card-title">Drama</h5>
                  <GoArrowRight style={{color: "white", width:"25px", height:"25px"}}/>


                </div>
              </div>
              </Link>
            </div>
          </div>
        </div>
      </section>


      <section className='section-four py-5'>
        <div className='container-fluid px-5'>
          <h3 className='text-light'>We Provide you streaming experience across various devices.</h3>
          <span className='text-light'>With StreamVibe, you can enjoy your favorite movies and TV shows anytime, anywhere. Our platform is designed to be compatible with a wide range of devices, ensuring that you never miss a moment of entertainment.</span>

          <div className='row g-4 py-4'>
            <div className='col-12 col-sm-6 col-md-4'>
              <div className="card px-4 py-4">
                <div className='d-flex justify-content-center align-items-center'>
                  <div>
                    <img src={smartphone} className="card-img-top" alt="..." />
                  </div>
                  <div>
                    <h5 className="card-title text-light">Smartphones</h5>
                  </div>
                </div>
                <div className="card-body">
                  <p className="card-text text-light text-center">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

                </div>
              </div>
            </div>
            <div className='col-12 col-sm-6 col-md-4'>
              <div className="card px-4 py-4">
                <div className='d-flex justify-content-center align-items-center'>
                  <div>
                    <img src={tablets} className="card-img-top" alt="..." />
                  </div>
                  <div>
                    <h5 className="card-title text-light">Tablets</h5>
                  </div>
                </div>
                <div className="card-body">
                  <p className="card-text text-light text-center">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

                </div>
              </div>
            </div>
            <div className='col-12 col-sm-6 col-md-4'>
              <div className="card px-4 py-4">
                <div className='d-flex justify-content-center align-items-center'>
                  <div>
                    <img src={smarttv} className="card-img-top" alt="..." />
                  </div>
                  <div>
                    <h5 className="card-title text-light">Smart TV</h5>
                  </div>
                </div>
                <div className="card-body">
                  <p className="card-text text-light text-center">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

                </div>
              </div>
            </div>
            <div className='col-12 col-sm-6 col-md-4'>
              <div className="card px-4 py-4">
                <div className='d-flex justify-content-center align-items-center'>
                  <div>
                    <img src={laptops} className="card-img-top" alt="..." />
                  </div>
                  <div>
                    <h5 className="card-title text-light">Laptops</h5>
                  </div>
                </div>
                <div className="card-body">
                  <p className="card-text text-light text-center">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

                </div>
              </div>
            </div>
            <div className='col-12 col-sm-6 col-md-4'>
              <div className="card px-4 py-4">
                <div className='d-flex justify-content-center align-items-center'>
                  <div><img src={gaming} className="card-img-top" alt="..." /></div>
                  <div><h5 className="card-title text-light">Gaming Consoles</h5></div>
                </div>
                <div className="card-body">
                  <p className="card-text text-light text-center">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

                </div>
              </div>
            </div>
            <div className='col-12 col-sm-6 col-md-4'>
              <div className="card px-4 py-4">
                <div className='d-flex justify-content-center align-items-center'>
                  <div>
                    <img src={vrHeadsets} className="card-img-top" alt="..." />
                  </div>
                  <div>
                    <h5 className="card-title text-light">VR Headsets</h5>
                  </div>
                </div>
                <div className="card-body">
                  <p className="card-text text-light text-center">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='section-five'>
        <div className='container-fluid px-5'>
          <h3 className='text-light m-0'>Frequently asked questions</h3>
          <Faq/>
        </div>
      </section>


      <section className='section-six '>
        <div className='container-fluid px-5'>
          <h3 className='text-light m-0'>Choose the plan that's right for you </h3>
          <span className='text-light'>Join StreamVibe and select from our flexible subscription options tailored to suit your viewing preferences. Get ready for non-stop entertainment!</span>

          <div className='row mt-3'>
            <div className='col-12 col-sm-6 col-md-4 col-lg-4'>
              <div className="card p-3">
                <div className="card-body">
                  <h4 className="card-title text-light">Basic Plan</h4>
                  <p className="card-text text-light">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <h1 className='text-light'>$9.99</h1><p>/month</p>
                  <button className="btn trial">Start Free Trial</button>
                  <button className="btn plan mx-3">Choose Plan</button>
                </div>
              </div>
            </div>
            <div className='col-12 col-sm-6 col-md-4 col-lg-4'>
              <div className="card p-3">
                <div className="card-body">
                  <h4 className="card-title text-light">Standart Plan</h4>
                  <p className="card-text text-light">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <h1 className='text-light'>$12.99</h1><p>/month</p>
                  <button className="btn trial ">Start Free Trial</button>
                  <button className="btn plan mx-3">Choose Plan</button>
                </div>
              </div>
            </div>
            <div className='col-12 col-sm-6 col-md-4 col-lg-4'>
              <div className="card p-3">
                <div className="card-body">
                  <h4 className="card-title text-light">Premium Plan</h4>
                  <p className="card-text text-light">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <h1 className='text-light'>$14.99</h1><p>/month</p>
                  <button className="btn trial">Start Free Trial</button>
                  <button className="btn plan mx-3">Choose Plan</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='section-seven'>
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

export default Home