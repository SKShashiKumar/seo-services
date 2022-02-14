import React from 'react'
import './OurTeam.scss'

const OurTeam = () => {
  return (
    <div className="OurTeam">
        <div className="container-fluid">
            <div className="row">
                <div className="col-12">
                    <h1 className='MainHeading'>Our Team</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <p className='SubHeading'>Glavrida for habitant morbi tristique senectus et <br/> netus et malesuada fames</p>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <div className="container-fluid CardsContainer">
                        <div className="row justify-content-center g-5">
                            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
                                <div className="container-fluid cards">
                                    <div className="row justify-content-center  text-center">
                                        <div className="col-12 web">
                                            <img src="images/web.png" alt="web"/>
                                        </div>
                                        <div className="Cardname">
                                            <h5>JEFFREY BROWN</h5>
                                        </div>
                                        <div className="col-12 CardHeading">
                                            <h6>creative leader</h6>
                                        </div>
                                        <div className="col-12 CardDesc">
                                            <p>Glavi amet ritnisl libero molestie ante ut fringilla purus eros quis glavrid from dolor amet iquam lorem bibendum</p>
                                        </div>
                                        <div className="col-12 CardIcons">
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
                                <div className="container-fluid cards">
                                    <div className="row justify-content-center">
                                        <div className="col-12 web">
                                            <img src="images/Layer.png" alt="web"/>
                                        </div>
                                        <div className="col-12 CardHeading">
                                            <h6>MOBILITY SERVICES</h6>
                                        </div>
                                        <div className="col-12 CardDesc">
                                            <p>Sample text. Click to select the text box. Click again or double click to start editing the text. Excepteur sint occaecat cupidatat non proident.</p>
                                        </div>
                                        <div className="col-12 CardButton">
                                            <button className="rounded-pill MoreButton" alt="MoreButton">More</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
                                <div className="container-fluid cards">
                                    <div className="row justify-content-center">
                                        <div className="col-12 web">
                                            <img src="images/Consulting.png" alt="web"/>
                                        </div>
                                        <div className="col-12 CardHeading">
                                            <h6>CONSULTING</h6>
                                        </div>
                                        <div className="col-12 CardDesc">
                                            <p>Sample text. Click to select the text box. Click again or double click to start editing the text. Excepteur sint occaecat cupidatat non proident.</p>
                                        </div>
                                        <div className="col-12 CardButton">
                                            <button className="rounded-pill MoreButton" alt="MoreButton">More</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default OurTeam