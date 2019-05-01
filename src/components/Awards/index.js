import React from 'react'

const Awards = () => {
    return (
      <div>
         <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="awards">
            <div className="row my-auto">
                <div className="col-12">
                    <h2 className="  text-center">Awards</h2>
                    <div className="mb-5 heading-border"></div>
                </div> 
                <div className="main-award" id="award-box">
                    <div className="award">
                        <div className="award-icon"></div>
                        <div className="award-content">
                            <span className="date">Apr 2017 - Mar 2018</span>
                            <h5 className="title">Google Analytics Certified Developer</h5>
                            <p className="description">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mattis felis vitae risus pulvinar tincidunt. Nam ac venenatis enim. Aenean hendrerit justo sed.
                            </p>
                        </div>
                    </div>
                    <div className="award">
                        <div className="award-icon"></div>
                        <div className="award-content">
                            <span className="date">Apr 2018 - Mar 2019</span>
                            <h5 className="title">Mobile Web Specialist - Google Certification</h5>
                            <p className="description">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mattis felis vitae risus pulvinar tincidunt. Nam ac venenatis enim. Aenean hendrerit justo sed.
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
