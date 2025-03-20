import React from "react";
import "./HomeVideo.css";
import { FaArrowDown } from "react-icons/fa";
import homeimg from './malaiosai banner.png';
import { Link } from 'react-scroll';
const HomeVideo = () => {
    return (
        <div className="home-video-container">
            <img className="home-video img-fluid" src={homeimg} alt="home-img"/>

            <div className="home-video-overlay">
                <div className="home-video-text">
                    {/* <p>Refined comfort, serene </p> */}
                    <p>Discover More</p>
                </div>
                <div className="home-video-arrow">
                    <Link to="wel-come" smooth={true} duration={1000}><FaArrowDown /> </Link>

                </div>
            </div>
        </div>
    );
};

export default HomeVideo;
