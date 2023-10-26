import React from "react";

const Footer = () => {
    return (
        <footer id="footer">
            <div className="ocean__wrap">
                <div className="ocean">
                    <div className="wave"></div>
                </div>
            </div>
            <div className="footer__inner">
                <div className="last">
                    <p>Thank you.</p>
                    <span>끝까지 봐주셔서 감사합니다.</span>
                </div>
                <p className="info phone">contact me. 010-5220-2107</p>
                <p className="info mail">hannah1155@naver.com</p>
                <span className="copyright">copyright ⓒ HaNa Park, All rights reserved.</span>
            </div>
        </footer>
    );
};

export default Footer;