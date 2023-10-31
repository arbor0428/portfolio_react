import React from "react";

import topbtn from "../assets/img/topbtn.png";

class Topbtn extends React.Component {
    scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    
    render() {
        return (
            <button className="topBtn" onClick={this.scrollToTop}>
                <img src={topbtn} />
            </button>
        );
    }
}

export default Topbtn;

