import React, { Component, Fragment } from 'react';

import { Link } from "react-router-dom";
import { FaQuoteRight, FaQuoteLeft, FaSkype, FaPhone, FaFacebookSquare } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import './style.css';

import LikeButton from '../Facebook/LikeButton';

class Footer extends Component {
    render() {
        return (
            <Fragment>  
            <footer className="mywork-color pt-3 ml-3">
                <div className="container-fluid text-center text-md-left">
                    <div className="row text-white">
                        <div className="col-md-6 mt-md-0 mt-3">
                            <h5 className="text-uppercase text-warning text-left">My Work</h5>
                            <h5 className="text-left"> <FaQuoteLeft style={{ marginBottom: '3px' }} /> With MyWork, you get an honest partner. You get world-class usability. <FaQuoteRight style={{ marginBottom: '3px' }} /> </h5>
                            <LikeButton />
                        </div>
                        <div className="col-md-3 mb-md-0 mb-3 ">
                            <h5 className="text-uppercase text-warning text-left">Discover More</h5>
                            <div className="text-left">
                                <div>
                                    <Link to={`/whymywork`} className="text-white">Why MyWork</Link>
                                </div>
                                <div>
                                    <Link to={`/about`} className="text-white">About</Link>
                                </div>
                                <div>
                                    <Link to={`/contacts`} className="text-white">Contact us</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 mb-md-0 mb-3">
                            <h5 className="text-uppercase text-warning text-left">Contacts</h5>
                            <div className="text-left">
                                <div>
                                    <p className="text-white mb-0"><FaPhone style={{ marginBottom: '3px' }} /> +44 74385414</p>
                                </div>
                                <div>
                                    <p className="text-white mb-0"><FiMail style={{ marginBottom: '3px' }} /> mywork@gmail.com</p>
                                </div>
                                <div>
                                    <p className="text-white mb-0"><FaSkype style={{ marginBottom: '3px' }} /> my_work</p>
                                </div>
                                <div>
                                    <p className="text-white"><FaFacebookSquare style={{ marginBottom: '3px' }} /> Facebook</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="my-1 bg-white" />
                <div className="footer-copyright text-center py-2 bg-white">&copy; CopyRight MyWork 2019. All rights reserved.</div>
            </footer></Fragment>
        );
    }
}

export default Footer