import { useState } from "react";
import "./Surrounding.css";
import { FaLocationArrow } from "react-icons/fa";
import ooty from "../images/ooty.png";
import coonoor from "../images/coonoor.png";
import Mudumalai from "../images/Mudumalai.png";
import Pykara from "../images/Pykara.png";
import emerald from "../images/emerald.png";
import Kodanad from "../images/Kodanad.png";
import dumy from "../images/Rectangle 2153.png";

const Surrounding = () => {
    const [hoverState, setHoverState] = useState({});
    const [activeIndex, setActiveIndex] = useState(null);

    const handleMouseMove = (e, index) => {
        const { left, top, height } = e.currentTarget.getBoundingClientRect();
        setHoverState((prev) => ({
            ...prev,
            [index]: { x: e.clientX - left, y: e.clientY - top - height, isHovered: true },
        }));
    };

    const handleMouseEnter = (index) => {
        setHoverState((prev) => ({ ...prev, [index]: { ...prev[index], isHovered: true } }));
    };

    const handleMouseLeave = (index) => {
        setHoverState((prev) => ({ ...prev, [index]: { ...prev[index], isHovered: false } }));
    };

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const places = [
        { title: "Ooty – Queen of Hill Stations", img: ooty, description: "Explore Ooty’s tea gardens, Ooty Lake, Nilgiri Mountain Railway, Botanical Gardens, and Doddabetta Peak.", link: "/ooty" },
        { title: "Coonoor – Peaceful Hill Retreat", img: coonoor, description: "Discover Coonoor’s Sim’s Park, Lamb’s Rock, Dolphin’s Nose, and tea estate tours.", link: "/coonoor" },
        { title: "Mudumalai – Wildlife Paradise", img: Mudumalai, description: "Spot tigers, elephants, and leopards at Mudumalai National Park. Enjoy thrilling jungle safaris.", link: "/mudumalai" },
        { title: "Pykara – Tranquil Lake & Waterfalls", img: Pykara, description: "Relax at Pykara’s serene lake, surrounded by shola forests. Witness the breathtaking Pykara Waterfalls and enjoy peaceful boating experiences", link: "/ooty" },
        { title: "Emerald Lake – Nature’s Gem", img: emerald, description: "Capture the beauty of Emerald Lake’s emerald-green waters. A picturesque spot for photography, picnics, and soaking in nature’s tranquility", link: "/coonoor" },
        { title: "Kotagiri – Scenic Hill Station", img: Kodanad, description: "Visit Kotagiri for Kodanad Viewpoint, Catherine Falls, and lush tea estates. A quiet hill station with panoramic views near Malayosai.", link: "/mudumalai" },
    ];

    const faqs = [
        { question: "What is the check-in and check-out time?", answer: "The moon is visible during the day because of its orbit around the Earth and the way sunlight illuminates it." },
        { question: "Do you provide meals?", answer: "The sky appears blue due to the scattering of sunlight by the atmosphere. Shorter blue wavelengths scatter more than other colors." },
        { question: "Can we bring outside food?", answer: "Scientists are constantly searching for extraterrestrial life using telescopes and space probes, but no confirmed evidence has been found yet." },
        { question: "Are pets allowed?", answer: "The Earth weighs approximately 5.97 × 10^24 kg, calculated based on gravitational force and mass distribution." },
        { question: "Do you offer corporate retreat packages?", answer: "Airplanes generate lift through their wings' shape, which creates higher pressure below and lower pressure above, allowing them to fly." },
        { question: "Do you offer discounts for long stays or group bookings?", answer: "Airplanes generate lift through their wings' shape, which creates higher pressure below and lower pressure above, allowing them to fly." }
    ];

    return (
        <div className="surrounding-sec mt-5 mb-5">
            <div className="text-center">
                <h2 style={{ fontSize: "3rem" }}>Surrounding Delights</h2>
                <p style={{ color: "#8C8C8C", fontSize: "1.5rem" }}>The Nilgiris region is a paradise filled with countless hidden gems waiting to be explored.</p>
            </div>
            <div className="row mt-5 sur-image-sec">
                {places.map((place, index) => (
                    <div key={index} className="col-lg-4 col-md-6 col-sm-12 sur-img-text">
                        <div
                            className="hover-container"
                            onMouseMove={(e) => handleMouseMove(e, index)}
                            onMouseEnter={() => handleMouseEnter(index)}
                            onMouseLeave={() => handleMouseLeave(index)}
                        >
                            <img className="hover-image" src={place.img} alt={place.title} />
                            {hoverState[index]?.isHovered && (
                                <>
                                    <div className="hover-overlay"></div>
                                    <div className="hover-arrow" style={{ transform: `translate(${hoverState[index].x}px, ${hoverState[index].y}px)` }}>
                                        <FaLocationArrow />
                                    </div>
                                </>
                            )}
                        </div>
                        <div className="text1">
                            <h3>{place.title}</h3>
                            <p>{place.description}</p>
                            <a href={place.link} className="mt-5">Visit Map</a>
                        </div>
                    </div>
                ))}
            </div>

            {/* FAQ Section */}
            <div className="row reachout-sec mt-5 d-flex">
                <div className="col-lg-6 col-md-6 col-12 text-start">
                    <h2 style={{ fontSize: "3rem" }}>Frequently Asked <br />Questions</h2>
                    <p style={{ fontSize: "1.2rem", color: "#8C8C8C" }}>For any unanswered questions, reach out via contact.<br />We’ll respond within a day to assist you.</p>
                </div>
                <div className="col-lg-6 col-md-6 col-12 text-start">
                    <div className="accordion">
                        {faqs.map((faq, index) => (
                            <div key={index} className={`accordion-item ${activeIndex === index ? "active" : ""}`}>
                                <button onClick={() => toggleAccordion(index)} className="accordion-button">
                                    {faq.question}
                                </button>
                                <div className="accordion-content">
                                    <p>{faq.answer}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Surrounding;
