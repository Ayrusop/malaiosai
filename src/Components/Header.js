import { useState } from "react";
import { Menu } from "lucide-react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import "./Header.css";
const Header = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <header className="custom-header ">
            {/* Left Side - Social Media Icons */}
            
            <div className="custom-sidebar-toggle cursor-pointer" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                <Menu size={28} />
            </div>
            {/* Center - Navigation & Logo */}
            <nav className="custom-navigation flex items-center gap-6">
                <ul className="custom-nav-list flex gap-6 text-gray-700">
                    <li className="cursor-pointer hover:text-black">HOME</li>
                    <li className="cursor-pointer hover:text-black">ABOUT</li>
                    <li className="cursor-pointer hover:text-black">PERQUISITE</li>
                </ul>
                <div className="custom-logo text-2xl font-bold">LOGO</div>
                <ul className="custom-nav-list flex gap-6 text-gray-700">
                    <li className="cursor-pointer hover:text-black">DELIGHTES</li>
                    <li className="cursor-pointer hover:text-black">GALLERY</li>
                    <li className="cursor-pointer hover:text-black">REACH OUT</li>
                </ul>
            </nav>

            {/* Right Side - Toggle Sidebar Icon */}
            <div className="custom-social-icons flex gap-4">
                <FaFacebook className="cursor-pointer text-blue-600" />
                <FaTwitter className="cursor-pointer text-blue-400" />
                <FaInstagram className="cursor-pointer text-pink-500" />
            </div>

            {/* Sidebar (if needed) */}
            {isSidebarOpen && (
                <aside className="custom-sidebar fixed top-0 left-0 w-64 h-full bg-gray-800 text-white p-6 shadow-lg">
                    <button className="mb-4 text-lg" onClick={() => setIsSidebarOpen(false)}>
                        Close
                    </button>
                    <ul className="space-y-4">
                        <li className="cursor-pointer">Dashboard</li>
                        <li className="cursor-pointer">Settings</li>
                        <li className="cursor-pointer">Logout</li>
                    </ul>
                </aside>
            )}
        </header>
    );
};

export default Header;
