import { useState } from "react";
import { Menu } from "lucide-react";
import { FaFacebook, FaWhatsapp, FaInstagram } from "react-icons/fa";
import "./Header.css";
import { Link } from 'react-scroll';
import logo from './MALAIOSAI (1).png'
const Header = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <header className="custom-header ">
            {/* Mobile Sidebar Toggle */}
            <div className="custom-sidebar-toggle lg:hidden" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                <Menu size={28} />
            </div>
            <div className="custom-sidebar-toggle1 cursor-pointer lg:hidden" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                <Menu size={28} />
            </div>



            {/* Logo (Always Visible) */}


            {/* Desktop Navigation */}
            <nav className="custom-navigation">
                <ul className="custom-nav-list">
                    <li>
                        <Link to="home-video" smooth={true} duration={500}>
                            <span className="label-up">HOME</span><span className="label-up">HOME</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="wel-come" smooth={true} duration={500}>
                            <span className="label-up">ABOUT</span><span className="label-up">ABOUT</span>
                        </Link>
                        <Link to="experience" smooth={true} duration={500}>
                            <span className="label-up">ABOUT</span><span className="label-up">ABOUT</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="experience" smooth={true} duration={500}>
                            <span className="label-up">PERQUISITE</span><span className="label-up">PERQUISITE</span>
                        </Link>
                    </li>

                </ul>
                <img className="custom-logo" src={logo} alt={logo}/>
                <ul className="custom-nav-list">
                    <li>
                        <Link to="gallery" smooth={true} duration={500}>
                            <span className="label-up">DELIGHTES</span><span className="label-up">DELIGHTES</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="gallery" smooth={true} duration={500}>
                            <span className="label-up">GALLERY</span><span className="label-up">GALLERY</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="reach-out" smooth={true} duration={500}>
                            <span className="label-up">REACH OUT</span><span className="label-up">REACH OUT</span>
                        </Link>
                    </li>
                </ul>
            </nav>

            {/* Social Icons (Always Visible) */}
            <div className="custom-social-icons">
                <a href="https://www.instagram.com/malaiosai__?igsh=djFoN3hwdXQzM3Zw" style={{ textDecoration: "none" }}> <FaFacebook className="text-blue-600" /></a>
                <a href="https://api.whatsapp.com/send?phone=919360713003&text=" style={{ textDecoration: "none" }}> <FaWhatsapp className="text-green-600" /></a>
                <a href="https://www.instagram.com/malaiosai__?igsh=djFoN3hwdXQzM3Zw" style={{ textDecoration: "none" }}><FaInstagram className="text-pink-500" /></a>
            </div>

            {/* Mobile Sidebar */}
            {
                isSidebarOpen && (
                    <aside className="custom-sidebar">
                        <button className="close-btnn" onClick={() => setIsSidebarOpen(false)}>X</button>
                        <ul onClick={() => setIsSidebarOpen(false)}>
                            <li>
                                <Link to="wel-come" smooth={true} duration={500}>
                                    ABOUT
                                </Link>
                            </li>
                            <li>
                                <Link to="experience" smooth={true} duration={500}>
                                    PERQUISITE
                                </Link>
                            </li>
                            <li>
                                <Link to="gallery" smooth={true} duration={500}>
                                    DELIGHTES</Link>
                            </li>
                            <li> <Link to="gallery" smooth={true} duration={500}>GALLERY
                            </Link>
                            </li>
                            <li>
                                <Link to="reach-out" smooth={true} duration={500}>
                                    REACH OUT
                                </Link>
                            </li>
                        </ul>
                    </aside>
                )
            }
        </header >
    );
};

export default Header;
