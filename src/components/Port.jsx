import React from "react";
import profile from "../assets/img/hana2.jpg";
import tool01 from "../assets/img/tool01.png";
import tool02 from "../assets/img/tool02.png";
import tool03 from "../assets/img/tool03.png";
import tool04 from "../assets/img/tool04.png";
import tool05 from "../assets/img/tool05.png";
import tool06 from "../assets/img/tool06.png";
import tool07 from "../assets/img/tool07.png";
import tool08 from "../assets/img/tool08.png";
import tool09 from "../assets/img/tool09.png";
import tool10 from "../assets/img/tool10.png";

const Port = () => {
    return (
        <section id="port" role="contentinfo">
            <div className="ocean__wrap">
                <div className="ocean">
                    <div className="wave"></div>
                </div>
            </div>
            <div className="port__inner">
                <div className="infobox__wrap">
                    <div className="left__info">
                        <h3>ABOUT ME</h3>  
                        <div className="profile__wrap">  
                            <div className="profilepic">
                                <img src={profile} alt="profile" />
                            </div>
                            <div className="profilebox">
                                <ul className="title">
                                    <li>박하나</li>
                                    <li>Hana Park</li>
                                </ul>
                                <span className="line"></span>
                                <ul className="content">
                                    <li>1991.04.28</li>
                                    <li>H.P 010. 5220. 2107</li>
                                    <li><a href="https://github.com/arbor0428" target="_blank" rel="noopener noreferrer">https://github.com/arbor0428</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="right__info">
                        <div className="infobox introducebox">
                            <h4 className="right__tit">자기소개</h4>
                            <p>안녕하세요! 
                                <br/>
                                항상 겸손한 자세로 기획자, 디자이너, 개발자의 연결 고리가 되어 협업하는 박하나입니다!
                                <br/>
                                회사에서 주어지는 업무에 빠르게 적응하고 한 명의 구성원으로써 제 몫을 톡톡히 해내겠습니다!
                                <br/>
                                <br/>
                            </p>
                        </div>
                        <div className="threebox__wrap">
                            <div className="infobox">
                                <h4 className="right__tit">학력사항<span>Education</span></h4>
                                <div className="infobox__bot">
                                    <ul className="title">
                                        <li>2004.03 ~ 2007.02</li>
                                        <li>2010.03 ~ 2014.02</li>
                                        <li>2020.11 ~ 2021.04</li>
                                    </ul>
                                    <ul className="content">
                                        <li>주엽고등학교 /졸업</li>
                                        <li>단국대학교 영어과 /졸업</li>
                                        <li>더조은컴퓨터학원</li>
                                        <li>UI/UX 개발과정 / 수료</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="infobox">
                                <h4 className="right__tit">자격사항<span>Certificate</span></h4>
                                <div className="infobox__bot">
                                    <ul className="title">
                                        <li>2017.09</li>
                                        <li>2020.10</li>
                                    </ul>
                                    <ul className="content">
                                        <li>2종 보통 운전면허(오토)</li>
                                        <li>TOEIC (870점)</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="infobox">
                                <h4 className="right__tit">경력사항<span>Working Exp.</span></h4>
                                <div className="infobox__bot">
                                    <ul className="title">
                                        <li>2021.10 ~ 2023.05</li>
                                    </ul>
                                    <ul className="content">
                                        <li>(주)아이웹 - 개발 1팀</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="infobox">
                            <h4 className="right__tit">툴<span>Tools</span></h4>
                            <ul className="tool__list">
                                <li><img src={tool01} alt="html" /></li>
                                <li><img src={tool02} alt="css" /></li>
                                <li><img src={tool03} alt="js" /></li>
                                <li><img src={tool04} alt="ps" /></li>
                                <li><img src={tool05} alt="xd" /></li>
                                <li><img src={tool06} alt="pigma" /></li>
                                <li><img src={tool07} alt="github" /></li>
                                <li><img src={tool08} alt="gitlab" /></li>
                                <li><img src={tool09} alt="react" /></li>
                                <li><img src={tool10} alt="notion" /></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Port;
