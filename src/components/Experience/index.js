import React from 'react';
const Experience = () => {
    return(
        <section className="resume-section p-3 p-lg-5 " id="experience">
            <div className="row my-auto">
                <div className="col-12">
                    <h2 className="  text-center">Experience</h2>
                    <div className="mb-5 heading-border"></div>
                </div>
                <div className="resume-item col-md-6 col-sm-12 " > 
                    <div className="card mx-0 p-4 mb-5" style={{borderColor: '#17a2b8', boxShadow: '2px 2px 2px rgba(0, 0, 0, 0.21)'}}>
                    <div className=" resume-content mr-auto">
                        <h4 className="mb-3"><i className="fa fa-globe mr-3 text-info"></i> Senior Web Developer</h4>
                        <p>Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.</p>
                    </div>
                    <div className="resume-date text-md-right">
                        <span className="text-primary">March 2019 - Present</span>
                    </div>
                    </div>  
                </div>
                <div className="resume-item col-md-6 col-sm-12">
                    <div className="card mx-0 p-4 mb-5" style={{borderColor: "#ffc107", boxShadow: "2px 2px 2px rgba(0, 0, 0, 0.21)"}}>
                    <div className="resume-content mr-auto">
                        <h4 className="mb-3"><i className="fa fa-laptop mr-3 text-warning"></i>  Web Developer</h4>
                        <p>Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.</p>
                    </div>
                    <div className="resume-date text-md-right">
                        <span className="text-primary">December 2018 - March 2019</span>
                    </div>
                    </div>  
                </div>
                <div className="resume-item col-md-6 col-sm-12">
                    <div className="card mx-0 p-4 mb-5" style={{borderColor: "#28a745", boxShadow: "2px 2px 2px rgba(0, 0, 0, 0.21)"}}>
                    <div className="resume-content mr-auto">
                        <h4 className="mb-3"><i className="fa fa-camera mr-3 text-success"></i> Junior Web Designer</h4>
                        <p>Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.</p>
                    </div>
                    <div className="resume-date text-md-right">
                        <span className="text-primary">July 2017 - December 2018</span>
                    </div>
                    </div>  
                </div>
                <div className="resume-item col-md-6 col-sm-12">
                    <div className="card mx-0 p-4 mb-5" style={{borderColor: "#2196f3", boxShadow: "2px 2px 2px rgba(0, 0, 0, 0.21)"}}>
                    <div className="resume-content mr-auto">
                        <h4 className="mb-3"><i className="fa fa-area-chart mr-3 text-primary"></i> Web Design Intern</h4>
                        <p>Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.</p>
                    </div>
                    <div className="resume-date text-md-right">
                        <span className="text-primary">September 2018 - June 2019</span>
                    </div>
                    </div>  
                </div>
            </div>
        </section>
    )
}

export default Experience;