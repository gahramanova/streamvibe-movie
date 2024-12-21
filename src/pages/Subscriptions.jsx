import React from 'react'
import Table from "../components/Table"
import sectionBackground from "../assets/img/sectionBackground.png"

const Subscriptions = () => {
  return (
    <>
      <section className='subsc-section-one'>

      </section>

      <section className='subsc-section-two py-4'>
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

      <section className='subsc-section-three py-4'>
        <div className='container-fluid px-5'>
          <h3 className='text-light m-0'>Compare our plans and find the right one for you</h3>
          <span className='text-secondary'>StreamVibe offers three different plans to fit your needs: Basic, Standard, and Premium. Compare the features of each plan and choose the one that's right for you.</span>
          <Table/>
        </div>
      </section>
      
      <section className='subsc-section-four'>
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

export default Subscriptions