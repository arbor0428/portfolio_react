import React, { useState, useEffect } from 'react';
import { animateScroll as scroll } from 'react-scroll';

const Intro = () => {
  const [content, setContent] = useState("Problem Solver\nHana Park.");
  const [displayedText, setDisplayedText] = useState('');
  let i = 0;
  let intervalId = null;

  useEffect(() => {
    intervalId = setInterval(() => {
      let txt = content[i++];
      setDisplayedText(prevText => prevText + (txt === "\n" ? "\n" : txt));
      if (i >= content.length) {
        clearInterval(intervalId);
      }
    }, 200);

    return () => {
      clearInterval(intervalId);
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
