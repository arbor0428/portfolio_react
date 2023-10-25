import React from "react";
import Header from "../components/Header";
import Intro from "../components/Intro";
import Practice from "../components/Practice";
import Site from "../components/Site";
import Port from "../components/Port";
import Footer from "../components/Footer";
import Skip from "../components/Skip";
import Main from "../components/Main";

const HomeView = () => {
    return (
    <>
        <Skip />
        <Header />
        <Main>
            <Intro />
            <Port />
            <Site />
            <Practice />
        </Main>
        <Footer />
    </>
    );
};

export default HomeView;