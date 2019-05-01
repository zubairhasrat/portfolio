import React from 'react';
import react from '../../static/svg/react-brands.svg';
import vue from '../../static/svg/vuejs-brands.svg';
import node from '../../static/svg/node-js-brands.svg';
import larvel from '../../static/svg/laravel-brands.svg';

const Skills = () => {
    return(
        <section className="d-flex flex-column" id="skills">
            <div className="p-lg-5 p-3 skill-cover">
            <h3 className="text-center text-white">Skills</h3>
            <div className="row text-center my-auto "> 
                <div className="col-md-3 col-sm-6">
                    <div className="skill-item">
                        <img width="80px" height="80px" src={react}/>
                        <h2><span className="counter"> 85 </span><span>%</span></h2>
                        <p>React</p>
                    </div>
                </div>
                <div className="col-md-3 col-sm-6">
                    <div className="skill-item">
                        <img width="80px" height="80px" src={node}/>
                        <h2><span className="counter"> 80 </span><span>%</span></h2>
                        <p>Node</p>
                    </div>
                </div>
                <div className="col-md-3 col-sm-6">
                    <div className="skill-item">
                        <img width="80px" height="80px" src={vue}/>
                        <h2><span className="counter"> 65 </span><span>%</span></h2>
                        <p>Vue</p>
                    </div>
                </div>
                <div className="col-md-3 col-sm-6">
                    <div className="skill-item">
                        <img width="80px" height="80px" src={larvel}/>
                        <h2><span className="counter"> 50 </span><span>%</span></h2>
                        <p>Laravel</p>
                    </div>
                </div>
            </div>
            </div> 
        </section>
    )
}

export default Skills