import React from 'react';
import Logo from '../../static/img/logo-s.png';
const About = () => {
    return(
        <section className="resume-section p-3 p-lg-5 d-flex d-column" id="about">
            <div className="my-auto" >
                <img src={Logo} className="img-fluid mb-3" alt=""/>
                <h2 className="mb-0 text-primary">Zubair Ahmed</h2>
                <div className="subheading mb-5 text-white">SOFTWARE ENGINNER AT <a href="https://bitbytes.io/" target="blank">BITBYTES</a></div>
                <p className="mb-5 text-white" style={{maxWidth: '500px'}} >I am Full Stack Web developer having divers set of skills. I am currently working mostly javascrip stake (Reactjs, Vuejs, and Nodejs).</p>
                <ul className="list-inline list-social-icons mb-0">
                    <li className="list-inline-item">
                        <a href="https://web.facebook.com/itszubairahmed" target="blank">
                    <span className="fa-stack fa-lg">
                    <i className="fa fa-circle fa-stack-2x"></i>
                    <i className="fa fa-facebook fa-stack-1x fa-inverse"></i>
                    </span>
                </a>
                    </li>
                    <li className="list-inline-item">
                        <a href="https://twitter.com/zubair_hasrat" target="blank">
                    <span className="fa-stack fa-lg">
                    <i className="fa fa-circle fa-stack-2x"></i>
                    <i className="fa fa-twitter fa-stack-1x fa-inverse"></i>
                    </span>
                </a>
                    </li>
                    <li className="list-inline-item">
                        <a href="https://www.linkedin.com/in/zubair-hasrat/" target="blank">
                    <span className="fa-stack fa-lg">
                    <i className="fa fa-circle fa-stack-2x"></i>
                    <i className="fa fa-linkedin fa-stack-1x fa-inverse"></i>
                    </span>
                </a>
                    </li>
                    <li className="list-inline-item">
                        <a href="https://github.com/zubairhasrat" target="blank">
                    <span className="fa-stack fa-lg">
                    <i className="fa fa-circle fa-stack-2x"></i>
                    <i className="fa fa-github fa-stack-1x fa-inverse"></i>
                    </span>
                </a>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default About;