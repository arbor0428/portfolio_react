import React, { useState, useEffect, useRef } from 'react';
import { animateScroll as scroll } from 'react-scroll';

const Intro = () => {
    const [content, setContent] = useState("Problem Solver\nHana Park.");
    const [displayedText, setDisplayedText] = useState('');
    const i = useRef(0); // useRef를 사용하여 변경 가능한 변수 i를 만듭니다.


    // useRef Hook을 사용하여 intervalId를 저장합니다.
    const intervalId = useRef(null);

    useEffect(() => {
        // useRef로부터 intervalId 값을 참조합니다.
        intervalId.current = setInterval(() => {
        let txt = content[i++];
        setDisplayedText(prevText => prevText + (txt === "\n" ? "\n" : txt));
        if (i >= content.length) {
            clearInterval(intervalId.current);
        }
        }, 200);

        return () => {
        // 컴포넌트가 언마운트되거나 업데이트될 때 clearInterval을 호출합니다.
        clearInterval(intervalId.current);
        };
    }, [content]);

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
