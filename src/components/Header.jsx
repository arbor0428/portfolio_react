import React, { useState } from "react";
import { IoMenu, IoClose } from "react-icons/io5";

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };
        
    return (
        <header id="header" role="banner">
            <div className="header__inner">
                <div className="header__ver">
                    <p>2024</p>
                </div>
                <h2 className="header__tit">Portfolio</h2>
                <button className={`header__mobile-menu-btn ${isMobileMenuOpen ? 'open' : ''}`} onClick={toggleMobileMenu} aria-label="Toggle menu">
                    {isMobileMenuOpen ? <IoClose /> : <IoMenu />}
                </button>
                <nav className={`header__nav ${isMobileMenuOpen ? 'open' : ''}`} role="navigation" aria-label="메인메뉴">
                    <ul>
                        <li>
                            <a href="#port" onClick={toggleMobileMenu}>About me</a>
                        </li>
                        <li>
                            <a href="#site" onClick={toggleMobileMenu}>Works</a>
                        </li>
                        <li>
                            <a href="#practice" onClick={toggleMobileMenu}>Practices</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
