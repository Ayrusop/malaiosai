import { useState } from "react";
import "./Surrounding.css";
import { FaLocationArrow } from "react-icons/fa";
import ooty from "../images/ooty.png";
import coonoor from "../images/coonoor.png";
import Mudumalai from "../images/Mudumalai.png";
import Pykara from "../images/Pykara.png";
import emerald from "../images/emerald.png";
import Kodanad from "../images/Kodanad.png";


const Surrounding = () => {
    const [hoverState, setHoverState] = useState({});
    

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

   

    const places = [
        { title: "Ooty – Queen of Hill Stations", img: ooty, description: "Explore Ooty’s tea gardens, Ooty Lake, Nilgiri Mountain Railway, Botanical Gardens, and Doddabetta Peak.", link: "https://www.google.com/maps/dir/Misty+mount,+Balacola,+Tamil+Nadu+643003/Ooty,+Tamil+Nadu/@11.3854656,76.7148509,14z/data=!4m13!4m12!1m5!1m1!1s0x3ba8956608c11465:0x53c76b094b438b8e!2m2!1d76.7411629!2d11.3609592!1m5!1m1!1s0x3ba8bd84b5f3d78d:0x179bdb14c93e3f42!2m2!1d76.6950324!2d11.4102038?entry=ttu&g_ep=EgoyMDI1MDMxMi4wIKXMDSoASAFQAw%3D%3D" },
        { title: "Coonoor – Peaceful Hill Retreat", img: coonoor, description: "Discover Coonoor’s Sim’s Park, Lamb’s Rock, Dolphin’s Nose, and tea estate tours.", link: "https://www.google.com/maps/dir/Misty+mount,+Balacola,+Tamil+Nadu+643003/COONOOR+BUS+STAND,+Alwarpet,+Coonoor,+Tamil+Nadu/@11.3492432,76.7553999,14z/data=!4m13!4m12!1m5!1m1!1s0x3ba8956608c11465:0x53c76b094b438b8e!2m2!1d76.7411629!2d11.3609592!1m5!1m1!1s0x3ba894ec31ad5f43:0xa0fd9955d14ff0bc!2m2!1d76.7943966!2d11.3428065?entry=ttu&g_ep=EgoyMDI1MDMxMi4wIKXMDSoASAFQAw%3D%3D" },
        { title: "Mudumalai – Wildlife Paradise", img: Mudumalai, description: "Spot tigers, elephants, and leopards at Mudumalai National Park. Enjoy thrilling jungle safaris.", link: "https://www.google.com/maps/dir/Misty+mount,+Balacola,+Tamil+Nadu+643003/Pykara+Waterfalls,+River,+Pykara,+Sholur,+Tamil+Nadu/@11.4168857,76.6336445,13z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x3ba8956608c11465:0x53c76b094b438b8e!2m2!1d76.7411629!2d11.3609592!1m5!1m1!1s0x3ba8a3b05918eef7:0xe19d4ee3d1e2a9ec!2m2!1d76.6041457!2d11.4728995?entry=ttu&g_ep=EgoyMDI1MDMxMi4wIKXMDSoASAFQAw%3D%3D" },
        { title: "Pykara – Tranquil Lake & Waterfalls", img: Pykara, description: "Relax at Pykara’s serene lake, surrounded by shola forests. Witness the breathtaking Pykara Waterfalls and enjoy peaceful boating experiences", link: "https://www.google.com/maps/dir/Misty+mount,+Balacola,+Tamil+Nadu+643003/Emerald+Lake,+Tamil+Nadu/@11.3452915,76.6392789,13z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x3ba8956608c11465:0x53c76b094b438b8e!2m2!1d76.7411629!2d11.3609592!1m5!1m1!1s0x3ba899c76985b869:0x5b6d6ce30e619a82!2m2!1d76.6196097!2d11.3322754?entry=ttu&g_ep=EgoyMDI1MDMxMi4wIKXMDSoASAFQAw%3D%3D" },
        { title: "Emerald Lake – Nature’s Gem", img: emerald, description: "Capture the beauty of Emerald Lake’s emerald-green waters. A picturesque spot for photography, picnics, and soaking in nature’s tranquility", link: "https://www.google.com/maps/dir/Misty+mount,+Balacola,+Tamil+Nadu+643003/Mudumalai+Tiger+Reserve/@11.4920795,76.6420574,12z/data=!4m13!4m12!1m5!1m1!1s0x3ba8956608c11465:0x53c76b094b438b8e!2m2!1d76.7411629!2d11.3609592!1m5!1m1!1s0x3ba8a883ad22006b:0x95719e71c7f9c63!2m2!1d76.5345221!2d11.5622767?entry=ttu&g_ep=EgoyMDI1MDMxMi4wIKXMDSoASAFQAw%3D%3D" },
        { title: "Kotagiri – Scenic Hill Station", img: Kodanad, description: "Visit Kotagiri for Kodanad Viewpoint, Catherine Falls, and lush tea estates. A quiet hill station with panoramic views near Malayosai.", link: "https://www.google.com/maps/dir/Misty+mount,+Balacola,+Tamil+Nadu+643003/Kotagiri,+Tamil+Nadu/@11.3932574,76.7583098,13z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x3ba8956608c11465:0x53c76b094b438b8e!2m2!1d76.7411629!2d11.3609592!1m5!1m1!1s0x3ba8c02f379bca31:0xf7b63bc2a4ce6aab!2m2!1d76.8617275!2d11.4217666?entry=ttu&g_ep=EgoyMDI1MDMxMi4wIKXMDSoASAFQAw%3D%3D" },
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
                            <a href={place.link} target="_blank" rel="noopener noreferrer">
                                <img className="hover-image img-fluid" src={place.img} alt={place.title} />
                            </a>

                            {hoverState[index]?.isHovered && (
                                <>
                                    {/* <div className="hover-overlay"></div> */}
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
            
        </div>
    );
};

export default Surrounding;
