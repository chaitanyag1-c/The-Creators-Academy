import React from 'react'
import './second.css'
import h1 from './student1.jpg'
import h2 from './class2.jpg'
import h3 from './third1.jpg'
const Second = () => {
    return (
        <div class>
             <section className="secondsec">
                <div className="container1">
                    <div className="pb-5 row" data-aos="fade-in">
                        <div className="mx-auto col-md-7">
                            <h2 className="h1 mb-4 text-center">What makes <span className="highlight">Creators Academy</span><br />different?
        </h2>
                            <p className="text-justify">At The Creators Academy, we believe that "An investment in knowledge pays the best interest" So we've worked tirelessly to ensure that this coaching offers options no matter what your school ,board , medium is(CBSE,ICSE,MP Board)</p>
                        </div>
                    </div>
                    <div className="pb-5 justify-content-center row" id="one" data-aos="fade-in">
                        <div className="mb-4 col-sm-6 col-lg-4">
                            <h3 className="text-center text-sm-left mb-4">Healthy Means <br className="d-none d-md-block" /><span
                                className="highlight">Satisfying</span></h3>
                            <p className="text-justify">Our recipes are loaded with nutrients, fiber, and protein. They're
          designed to help you feel nourished and satiated. We believe that this is the <span
                                    className="highlight">real secret to eating well</span>.</p>
                        </div>
                        <div className="text-center col-sm-6 order-sm-first col-lg-5 order-lg-first" data-aos="fade-right">
                            <img
                                src={h1} alt="dada" style={{borderRadius:'50%'}}/>

                        </div>
                    </div>
                    <div className="pb-5 justify-content-center row" data-aos="fade-in">
                        <div className="mb-4 col-sm-6 col-lg-4">
                            <h3 className="text-center text-sm-left mb-4">Ties with <br className="d-none d-md-block" /><span
                                className="highlight">Brain Science India</span></h3>
                            <p className="text-justify">We have our ties with Brain Science India .You will improve recollection powers .Also,here  you will learn scientific methods and techniques to  <span className="highlight">develop learning skills</span>.</p>
                        </div>
                        <div className="text-center col-sm-6 order-sm-last col-lg-5 order-lg-last" data-aos="fade-left"><img
                            src={h2} alt="dada" style={{borderRadius:'50%'}}/>
                        </div>
                    </div>
                    <div className="pb-5 justify-content-center row">
                        <div className="mb-4 col-sm-6 col-lg-4" data-aos="fade-in">
                            <h3 className="text-center text-sm-left mb-4">We believe in<br className="d-none d-md-block" /><span
                                className="highlight">Enjoyable Studies</span></h3>
                            <p className="text-justify">We believe that the first step to <span className="highlight">Learning</span> begins with interesting methods of teaching. Here, we are determined to teach using the latest and enjoyable methods</p>
                        </div>
                        <div className="text-center col-sm-6 order-sm-first col-lg-5 order-lg-first" data-aos="fade-right" id="two"><img
                            src={h3}
                            alt="dada" style={{borderRadius:'50%'}}/></div>
                    </div>
                </div>
            </section>
            
            <section className="conta">

                <div className="container1">
                    <div className="pb-6 row">
                        <div className="text-center col">
                            <h2 className="h1 mb-5">Book a free Demo class</h2><button type="button"
                                className="rounded-pill btn-responsive font-weight-bold btn btn-primary" > Book Now</button>
                        </div>
                    </div>
                </div>
            
            </section>

        </div>
    )
}

export default Second
