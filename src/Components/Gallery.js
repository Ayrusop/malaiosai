import React from "react";
import "./Gallery.css";
import gallery1 from "../images/gallery1.png";
import gallery2 from "../images/gallery2.png";
import gallery3 from "../images/gallery3.png";
import gallery4 from "../images/gallery4.png";
import gallery5 from "../images/gallery5.png";
import gallery6 from "../images/gallery6.png";
import gallery7 from "../images/gallery7.png";
import gallery8 from "../images/gallery8.png";


const images = [
    { src: gallery1, title: "Image 1", text: "Description for image 1" },
    { src: gallery2, title: "Image 2", text: "Description for image 2" },
    { src: gallery3, title: "Image 3", text: "Description for image 3" },
    { src: gallery3, title: "Image 4", text: "Description for image 4" },
    { src: gallery4, title: "Image 5", text: "Description for image 5" },
    { src: gallery5, title: "Image 6", text: "Description for image 6" },
    { src: gallery6, title: "Image 7", text: "Description for image 7" },
    { src: gallery7, title: "Image 8", text: "Description for image 8" },
    { src: gallery8, title: "Image 9", text: "Description for image 9" }
];
const loopImages = [...images, ...images];
const Gallery = () => {
    return (
        <>
            <h2 className="text-center mt-5" style={{fontSize:"3rem"}}>The Gallery of Elegance</h2>
            <div className="custom-gallery mt-5">

                <div className="column custom-column">
                    <div className="scroll-container">
                        {loopImages.slice(0, 6).map((img, index) => (
                            <div key={index} className="custom-image-container">
                                <img src={img.src} alt={img.title} className="custom-image" />
                                <div className="custom-overlay">
                                    <h3>{img.title}</h3>
                                    <p>{img.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="column custom-column center-column">
                    <div className="scroll-container">
                        {loopImages.slice(6, 10).map((img, index) => (
                            <div key={index} className="custom-image-container">
                                <img src={img.src} alt={img.title} className="custom-image" />
                                <div className="custom-overlay">
                                    <h3>{img.title}</h3>
                                    <p>{img.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="column custom-column">
                    <div className="scroll-container">
                        {loopImages.slice(10, 16).map((img, index) => (
                            <div key={index} className="custom-image-container">
                                <img src={img.src} alt={img.title} className="custom-image" />
                                <div className="custom-overlay">
                                    <h3>{img.title}</h3>
                                    <p>{img.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
      
        </>

    );
};

export default Gallery;
