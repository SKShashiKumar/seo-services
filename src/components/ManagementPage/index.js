import React from 'react'
import './ManagementPage.scss'

const ManagementPage = () => {
  return (
    <div className="ManagementPage">
        <div className="container-fluid">
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                    <div className="container-fluid ManMain">
                        <div className="row">
                            <div className="col-12 ManImg">
                                <img src="images/Man.jpg" alt="Man"/>
                            </div>
                            <div className="col-12 GoodDesigner">
                                <p>I felt like I was a good designer</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                    <div className="container-fluid ContentRow">
                        <div className="row">
                            <div className="col-12 MainHeading">
                                <h1>Our management consulting services focus on our clients' most critical issues</h1>
                            </div>
                            <div className="col-12 SubHeading">
                                <h6>I thought I had it figured out – I'd moved from Gujarat to Texas and was working with a trailblazing team at AT&T, literally one of the biggest companies in the world.</h6>
                            </div>
                        <div className="col-12 Description">
                            <p>Sem fringilla ut morbi tincidunt augue interdum velit. Nunc sed blandit libero volutpat sed cras. Risus quis varius quam quisque id. Semper auctor neque vitae tempus quam pellentesque nec nam aliquam. Et tortor consequat id porta nibh. Tincidunt id aliquet risus feugiat in ante metus dictum at. Feugiat pretium nibh ipsum consequat. *</p>
                        </div>
                            <div className="col-12">
                                <button className='rounded-3 contactUs'>Read More</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ManagementPage