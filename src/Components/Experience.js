import React from 'react'
import "./Experience.css"
import campFire from "../images/campFire.png"
import bbq from "../images/bbq.png"
import NatureWalks from "../images/NatureWalks.png"
import Corporate from "../images/Corporate.png"
import Celebration from "../images/Celebration.png"
import Scenic from "../images/Scenic.png"

import room1 from '../images/rooms/room1.png'
import room2 from '../images/rooms/room2.png'
import room3 from '../images/rooms/room3.png'
import room4 from '../images/rooms/room4.png'
import room5 from '../images/rooms/room5.png'
import room6 from '../images/rooms/room6.png'
import room7 from '../images/rooms/room7.png'
import room8 from '../images/rooms/room8.png'
import room9 from '../images/rooms/room9.png'
import room10 from '../images/rooms/room10.png'
import room11 from '../images/rooms/room11.png'
import room12 from '../images/rooms/room12.png'
import room13 from '../images/rooms/room13.png'
import room14 from '../images/rooms/room14.png'
import room15 from '../images/rooms/room15.png'
import room16 from '../images/rooms/room16.png'
import room17 from '../images/rooms/room17.png'
import room18 from '../images/rooms/room18.png'
import room19 from '../images/rooms/room19.png'
import room20 from '../images/rooms/room20.png'

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Pagination, Autoplay } from "swiper/modules";

const images = [
    room1,
    room4,
    room5,
    room6,
    room2,
    room3,
    room7,
    room8,
    room9,
    room10
];
const images1 = [
    room11,
    room12,
    room13,
    room14,
    room15,
    room16,
    room17,
    room18,
    room19,
    room20
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
                        <img className="exp-image" src={campFire} alt="Campfire" />
                        <div className="overlay">
                            <div className="text">
                                <h3 className="exp-title" style={{ fontSize: "2rem" }}>Campfire Nights</h3>
                                <p className="exp-desc">Gather around a warm fire under <br /> starlit skies</p>
                            </div>
                        </div>
                    </div>

                    <div className="col exp-img-text">
                        <img className="exp-image" src={bbq} alt={bbq} />
                        <div className="overlay">
                            <div className="text">
                                <h3 className="exp-title" style={{ fontSize: "2rem" }}>
                                    BBQ Setup
                                </h3>
                                <p className="exp-desc" style={{ fontSize: "1.2rem" }}>
                                    Fresh grilled meals in the open air <br /> with loved ones
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col exp-img-text">
                        <img className="exp-image" src={NatureWalks} alt={NatureWalks} />
                        <div className="overlay">
                            <div className="text">
                                <h3 className="exp-title" style={{ fontSize: "2rem" }}>
                                    Nature Walks
                                </h3>
                                <p className="exp-desc" style={{ fontSize: "1.2rem" }}>
                                    Discover beautiful tea estates  <br /> and scenic trails

                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row text-center mt-5">

                    <div className="col exp-img-text">
                        <img className="exp-image" src={Scenic} alt={Scenic} />
                        <div className="overlay">
                            <div className="text">
                                <h3 className="exp-title" style={{ fontSize: "2rem" }}>
                                    Scenic Rides
                                </h3>
                                <p className="exp-desc" style={{ fontSize: "1.2rem" }}>
                                    Premium transport to local  <br /> attractions
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col exp-img-text">
                        <img className="exp-image" src={Corporate} alt={Corporate} />
                        <div className="overlay">
                            <div className="text">
                                <h3 className="exp-title" style={{ fontSize: "2rem" }}>
                                    Corporate Retreats
                                </h3>
                                <p className="exp-desc" style={{ fontSize: "1.2rem" }}>
                                    Gather around a warm fire under <br /> starlit skies
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col exp-img-text">
                        <img className="exp-image" src={Celebration} alt={Celebration} />
                        <div className="overlay">
                            <div className="text">
                                <h3 className="exp-title" style={{ fontSize: "2rem" }}>
                                    Celebration Venue
                                </h3>
                                <p className="exp-desc" style={{ fontSize: "1.2rem" }}>
                                    Perfect setting for weddings, birthdays <b />and special events
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="">
                <div className="row mt-5 refind-room text-center">
                    {/* Left Sticky Text Section */}
                    <div className="col-md-6 text-md-start text-center sticky-wrapper">
                        <div className="refind-room1 sticky-section">
                            <p className="exp-tit">
                                Refined Rooms <br />
                                and Retreats
                            </p>
                            <p className="description">
                                Step into a world of refined luxury, where each space is thoughtfully designed to complement the stunning natural beauty that surrounds you. Immerse yourself in an atmosphere of serene elegance, where every detail is carefully crafted to enhance your stay and offer the perfect sanctuary for relaxation and rejuvenation.
                            </p>
                        </div>
                    </div>

                    {/* Right Side - Scrollable Swipers */}
                    <div className="col-md-6 scrolling-content">
                        <div className="swiper-container">
                        <Swiper
                                modules={[Pagination, Autoplay]}
                                pagination={{ clickable: true }}
                                autoplay={{ delay: 6000, disableOnInteraction: false }}
                                spaceBetween={20}
                                slidesPerView={1}
                                className="mt-5"
                            >
                                {images.map((img, index) => (
                                    <SwiperSlide key={index}>
                                        <img src={img} className="img-fluid" alt={`slide-${index}`} />
                                    </SwiperSlide>
                                ))}
                            </Swiper>

                        </div>
                        <div className="swiper-container">
                            <Swiper
                                modules={[Pagination, Autoplay]}
                                pagination={{ clickable: true }}
                                autoplay={{ delay: 3000, disableOnInteraction: false }}
                                spaceBetween={20}
                                slidesPerView={1}
                                className="mt-5"
                            >
                                {images1.map((img, index) => (
                                    <SwiperSlide key={index}>
                                        <img src={img} className="img-fluid" alt={`slide-${index}`} />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
}


export default Experience;