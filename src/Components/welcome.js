import React from 'react'
import "./welcome.css"
const Welcome = () => {
    return (
        <div className="row we-sec mt-5" >
            <div className="col left-sec">
                <span style={{ fontSize: "1.3rem" }}>                Welcome to Malaiosai, The Nilgiris
                </span>
                <p className='mt-2' style={{ fontSize: "3rem" }}>
                    Your Perfect Escape<br /> in the Nilgiris
                </p>
            </div>
            <div className="col" style={{ fontSize: "1.5rem" }}>
                <div>
                    Discover Malaiosai, your perfect escape to luxury, nature, and relaxation in the breathtaking Nilgiris. Surrounded by lush tea estates and rolling hills, our premium villas and vacation properties are designed for comfort, peace, and rejuvenation.
                </div>
                <div className='mt-3' style={{ color: "#8C8C8C" }}>
                    Whether it’s a weekend getaway, family vacation, romantic honeymoon, corporate retreat, or a special celebration, Malaiosai offers the ideal setting in the Blue Mountains. Enjoy spacious accommodations with modern amenities, personalized service, curated local experiences, and stunning mountain views.

                </div>
                <div className='mt-3' style={{ color: "#8C8C8C" }}>

                    Book your luxury Nilgiris accommodation directly with us today and experience the best of South Indian hill station hospitality at Malaiosai!
                </div>
            </div>
        </div >
    )
}

export default Welcome;