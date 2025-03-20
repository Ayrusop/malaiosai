import React from 'react'
import "./Experience.css"
import campFire from "../images/campFire.jpg"
import bbq from "../images/bbq.png"
import NatureWalks from "../images/NatureWalks.png"
import Corporate from "../images/Corporate.png"
import Celebration from "../images/Celebration.png"
import Scenic from "../images/Scenic.png"
import room2 from '../images/room2.jpeg'
import room3 from '../images/room3.jpeg'
import room6 from '../images/room6.jpeg'
import room7 from '../images/room7.jpeg'
import room8 from '../images/room8.jpeg'
import room9 from '../images/room9.jpeg'
import room10 from '../images/room10.jpeg'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Pagination, Autoplay } from "swiper/modules";

const images = [
    room6,
    room2,
    room3,
    room7,
    room8,
    room9,
    room10
];
const Experience = () => {
    return (
        <div>
            <div className="mt-5 text-center">
                <p className='exp-tit'>Malaiosai Experiences</p>
                <p style={{ fontSize: "1.5rem", color: "#8C8C8C" }}>We provide a range of amenities and experiences to make your stay <br /> memorable</p>
            </div>
            <div className='exp-image-sec'>

                <div className="row text-center mt-5">
                    <div className="col exp-img-text">
                        <img className="exp-image" src={campFire} alt={campFire}/>
                        <div className="overlay">
                            <div className="text">
                                <h3 style={{ fontSize: "2rem" }}>
                                    Campfire Nights
                                </h3>
                                <p style={{ fontSize: "1.2rem" }}>
                                    Gather around a warm fire under <br /> starlit skies
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col exp-img-text">
                        <img className="exp-image" src={bbq} alt={bbq}/>
                        <div className="overlay">
                            <div className="text">
                                <h3 style={{ fontSize: "2rem" }}>
                                    BBQ Setup
                                </h3>
                                <p style={{ fontSize: "1.2rem" }}>
                                    Fresh grilled meals in the open air <br /> with loved ones
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col exp-img-text">
                        <img className="exp-image" src={NatureWalks} alt={NatureWalks}/>
                        <div className="overlay">
                            <div className="text">
                                <h3 style={{ fontSize: "2rem" }}>
                                    Nature Walks
                                </h3>
                                <p style={{ fontSize: "1.2rem" }}>
                                    Discover beautiful tea estates  <br /> and scenic trails

                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row text-center mt-5">

                    <div className="col exp-img-text">
                        <img className="exp-image" src={Scenic} alt={Scenic}/>
                        <div className="overlay">
                            <div className="text">
                                <h3 style={{ fontSize: "2rem" }}>
                                    Scenic Rides
                                </h3>
                                <p style={{ fontSize: "1.2rem" }}>
                                    Premium transport to local  <br /> attractions
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col exp-img-text">
                        <img className="exp-image" src={Corporate} alt={Corporate}/>
                        <div className="overlay">
                            <div className="text">
                                <h3 style={{ fontSize: "2rem" }}>
                                    Corporate Retreats
                                </h3>
                                <p style={{ fontSize: "1.2rem" }}>
                                    Gather around a warm fire under <br /> starlit skies
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col exp-img-text">
                        <img className="exp-image" src={Celebration} alt={Celebration}/>
                        <div className="overlay">
                            <div className="text">
                                <h3 style={{ fontSize: "2rem" }}>
                                    Celebration Venue
                                </h3>
                                <p style={{ fontSize: "1.2rem" }}>
                                    Perfect setting for weddings, birthdays <b />and special events
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="row mt-5 refind-room text-center align-items-center">
                {/* Left Text Section */}
                <div className="col-md-6 text-md-start text-center">
                    <div className="refind-room1">
                        <p className="exp-tit">
                            Refined Rooms <br />
                            and Retreats
                        </p>
                        <p style={{ color: "#8C8C8C", fontSize: "1.5rem" }} className="mt-5">
                            Step into a world of refined luxury, where each space is thoughtfully designed to complement the stunning natural beauty that surrounds you. Immerse yourself in an atmosphere of serene elegance, where every detail is carefully crafted to enhance your stay and offer the perfect sanctuary for relaxation and rejuvenation.
                        </p>
                    </div>
                </div>

                {/* Right Slider Section */}
                <div className="col-md-6">
                    <div className="swiper-container">
                        <Swiper
                            modules={[Pagination, Autoplay]}
                            pagination={{ clickable: true }}
                            autoplay={{ delay: 3000, disableOnInteraction: false }}
                            spaceBetween={20}
                            slidesPerView={1}
                            className="mt-5"
                        >
                            {images.map((img, index) => (
                                <SwiperSlide key={index}>
                                    <img src={img} className="img-fluid w-50 h-50" alt={`slide-${index}`} />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>

        </div>
    );
}


export default Experience;