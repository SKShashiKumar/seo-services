import React from 'react'
import './Footer.scss'

const Footer = () => {
  return (
    <div className="Footer">
      <div className="container-fluid">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 pt-5 FirstCol pb-5">
            <div className="container-fluid">
              <div className="row">
                <div className="col-12">
                  <h1>GET IN TOUCH</h1>
                </div>
                <div className="col-12">
                  <p className='SubHeading'>We can ensure reliability, low cost fares and most important, with safety and comfort in mind.</p>
                </div>
                <div className="col-12">
                  <p className='Desc'>Etiam sit amet convallis erat – class aptent taciti sociosqu ad litora torquent per conubia! Maecenas gravida lacus. Lorem etiam sit amet convallis erat.</p>
                </div>
                <div className="col-12 logos">
                  <i className="fa-brands fa-facebook-f"></i>
                  <i className="fa-brands fa-twitter"></i>
                  <i className="fa-brands fa-instagram"></i>
                  <i className="fa-brands fa-vk"></i>
                  <i className="fa-brands fa-youtube"></i>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xs-12 col-sm-12 col-md-4 col-lg-3 col-xl-3 pt-5 SecondCol pb-5">
            <div className="container-fluid">
              <div className="row">
                <div className="col-12">
                  <h3>CALL US</h3>
                </div>
                <div className="col-12">
                  <p>1 (234) 567-891<br/>
                      1 (234) 987-654</p>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                <h3>LOCATION</h3>
                </div>
                <div className="col-12">
                  <p>121 Rock Sreet, 21 Avenue,
                    New York, NY 92103-9000</p>
                </div>
                <div className="col-12">
                  <h3>OUR TOP SERVICES</h3>
                </div>
                <div className="col-12">
                  <ul>
                    <li>Local Transfers</li>
                    <li>Airport Transfers</li>
                    <li>Excursions and Tours</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 pt-5 LastCol pb-5">
            <div className="container-fluid">
              <div className="row">
                <div className="col-12">
                  <h1>CONTACT US</h1>
                </div>
              </div>
              <div className="row">
                <form method='post'>
                  <div className="mb-3">
                    <input type="name" className="form-control" id="exampleFormControlInput1" placeholder="Please Enter your name"/>
                  </div>
                  <div className="mb-3">
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                  </div>
                  <div className="mb-3">
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                  </div>
                  <button type="submit" className="btn btn-success w-100">Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer