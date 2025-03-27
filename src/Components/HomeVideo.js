import React, { useState, useEffect } from "react";
import "./HomeVideo.css";
import { FaArrowDown } from "react-icons/fa";
import homeimgDesktop from './malaiosai banner1.png';
import homeimgMobile from './malaiosai banner.png';
import { Link } from 'react-scroll';

const HomeVideo = () => {
    const [isMobile, setIsMobile] = useState(false);

    // Check if the screen is mobile size
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 767); // Set mobile if the width is less than or equal to 767px
        };

        handleResize(); // Initialize state on mount
        window.addEventListener('resize', handleResize); // Update state on window resize

        return () => {
            window.removeEventListener('resize', handleResize); // Cleanup listener on unmount
        };
    }, []);

    return (
        <div className="home-video-container">
            <img 
                className="home-video img-fluid" 
                src={isMobile ? homeimgMobile : homeimgDesktop} 
                alt="home-img" 
            />
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
