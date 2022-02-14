import React from 'react'
import './HomePage.scss'

const HomePage = () => {
  return (
    <div className="HomePage"> 
        <div className="container-fluid">
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5 col-xl-5">
                    <div className="container-fluid ContentRow">
                        <div className="row">
                            <div className="col-12 MainHeading">
                                <h1>SEO Services</h1>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 SubHeading">
                                <h6>Pharetra convallis posuere morbi leo. Tellus mauris a diam maecenas.</h6>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <button className='rounded contactUs'>Contact Us</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-7 col-lg-7 col-xl-7">
                    <img src="images/MainBackGround.png" alt="backGroundFgg" className='backGroundFgg' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default HomePage