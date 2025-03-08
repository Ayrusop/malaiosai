import { useState } from "react";
import { Menu } from "lucide-react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import "./Header.css";

const Header = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <header className="custom-header">
            {/* Mobile Sidebar Toggle */}
            <div className="custom-sidebar-toggle cursor-pointer lg:hidden" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                <Menu size={28} />
            </div>

            {/* Logo (Always Visible) */}
           

            {/* Desktop Navigation */}
            <nav className="custom-navigation hidden lg:flex">
                <ul className="custom-nav-list">
                    <li><span className="label-up">HOME</span><span className="label-up">HOME</span></li>
                    <li><span className="label-up">ABOUT</span><span className="label-up">ABOUT</span></li>
                    <li><span className="label-up">PERQUISITE</span><span className="label-up">PERQUISITE</span></li>
                </ul>
                <div className="custom-logo">LOGO</div>
                <ul className="custom-nav-list">
                    <li><span className="label-up">DELIGHTES</span><span className="label-up">DELIGHTES</span></li>
                    <li><span className="label-up">GALLERY</span><span className="label-up">GALLERY</span></li>
                    <li><span className="label-up">REACH OUT</span><span className="label-up">REACH OUT</span></li>
                </ul>
            </nav>

            {/* Social Icons (Always Visible) */}
            <div className="custom-social-icons">
                <FaFacebook className="text-blue-600" />
                <FaTwitter className="text-blue-400" />
                <FaInstagram className="text-pink-500" />
            </div>

            {/* Mobile Sidebar */}
            {isSidebarOpen && (
                <aside className="custom-sidebar">
                    <button className="close-btn" onClick={() => setIsSidebarOpen(false)}>Close</button>
                    <ul>
                        <li>HOME</li>
                        <li>ABOUT</li>
                        <li>PERQUISITE</li>
                        <li>DELIGHTES</li>
                        <li>GALLERY</li>
                        <li>REACH OUT</li>
                    </ul>
                </aside>
            )}
        </header>
    );
};

export default Header;
