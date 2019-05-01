import React from 'react';
const Skills = () => {
    return(
        <section className="d-flex flex-column" id="skills">
            <div className="p-lg-5 p-3 skill-cover">
            <h3 className="text-center text-white">Coding Skills</h3>
            <div className="row text-center my-auto "> 
                <div className="col-md-3 col-sm-6">
                    <div className="skill-item">
                        <i className="fa fa-html5 fa-5x"></i>
                        <h2><span className="counter"> 84 </span><span>%</span></h2>
                        <p>HTML5</p>
                    </div>
                </div>
                <div className="col-md-3 col-sm-6">
                    <div className="skill-item">
                        <i className="fa fa-css3 fa-5x"></i>
                        <h2><span className="counter"> 95 </span><span>%</span></h2>
                        <p>CSS3</p>
                    </div>
                </div>
                <div className="col-md-3 col-sm-6">
                    <div className="skill-item">
                        <i className="fa fa-code fa-5x"></i>
                        <h2><span className="counter"> 65 </span><span>%</span></h2>
                        <p>JQuery</p>
                    </div>
                </div>
                <div className="col-md-3 col-sm-6">
                    <div className="skill-item">
                        <i className="fa fa-globe fa-5x"></i>
                        <h2><span className="counter"> 89 </span><span>%</span></h2>
                        <p>PHP</p>
                    </div>
                </div>
            </div>
            </div> 
        </section>
    )
}

export default Skills