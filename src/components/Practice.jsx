import React from "react";
import { practiceText } from "../constants";

const Practice = () => {
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
                    {practiceText.map((practice, key) => (
                        <article className={`site__item s${key+1}`} key={key}>
                            <span className="num">{key+1}.</span>
                            <div className="text">
                                <div>Make</div>
                                <div>site compliant with</div>
                                <div>react.js</div>
                            </div>
                            <h3 className="title">{practice.title}</h3>
                            <div className="btn">
                                <a href={practice.code} target="_blank" rel="noopener noreferrer">code</a>
                                <a href={practice.view} target="_blank" rel="noopener noreferrer">view</a>
                            </div>
                            <div className="info">
                                <span>{practice.info[0]}</span>
                                <span>{practice.info[1]}</span>
                                <span>{practice.info[2]}</span>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Practice;