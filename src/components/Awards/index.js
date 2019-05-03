import React from 'react'

const Awards = () => {
    return (
      <div>
         <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="awards">
            <div className="row my-auto">
                <div className="col-12">
                    <h2 className="  text-center">Education</h2>
                    <div className="mb-5 heading-border"></div>
                </div> 
                <div className="main-award" id="award-box">
                    <div className="award">
                        <div className="award-icon"></div>
                        <div className="award-content">
                            <span className="date">Sep 2013 - Jul 2017</span>
                            <h5 className="title">BS in Sofware Engineering</h5>
                            <p className="description">
                              I have done BS in Software Engineering from COMSATS University Islambad (Abbottbade campus).
                              Got Bronze medal in Software Engineering Department.
                            </p>
                        </div>
                    </div>
                    <div className="award">
                        <div className="award-icon"></div>
                        <div className="award-content">
                            <span className="date">Aug 2011 - Jun 2013</span>
                            <h5 className="title">FSC (Pre-Engineering)</h5>
                            <p className="description">
                               I have done FSc from Govt Boyes degree college Skardu in Pre-Engineering.
                               Got PM Natinal ICT Scholarship for BS in Software Engineering.  
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
      </div>
    )
}

export default Awards;
