import React from 'react'
import supportPage from "../assets/img/supportPage.png"
import sectionBackground from "../assets/img/sectionBackground.png"
import Faq from '../components/Faq'


const Support = () => {
  return (
    <>
      <section className='support-section-one'>
      </section>

      <section className='support-section-two py-4'>
        <div className='container-fluid px-5'>
          <div className='row'>
            <div className='col-12 col-sm-5 col-md-5 col-lg-5'>
              <h1 className='text-light'>Welcome to our support page!</h1>
              <span className='text-secondary'>We're here to help you with any problems you may be having with our product.</span>

              <img src={supportPage} className='py-5' style={{ width: "100%", height: "auto" }} />
            </div>
            <div className='col-12 col-sm-7 col-md-7 col-lg-7'>
              <div className='contact px-4 py-2'>
                <form className='mt-4'>
                  <div className='row'>
                    <div className='col-12 col-sm-12 col-md-6'>
                      <div className=' mb-3 d-flex align-items-start flex-column'>
                        <label className='py-2 text-secondary'>First Name</label>
                        <input
                          className='input-contact p-3'
                          type='text'
                          name='name'
                          placeholder="Enter first name"

                        />
                      </div>
                    </div>
                    <div className='col-12 col-sm-12 col-md-6'>
                      <div className='d-flex align-items-start flex-column mb-3'>
                        <label className='py-2 text-secondary'>Surname</label>
                        <input
                          className='input-contact p-3'
                          type='text'
                          name='surname'
                          placeholder="Enter surname"


                        />
                      </div>
                    </div>
                    <div className='col-12 col-sm-12 col-md-6'>
                      <div className='d-flex align-items-start flex-column mb-3'>
                        <label className='py-2 text-secondary'>Email address</label>
                        <input
                          className='input-contact p-3'
                          type='text'
                          name='email'
                          placeholder="Enter your email"

                        />
                      </div>
                    </div>
                    <div className='col-12 col-sm-12 col-md-6'>
                      <div className='d-flex align-items-start flex-column mb-3'>
                        <label className='text-secondary py-2'>Phone number</label>
                        <input
                          className='input-contact p-3'
                          type='text'
                          name='phone'
                          placeholder="Enter phone number"

                        />
                      </div>
                    </div>
                    <div className='col-12 col-sm-12 col-md-12 py-5'>
                      <textarea name='message' className="form-control text-secondary" maxLength="80" id="message" placeholder="Enter your message" ></textarea>
                    </div>
                  </div>
                  <div className='d-flex justify-content-end align-items-end'>
                    <button type="submit" className="btn mt-3  send-message">Send message</button>
                  </div>

                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='support-section-three'>
        <div className='container-fluid px-5'>
          <h3 className='text-light m-0'>Frequently asked questions</h3>
          <Faq/>
        </div>
      </section>
       <section className='support-section-four'>
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

export default Support