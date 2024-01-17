import React from "react";

const Header = () => {
        
    return (
        <header id="header" role="banner">
            <div className="header__inner">
                <div className="header__ver">
                    <p>2024</p>
                </div>
                <h2 className="header__tit">Portfolio</h2>
                <nav className="header__nav" role="navigation" aria-label="메인메뉴">
                    <ul>
                        <li>
                            <a href="#port">About me</a>
                        </li>
                        <li>
                            <a href="#site">Works</a>
                        </li>
                        <li>
                            <a href="#practice">Practices</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
