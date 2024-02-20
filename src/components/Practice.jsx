import React, { useState } from 'react';
import { practiceText } from "../constants";

function Practice() {
    const [isOpen, setIsOpen] = useState(Array(practiceText.length).fill(false));

    const handleOpenClick = (index) => {

        setIsOpen(prevState => {
            const newState = [...prevState];
            newState[index] = true;
            return newState;
        });

        const siteItemParent = document.querySelector(`#practice .site__item:nth-child(${index + 1})`);
        if (siteItemParent) {
            const siblings = Array.from(siteItemParent.parentNode.children).filter(child => child !== siteItemParent);
            siblings.forEach(sibling => {
                sibling.style.transform = "scale(0)";
            });
        }

    };

    const handleCloseClick = (index) => {
        setIsOpen(prevState => {
            const newState = [...prevState];
            newState[index] = false;
            return newState;
        });

        const siteItems = document.querySelectorAll('.site__item');
        siteItems.forEach(siteItem => {
            const siblings = Array.from(siteItem.parentNode.children).filter(child => child !== siteItem);
            siblings.forEach(sibling => {
                sibling.style.transform = "scale(1)";
            });
        });

    };

    return (
        <section id="practice">
            <div className="ocean__wrap">
                <div className="ocean">
                    <div className="wave"></div>
                </div>
            </div>
            <div className="site__inner">
                <h2 className="site__title">Practices <em>react.js</em></h2>
                <div className="site__wrap">
                    {practiceText.map((practice, index) => (
                        <article className={`site__item ${isOpen[index] ? 'move' : ''}`} key={index}>
                            <div className="site__item__bg"></div>
                            <div className="open" onClick={() => handleOpenClick(index)}>
                                <p className={`first ${isOpen[index] ? 'fadeOut' : ''}`}>{practice.title}</p>
                                <span className={`wider ${isOpen[index] ? 'fadeOut' : ''}`}>펼쳐보기</span>
                            </div>
                            <div className={`intro__box ${isOpen[index] ? 'open' : ''}`} style={{ height: isOpen[index] ? '465px' : '0', transition: isOpen[index] ? 'all 1.5s 2s' : 'all 0s 0s' }}>
                                <button className="close" onClick={() => handleCloseClick(index)}>
                                    x
                                </button>
                                <p className="title">{practice.title}</p>
                                <div className="box__wrap">
                                    <p className="main">{practice.title}</p>
                                    <p className="sub">{practice.info}</p>
                                    <a href={practice.code} target="_blank" rel="noopener noreferrer">code보러가기</a>
                                    <a href={practice.view} target="_blank" rel="noopener noreferrer">site보러가기</a>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Practice;
