import React, { useState, useEffect } from 'react';

const Intro = () => {
    //typing
    const [content, setContent] = useState("Problem Solver \n Hana Park.");
    const [displayedText, setDisplayedText] = useState('');
    let i = 0;

    useEffect(() => {
        const intervalId = setInterval(() => {
            let txt = content[i++];
            setDisplayedText(prevText => prevText + (txt === "\n" ? "<br/>" : txt));
            if (i > content.length) {
                setDisplayedText('');
                i = 0;
            }
        }, 200);

        return () => clearInterval(intervalId);
    }, [content]);

    return (
        <section id="intro">
            <div className="intro__center">
                <div className="intro__text">
                    <span className="text" dangerouslySetInnerHTML={{ __html: displayedText }} />
                    <span className="blink">|</span>
                </div>
                <p className="info phone">contact me. 010-5220-2107</p>
                <a href="https://github.com/whynot1217" className="info mail" target="_blank">https://github.com/arbor0428</a>
                <div className="scrolldown">
                    <a href="#" title="scrolldown">
                        <p>scrolldown</p>
                        <div className="tri"></div>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Intro;