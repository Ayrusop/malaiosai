import React, { useEffect, useState, useRef } from "react";
import tripTime from "../images/image (3).png";
import tripTime2 from "../images/image (1).png";
import tripTime3 from "../images/image (2).png";
import "./ReachOut.css"
const ReachOut = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isSticky, setIsSticky] = useState(false);
  const [hasScrolledThrough, setHasScrolledThrough] = useState(false);
  const reachOutRef = useRef(null);
  const [activeIndexx, setActiveIndexx] = useState(null);
  const toggleAccordion = (index) => {
    setActiveIndexx(activeIndexx === index ? null : index);
  };
  const faqs = [
    { question: "What is the check-in and check-out time?", answer: "Check-in is from 2:00 PM, and check-out is at 11:00 AM. Early check-in and late check-out are subject to availability." },
    { question: "Do you provide meals?", answer: "Yes, we offer a curated menu with delicious home-cooked meals. BBQ arrangements are also available.." },
    { question: "Can we bring outside food?", answer: "Due to local plastic regulations, we do not allow outside food. However, we provide a variety of in-house food options." },
    { question: "Are pets allowed?", answer: "No, pets are not allowed at Malayosai." },
    { question: "Do you offer corporate retreat packages?", answer: "Yes! We welcome corporate gatherings and team retreats. Contact us for custom packages." },
    { question: "Do you offer discounts for long stays or group bookings?", answer: "Yes! We offer flexible pricing for bulk bookings and extended stays. Contact us for the bestdeals" }
  ];
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsSticky(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    if (reachOutRef.current) {
      observer.observe(reachOutRef.current);
    }

    return () => {
      if (reachOutRef.current) observer.unobserve(reachOutRef.current);
    };
  }, []);

  useEffect(() => {
    const handleScroll = (event) => {
      if (!isSticky || hasScrolledThrough) return;

      if (event.deltaY > 0) {
        setActiveIndex((prev) => Math.min(prev + 1, 2));
      } else {
        setActiveIndex((prev) => Math.max(prev - 1, 0));
      }

      if (activeIndex === 2 && event.deltaY > 0) {
        setHasScrolledThrough(true);
      }

      event.preventDefault();
    };

    window.addEventListener("wheel", handleScroll, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, [isSticky, activeIndex, hasScrolledThrough]);

  return (
    <>
      <div ref={reachOutRef} className={`reach-out-wrapper ${hasScrolledThrough ? "exit" : ""}`}>
        <div className={`trip-time-container ${isSticky && !hasScrolledThrough ? "sticky" : ""}`}>
          <div className="trip-time-content">
            <h2 className="trip-title">
              Easily reach Malayosai <br /> from major cities
            </h2>

            <div className={`trip-time-section ${activeIndex === 0 ? "active" : ""}`} data-index="0">
              <h2>By Road</h2>
              <p>Well-connected highways from Coimbatore, Bangalore, and Chennai.</p>
            </div>

            <div className={`trip-time-section ${activeIndex === 1 ? "active" : ""}`} data-index="1">
              <h2>By Train</h2>
              <p>
                The nearest railway station is in Metupalayam, Coimbatore (cab pickup available).
              </p>
            </div>

            <div className={`trip-time-section ${activeIndex === 2 ? "active" : ""}`} data-index="2">
              <h2>By Air</h2>
              <p>
                The closest airport is Coimbatore International Airport (2.5-hour drive).
              </p>
            </div>
          </div>

          <div className="trip-time-images">
            <div className={`trip-image ${activeIndex === 0 ? "active" : ""}`}>
              <img className="img-fluid" src={tripTime} alt="By Road" />
            </div>
            <div className={`trip-image ${activeIndex === 1 ? "active" : ""}`}>
              <img className="img-fluid" src={tripTime2} alt="By Train" />
            </div>
            <div className={`trip-image ${activeIndex === 2 ? "active" : ""}`}>
              <img className="img-fluid" src={tripTime3} alt="By Air" />
            </div>
          </div>
        </div>
      </div>
      <div className="row reachout-sec mt-5 d-flex">
        <div className="col-lg-6 col-md-6 col-12 text-start">
          <h2 style={{ fontSize: "3rem" }}>Frequently Asked <br />Questions</h2>
          <p style={{ fontSize: "1.2rem", color: "#8C8C8C" }}>For any unanswered questions, reach out via contact.<br />We’ll respond within a day to assist you.</p>
        </div>
        <div className="col-lg-6 col-md-6 col-12 text-start">
          <div className="accordion">
            {faqs.map((faq, index) => (
              <div key={index} className={`accordion-item ${activeIndexx === index ? "active" : ""}`}>
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
    </>

  );
};

export default ReachOut;
