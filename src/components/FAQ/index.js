import React,{useState} from 'react'
import './FAQ.scss'

const FAQ = () => {
    const [answer1, setAnswer1] = useState(false);
    const [answer2, setAnswer2] = useState(false);
    const [answer3, setAnswer3] = useState(false);
    const [answer4, setAnswer4] = useState(false);
  return (
    <div className="FAQ">
        <div className="container-fluid">
            <div className="row">
                <div className="col-12 MainHeading">
                    <h1>Frequently Asked Questions</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <img src="https://img.icons8.com/ios/100/7145e0/horizontal-line.png" alt="horizontal" className='horizontalLine'/>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <div className="row">
                        <div className="col-12">
                            <div className="Collapse">
                                <div className="contents mt-1" onClick={() => {setAnswer1(!answer1);setAnswer2(false);setAnswer3(false);setAnswer4(false)}}>
                                    <p>What if I need more time after the free trial?</p>
                                    <i className="fa-solid fa-angle-down"></i>
                                </div>
                                { answer1 && <div className="FirstAnswer">
                                    <p>Answer. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id suscipit ex. Suspendisse rhoncus laoreet purus quis elementum. Phasellus sed efficitur dolor, et ultricies sapien. Quisque fringilla sit amet dolor commodo efficitur. Aliquam et sem odio. In ullamcorper nisi nunc, et molestie ipsum iaculis sit amet.</p>
                                </div>}
                                <div className="contents mt-1" onClick={() => {setAnswer2(!answer2);setAnswer1(false);setAnswer3(false);setAnswer4(false)}}>
                                    <p>What if I need more time after the free trial?</p>
                                    <i className="fa-solid fa-angle-down"></i>
                                </div>
                                { answer2 && <div className="FirstAnswer">
                                    <p>Answer. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id suscipit ex. Suspendisse rhoncus laoreet purus quis elementum. Phasellus sed efficitur dolor, et ultricies sapien. Quisque fringilla sit amet dolor commodo efficitur. Aliquam et sem odio. In ullamcorper nisi nunc, et molestie ipsum iaculis sit amet.</p>
                                </div>}
                                <div className="contents mt-1" onClick={() => {setAnswer3(!answer3);setAnswer2(false);setAnswer1(false);setAnswer4(false)}}>
                                    <p>What if I need more time after the free trial?</p>
                                    <i className="fa-solid fa-angle-down"></i>
                                </div>
                                { answer3 && <div className="FirstAnswer">
                                    <p>Answer. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id suscipit ex. Suspendisse rhoncus laoreet purus quis elementum. Phasellus sed efficitur dolor, et ultricies sapien. Quisque fringilla sit amet dolor commodo efficitur. Aliquam et sem odio. In ullamcorper nisi nunc, et molestie ipsum iaculis sit amet.</p>
                                </div>}
                                <div className="contents mt-1" onClick={() => {setAnswer4(!answer4);setAnswer2(false);setAnswer3(false);setAnswer1(false)}}>
                                    <p>What if I need more time after the free trial?</p>
                                    <i className="fa-solid fa-angle-down"></i>
                                </div>
                                { answer4 && <div className="FirstAnswer">
                                    <p>Answer. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id suscipit ex. Suspendisse rhoncus laoreet purus quis elementum. Phasellus sed efficitur dolor, et ultricies sapien. Quisque fringilla sit amet dolor commodo efficitur. Aliquam et sem odio. In ullamcorper nisi nunc, et molestie ipsum iaculis sit amet.</p>
                                </div>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FAQ