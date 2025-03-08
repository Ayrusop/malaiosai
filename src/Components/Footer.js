import React from 'react';
import { FaLocationArrow, FaLinkedin, FaInstagram, FaPhoneAlt, FaMailchimp } from 'react-icons/fa'; // Importing icons
import './Footer.css';
import malaiosaifoo from '../images/MALAIOSAI.png';
import { FaWhatsapp } from 'react-icons/fa6';
import { MdEmail, MdArrowOutward } from "react-icons/md";
const Footer = () => {
    return (
        <>
            <footer className="mainfooter" role="contentinfo">
                <div className="footer-middle">
                    <div className="container mt-5">
                        <div className="row">
                            <div className="col-md-3 col-sm-6">
                                {/* Column1 */}
                                <div className="text-black text-bold ">
                                    {/* <img src={logo} alt='logo' className='logo-on-footer' /> */}
                                    <h2 >MALAIOSAI</h2>
                                    <p className='mt-3'>MALAIOSAI, THE NILGIRIS   <MdArrowOutward style={{ paddingLeft: "5px", fontSize: "1.5rem" }} /></p>
                                    <a className='mb-4'>viwe map</a>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6">
                                {/* Column2 */}
                                <div className="text-dark">
                                    <h4>Quick links</h4>
                                    <ul className="list-unstyled mt-4">
                                        <li><p href="#">ABOUT US</p></li>
                                        <li><p href="#">PERQUSITES</p></li>
                                        <li><p href="#">DELIGHTES</p></li>
                                        <li><p href="#">GALLERY</p></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6">
                                {/* Column3 */}
                                <div className="text-dark">
                                    <h4>Reach us</h4>
                                    <ul className="list-unstyled mt-4">
                                        <li className='d-flex'>
                                            <p><FaLocationArrow /></p>
                                            <p style={{ paddingLeft: "10px" }}>MALAIOSAI RESORTS, <br />NILGIRIS</p>
                                        </li>
                                        <li className='d-flex '>
                                            <p><FaPhoneAlt /></p>
                                            <p style={{ paddingLeft: "10px" }}>+91 9786902416</p>
                                        </li>
                                        <li className='d-flex align-items-center'>
                                            <p style={{ fontSize: "1.2rem" }}><MdEmail /></p>
                                            <p style={{ paddingLeft: "10px" }}>malaiosai24@gmail.com</p>
                                        </li>

                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <h4>Social Media</h4>
                                <ul className="list-unstyled mt-4 text-dark">
                                    <li className='d-flex '>
                                        <p style={{ paddingRight: "10px" }}>Instagram</p>
                                        <p><MdArrowOutward style={{ fontSize: "1.5rem" }} /></p>

                                    </li>
                                    <li className='d-flex align-items-center'>
                                        <p style={{ paddingRight: "10px" }}>Whatsapp</p>
                                        <p><MdArrowOutward style={{ fontSize: "1.5rem" }} /></p>
                                    </li>


                                </ul>
                            </div>
                        </div>

                        
                    </div>
                </div>
                <div className='text-center'>
                    <img src={malaiosaifoo} style={{ padding: "10px" }} className='img-fluid'/>
                </div>

            </footer>
            <div className="col-md-12 copy">
                <p className="text-center">&copy; Copyright 2025 - malaiosai. All rights reserved.</p>
            </div>
        </>

    );
};

export default Footer;
