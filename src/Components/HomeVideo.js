import React from "react";
import "./HomeVideo.css";
import { FaArrowDown } from "react-icons/fa";
import vdo from './landscape.mp4';
const HomeVideo = () => {
    return (
        <div className="home-video-container">
            <video autoPlay loop muted className="home-video">
                <source src={vdo} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="home-video-overlay">
                <div className="home-video-text">
                    <p>Refined comfort, serene </p>
                    <p>sophistication awaits.</p>
                </div>
                <div className="home-video-arrow">
                    <FaArrowDown />
                </div>
            </div>
        </div>
    );
};

export default HomeVideo;
