import React, { useState } from "react";
import "./Gallery.css";
import gallery1 from "../images/gallery/gallery1.jpeg";
import gallery2 from "../images/gallery/gallery2.jpeg";
import gallery3 from "../images/gallery/gallery3.jpeg";
import gallery4 from "../images/gallery/gallery4.jpeg";
import gallery5 from "../images/gallery/gallery5.jpeg";
import gallery6 from "../images/gallery/gallery6.jpeg";
import gallery7 from "../images/gallery/gallery7.jpeg";
import gallery8 from "../images/gallery/gallery8.jpeg";
import gallery9 from "../images/gallery/gallery9.jpeg";
import gallery10 from "../images/gallery/gallery10.jpeg";
import gallery11 from "../images/gallery/gallery11.jpeg";
import gallery12 from "../images/gallery/gallery12.jpeg";
import gallery13 from "../images/gallery/gallery13.jpeg";
import gallery14 from "../images/gallery/gallery14.jpeg";
import gallery15 from "../images/gallery/gallery15.jpeg";
import gallery16 from "../images/gallery/gallery16.jpeg";
import gallery17 from "../images/gallery/gallery17.jpeg";
import gallery18 from "../images/gallery/gallery18.jpeg";
import { FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";


const images = [
    { src: gallery1, title: "Image 1", text: "Description for image 1" },
    { src: gallery2, title: "Image 2", text: "Description for image 2" },
    { src: gallery3, title: "Image 3", text: "Description for image 3" },
    { src: gallery4, title: "Image 4", text: "Description for image 4" },
    { src: gallery5, title: "Image 5", text: "Description for image 5" },
    { src: gallery6, title: "Image 6", text: "Description for image 6" },
    { src: gallery7, title: "Image 7", text: "Description for image 7" },
    { src: gallery8, title: "Image 8", text: "Description for image 8" },
    { src: gallery9, title: "Image 9", text: "Description for image 9" },
    { src: gallery10, title: "Image 9", text: "Description for image 9" },
    { src: gallery11, title: "Image 9", text: "Description for image 9" },
    { src: gallery12, title: "Image 9", text: "Description for image 9" },
    { src: gallery13, title: "Image 9", text: "Description for image 9" },
    { src: gallery14, title: "Image 9", text: "Description for image 9" },
    { src: gallery15, title: "Image 9", text: "Description for image 9" },
    { src: gallery16, title: "Image 9", text: "Description for image 9" },
    { src: gallery17, title: "Image 9", text: "Description for image 9" },
    { src: gallery18, title: "Image 9", text: "Description for image 9" },
];
const loopImages = [...images, ...images];
const Gallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const openGallery = (index) => {
        setSelectedImage(images[index].src);
        setCurrentIndex(index);
    };

    const closeGallery = () => {
        setSelectedImage(null);
    };

    const prevImage = () => {
        const newIndex = (currentIndex - 1 + images.length) % images.length;
        setCurrentIndex(newIndex);
        setSelectedImage(images[newIndex].src);
    };

    const nextImage = () => {
        const newIndex = (currentIndex + 1) % images.length;
        setCurrentIndex(newIndex);
        setSelectedImage(images[newIndex].src);
    };
    return (
        <div className="gallery-con">
            <h2 className="text-center" style={{ fontSize: "3rem" }}>The Gallery of <br/>Elegance</h2>
            <div className="desktop-gallery mt-5">
                <div className="custom-gallery">
                    {Array(3).fill().map((_, colIndex) => (
                        <div key={colIndex} className={`custom-column ${colIndex === 1 ? "center-column" : ""}`}>
                            <div className="scroll-container">
                                {loopImages.slice(colIndex * 5, (colIndex + 1) * 5).map((img, index) => (
                                    <div key={index} className="custom-image-container">
                                        <img src={img.src} alt={img.title} className="custom-image img-fluid" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* MOBILE MARQUEE GALLERY */}
            <div className="mobile-gallery mt-5">
                {Array(3).fill().map((_, rowIndex) => (
                    <div key={rowIndex} className="mobile-row">
                        <div className="scroll-content">
                            {[...loopImages.slice(rowIndex * 5, (rowIndex + 1) * 5),
                            ...loopImages.slice(rowIndex * 5, (rowIndex + 1) * 5)] // Duplicate images
                                .map((img, index) => (
                                    <img key={index} src={img.src} alt={img.title} />
                                ))}
                        </div>
                    </div>
                ))}
            </div>

            <div className="text-center mt-5 mb-5">
                <button className="view-gallery-btn" onClick={() => openGallery(0)}>View Gallery</button>
            </div>

            {selectedImage && (
                <>
                    <div className="gallery-overlay" onClick={closeGallery}></div>
                    <div className="gallery-modal">
                        <FaTimes className="close-btn" onClick={closeGallery} />
                        <FaChevronLeft className="prev-btn" onClick={prevImage} />
                        <img src={selectedImage} alt="Gallery" className="modal-image" />
                        <FaChevronRight className="next-btn" onClick={nextImage} />
                    </div>
                </>
            )}

        </div>

    );
};

export default Gallery;
