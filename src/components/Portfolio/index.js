import React from "react";
import P1 from '../../static/img/portfolio/p-1.jpg';
import P2 from '../../static/img/portfolio/p-2.jpg';
import P3 from '../../static/img/portfolio/p-3.jpg';
import P4 from '../../static/img/portfolio/p-4.jpg';
import P5 from '../../static/img/portfolio/p-5.jpg';
import P6 from '../../static/img/portfolio/p-6.jpg';
import P7 from '../../static/img/portfolio/p-7.jpg';
import P8 from '../../static/img/portfolio/p-8.jpg';
import P9 from '../../static/img/portfolio/p-9.jpg';
class PortFolio extends React.Component {

    render() {
        return(
            <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="portfolio"> 
                <div className="row my-auto">
                    <div className="col-12">
                        <h2 className="text-center">Portfolio</h2>
                        <div className="mb-5 heading-border"></div>
                    </div>
                    <div className="col-md-12">
                        <div className="port-head-cont">
                        <button className="btn btn-general btn-green filter-b" data-filter="all">All</button>
                        <button className="btn btn-general btn-green filter-b" data-filter="consulting">Web Design</button>
                        <button className="btn btn-general btn-green filter-b" data-filter="finance">Mobile Apps</button>
                        <button className="btn btn-general btn-green filter-b" data-filter="marketing">Graphics Design</button> 
                        </div>
                    </div>
                </div>
                <div className="row my-auto">
                    <div className="col-sm-4 portfolio-item filter finance">
                        <a className="portfolio-link" href="#portfolioModal4" data-toggle="modal">
                            <div className="caption-port">
                                <div className="caption-port-content">
                                    <i className="fa fa-search-plus fa-3x"></i>
                                </div>
                            </div>
                            <img className="img-fluid" src={P4} alt=""/>
                        </a>
                    </div>
                    <div className="col-sm-4 portfolio-item filter marketing">
                        <a className="portfolio-link" href="#portfolioModal5" data-toggle="modal">
                            <div className="caption-port">
                                <div className="caption-port-content">
                                    <i className="fa fa-search-plus fa-3x"></i>
                                </div>
                            </div>
                            <img className="img-fluid" src={P5} alt=""/>
                        </a>
                    </div>
                    <div className="col-sm-4 portfolio-item filter consulting">
                        <a className="portfolio-link" href="#portfolioModal6" data-toggle="modal">
                            <div className="caption-port">
                                <div className="caption-port-content">
                                    <i className="fa fa-search-plus fa-3x"></i>
                                </div>
                            </div>
                            <img className="img-fluid" src={P6} alt=""/>
                        </a>
                    </div>              
                    <div className="col-sm-4 portfolio-item filter consulting">
                        <a className="portfolio-link" href="#portfolioModal7" data-toggle="modal">
                            <div className="caption-port">
                                <div className="caption-port-content">
                                    <i className="fa fa-search-plus fa-3x"></i>
                                </div>
                            </div>
                            <img className="img-fluid" src={P7} alt=""/>
                        </a>
                    </div>
                    <div className="col-sm-4 portfolio-item filter consulting">
                        <a className="portfolio-link" href="#portfolioModal8" data-toggle="modal">
                            <div className="caption-port">
                                <div className="caption-port-content">
                                    <i className="fa fa-search-plus fa-3x"></i>
                                </div>
                            </div>
                            <img className="img-fluid" src={P8} alt=""/>
                        </a>
                    </div>
                    <div className="col-sm-4 portfolio-item filter finance">
                        <a className="portfolio-link" href="#portfolioModal9" data-toggle="modal">
                            <div className="caption-port">
                                <div className="caption-port-content">
                                    <i className="fa fa-search-plus fa-3x"></i>
                                </div>
                            </div>
                            <img className="img-fluid" src={P9} alt=""/>
                        </a>
                    </div>              
                    <div className="col-sm-4 portfolio-item filter marketing">
                        <a className="portfolio-link" href="#portfolioModal1" data-toggle="modal">
                            <div className="caption-port">
                                <div className="caption-port-content">
                                    <i className="fa fa-search-plus fa-3x"></i>
                                </div>
                            </div>
                            <img className="img-fluid" src={P1} alt=""/>
                        </a>
                    </div>
                    <div className="col-sm-4 portfolio-item filter marketing">
                        <a className="portfolio-link" href="#portfolioModal2" data-toggle="modal">
                            <div className="caption-port">
                                <div className="caption-port-content">
                                    <i className="fa fa-search-plus fa-3x"></i>
                                </div>
                            </div>
                            <img className="img-fluid" src={P2} alt=""/>
                        </a>
                    </div>
                    <div className="col-sm-4 portfolio-item filter finance">
                        <a className="portfolio-link" href="#portfolioModal3" data-toggle="modal">
                            <div className="caption-port">
                                <div className="caption-port-content">
                                    <i className="fa fa-search-plus fa-3x"></i>
                                </div>
                            </div>
                            <img className="img-fluid" src={P3} alt=""/>
                        </a>
                    </div> 
                </div>
            </section>
                   
        )
    }
} 

export default PortFolio
