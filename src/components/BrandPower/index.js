import React from 'react'
import './BrandPower.scss'

const BrandPower = () => {
  return (
    <div className="BrandPower">
        <div className="container-fluid">
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                  <div className="container-fluid ContentTab">
                    <div className="row">
                      <div className="col-12">
                        <h1>How we create brand power</h1>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12">
                        <ul className='ListContent'>
                          <li><p>We illuminate and cultivate the tensions that matter.</p></li>
                          <li><p>We illuminate and cultivate the tensions that matter.</p></li>
                          <li><p>We illuminate and cultivate the tensions that matter.</p></li>
                          <li><p>We illuminate and cultivate the tensions that matter.</p></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 text-center">
                  <img src="images/Min.jpg" alt="MinImg" className='MinImg'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BrandPower