import React, { useState, useEffect, useRef } from 'react';
import { animateScroll as scroll } from 'react-scroll';

const Intro = () => {
    const [displayedText, setDisplayedText] = useState('');
    const content = "Problem Solver\nHana Park.";
    const i = useRef(0); // useRef를 사용하여 i 변수를 레퍼런스로 선언

    useEffect(() => {
        const intervalId = setInterval(() => {
            let txt = content[i.current++];
            setDisplayedText(prevText => prevText + (txt === "\n" ? "\n" : txt));
            if (i.current >= content.length) {
                clearInterval(intervalId);
            }
        }, 200);

        return () => {
            clearInterval(intervalId); // 컴포넌트가 언마운트될 때 인터벌을 정리
        };
    }, [content]); // content를 의존성 배열에 추가

    const handleScroll = () => {
        scroll.scrollTo(window.innerHeight, {
            duration: 1000,
            smooth: 'easeInOutQuart',
        });
    };

    return (
        <section id="intro">
            <div className="intro__center">
                <div className="intro__text">
                    <span className="text">{displayedText}</span>
                    <span className="blink">|</span>
                </div>
                <p className="info phone">contact me. 010-5220-2107</p>
                <a
                    href="https://github.com/arbor0428"
                    className="info mail"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    https://github.com/arbor0428
                </a>
                <div className="scrolldown" onClick={handleScroll}>
                    <p>scrolldown</p>
                    <div className="tri"></div>
                </div>
            </div>
        </section>
    );
};

export default Intro;
