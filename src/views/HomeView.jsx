import React from "react";
import Header from "../components/Header";
import Intro from "../components/Intro";
import Practice from "../components/Practice";
import Site from "../components/Site";
import Port from "../components/Port";
import Footer from "../components/Footer";
import Main from "../components/Main";
import Topbtn from '../components/Topbtn';

const HomeView = () => {
    return (
    <>
        <Header />
        <Main>
            <Intro />
            <Port />
            <Site />
            <Practice />
        </Main>
        <Topbtn />
        <Footer />
    </>
    );
};

export default HomeView;