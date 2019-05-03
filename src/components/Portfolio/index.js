import React, { Fragment } from "react";
import $ from 'jquery';
import Helmet from 'react-helmet';
import Laravel1 from '../../static/img/portfolio/laravel-1.png';
import Laravel2 from '../../static/img/portfolio/laravel-2.jpeg';
import vue1 from '../../static/img/portfolio/vue-1.jpeg';
import vue2 from '../../static/img/portfolio/vue-2.jpeg';
import vue3 from '../../static/img/portfolio/vue-3.jpeg';
import vue4 from '../../static/img/portfolio/vue-4.jpeg';
import react1 from '../../static/img/portfolio/react-1.jpeg';
import react2 from '../../static/img/portfolio/react-2.png';
import react3 from '../../static/img/portfolio/react-3.png';

class PortFolio extends React.Component {
    componentDidMount() {
        
        $(".filter-b").click(function(){
            var value = $(this).attr('data-filter');
            if(value == "all")
            { 
                $('.filter').show('1000');
            }
            else
            { 
                $(".filter").not('.'+value).hide('3000');
                $('.filter').filter('.'+value).show('3000');
            }
        });
        if ($(".filter-b").removeClass("active")) {
            $(this).removeClass("active");
        }
        $(this).addClass("active");
    }
    render() {
        return(
            <Fragment>
                <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="portfolio"> 
                    <div className="row my-auto">
                        <div className="col-12">
                            <h2 className="text-center">Projects</h2>
                            <div className="mb-5 heading-border"></div>
                        </div>
                        <div className="col-md-12">
                            <div className="port-head-cont">
                                <button className="btn btn-general btn-green filter-b" data-filter="all">All</button>
                                <button className="btn btn-general btn-green filter-b" data-filter="react">React</button>
                                <button className="btn btn-general btn-green filter-b" data-filter="react">Node</button>
                                <button className="btn btn-general btn-green filter-b" data-filter="vue">Vue</button> 
                                <button className="btn btn-general btn-green filter-b" data-filter="laravel">Laravel</button> 
                            </div>
                        </div>
                    </div>
                    <div className="row my-auto">
                        <div className="col-sm-4 portfolio-item filter vue">
                            <a className="portfolio-link" href="#vuePortfolio1" data-toggle="modal">
                                <div className="caption-port">
                                    <div className="caption-port-content">
                                        <i className="fa fa-search-plus fa-3x"></i>
                                    </div>
                                </div>
                                <img className="img-fluid" src={vue1} alt=""/>
                            </a>
                        </div>

                        <div className="col-sm-4 portfolio-item filter vue">
                            <a className="portfolio-link" href="#vuePortfolio2" data-toggle="modal">
                                <div className="caption-port">
                                    <div className="caption-port-content">
                                        <i className="fa fa-search-plus fa-3x"></i>
                                    </div>
                                </div>
                                <img className="img-fluid" src={vue2} alt=""/>
                            </a>
                        </div>              
                        <div className="col-sm-4 portfolio-item filter react">
                            <a className="portfolio-link" href="#reactPortfolio1" data-toggle="modal">
                                <div className="caption-port">
                                    <div className="caption-port-content">
                                        <i className="fa fa-search-plus fa-3x"></i>
                                    </div>
                                </div>
                                <img className="img-fluid" src={react1} alt=""/>
                            </a>
                        </div>
                        <div className="col-sm-4 portfolio-item filter react">
                            <a className="portfolio-link" href="#reactPortfolio2" data-toggle="modal">
                                <div className="caption-port">
                                    <div className="caption-port-content">
                                        <i className="fa fa-search-plus fa-3x"></i>
                                    </div>
                                </div>
                                <img className="img-fluid" src={react2} alt=""/>
                            </a>
                        </div>
                        <div className="col-sm-4 portfolio-item filter laravel">
                            <a className="portfolio-link" href="#laravelPortfolio1" data-toggle="modal">
                                <div className="caption-port">
                                    <div className="caption-port-content">
                                        <i className="fa fa-search-plus fa-3x"></i>
                                    </div>
                                </div>
                                <img className="img-fluid" src={Laravel1} alt=""/>
                            </a>
                        </div>        
                        <div className="col-sm-4 portfolio-item filter laravel">
                            <a className="portfolio-link" href="#laravelPortfolio2" data-toggle="modal">
                                <div className="caption-port">
                                    <div className="caption-port-content">
                                        <i className="fa fa-search-plus fa-3x"></i>
                                    </div>
                                </div>
                                <img className="img-fluid" src={Laravel2} alt=""/>
                            </a>
                        </div>
                        <div className="col-sm-4 portfolio-item filter laravel">
                            <a className="portfolio-link" href="#laravelPortfolio3" data-toggle="modal">
                                <div className="caption-port">
                                    <div className="caption-port-content">
                                        <i className="fa fa-search-plus fa-3x"></i>
                                    </div>
                                </div>
                                <img className="img-fluid" src={vue2} alt=""/>
                            </a>
                        </div>         
                        <div className="col-sm-4 portfolio-item filter vue">
                            <a className="portfolio-link" href="#vuePortfolio3" data-toggle="modal">
                                <div className="caption-port">
                                    <div className="caption-port-content">
                                        <i className="fa fa-search-plus fa-3x"></i>
                                    </div>
                                </div>
                                <img className="img-fluid" src={vue2} alt=""/>
                            </a>
                        </div>
                        <div className="col-sm-4 portfolio-item filter vue">
                            <a className="portfolio-link" href="#vuePortfolio4" data-toggle="modal">
                                <div className="caption-port">
                                    <div className="caption-port-content">
                                        <i className="fa fa-search-plus fa-3x"></i>
                                    </div>
                                </div>
                                <img className="img-fluid" src={vue4} alt=""/>
                            </a>
                        </div>
                    </div>
                </section> 
            </Fragment>
        )
    }
} 

export default PortFolio
